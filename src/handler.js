const { priceOrder, buildPizza } = require("./pizza/pizza");
const { buildSuccessfulResponse } = require("./utils/lex.utils");

module.exports.orderPizza = async event => {
  console.log(JSON.stringify(event, null, 2));

  //Grab the data from the Lex Slots
  const { PizzaType, PizzaSize } = event.currentIntent.slots;

  //Build a pizza object from the given Slots
  const pizza = buildPizza([PizzaType], PizzaSize);

  //Make an async call to the Dominos API
  const response = await priceOrder(pizza);
  console.log(JSON.stringify(response.data, null, 2));

  //Build the response message
  const { Payment } = response.data.Order.Amounts;
  const { EstimatedWaitMinutes } = response.data.Order;
  const message = `Your total will be, $${Payment}. And your estimated wait time is ${EstimatedWaitMinutes} minutes. Please have cash or a credit card ready when your pizza is delivered.`;
  return buildSuccessfulResponse(message);
};
