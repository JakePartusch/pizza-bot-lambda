const buildSuccessfulResponse = message => ({
  sessionAttributes: {},
  dialogAction: {
    type: "Close",
    fulfillmentState: "Fulfilled",
    message: {
      contentType: "PlainText",
      content: message
    }
  }
});

module.exports = {
  buildSuccessfulResponse
};
