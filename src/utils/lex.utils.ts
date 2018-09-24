import { LexResponse } from "../../types/lex";

export const buildSuccessfulResponse = (message: string): LexResponse => ({
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
