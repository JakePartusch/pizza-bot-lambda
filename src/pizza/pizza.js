const axios = require("axios");

const TOPPINGS = {
  PEPPERONI: "P",
  HAMBURGER: "B",
  SAUSAGE: "S"
};

const SIZE = {
  LARGE: "14SCREEN",
  MEDIUM: "12SCREEN",
  SMALL: "10SCREEN"
};

const buildPizza = (toppings, size) => {
  let pizza = {
    Code: SIZE[size.toUpperCase()],
    Qty: 1,
    ID: 1,
    isNew: false,
    Options: {
      X: {
        "1/1": "1"
      },
      C: {
        "1/1": "1"
      }
    }
  };
  const toppingsCodes = toppings.map(
    topping => TOPPINGS[topping.toUpperCase()]
  );
  toppingsCodes.forEach(code => {
    pizza.Options[code] = {
      "1/1": "1"
    };
  });
  return pizza;
};

const priceOrder = async pizza => {
  const order = {
    Order: {
      Address: {
        Street: "6235 WILLIAM ST",
        City: "OMAHA",
        Region: "NE",
        PostalCode: "68106-1563",
        Type: "House",
        StreetName: "WILLIAM ST",
        StreetNumber: "6235"
      },
      Coupons: [],
      CustomerID: "",
      Email: "",
      Extension: "",
      FirstName: "",
      LastName: "",
      LanguageCode: "en",
      OrderChannel: "OLO",
      OrderID: "rFQAgEVfoukdvDotiaAa",
      OrderMethod: "Web",
      OrderTaker: null,
      Payments: [],
      Phone: "",
      PhonePrefix: "",
      Products: pizza,
      ServiceMethod: "Delivery",
      SourceOrganizationURI: "order.dominos.com",
      StoreID: "6112",
      Tags: {},
      Version: "1.0",
      NoCombine: true,
      Partners: {},
      OrderInfoCollection: [],
      metaData: {
        calculateNutrition: "true"
      }
    }
  };
  return axios.post("https://order.dominos.com/power/price-order", order);
};

module.exports = {
  buildPizza,
  priceOrder
};
