import * as Alexa from "alexa-sdk";

  const handlers = {
    "AboutIntent": function() {
      let self: Alexa.Handler = this;
      let output: string = "This was created be Jim Lesperance @cooljl31";
      self.emit(":tellWithCard", output, "Modern Web Intent", output);
    },

    "ModernIntent": function() {
      let self: Alexa.Handler = this;
      let intentRequest = <Alexa.IntentRequest> self.event.request;
      let value = intentRequest.intent.slots.Word.value;
      let output = "";

      if( value.toLowerCase() == "ping" ) {
        output = "I am giving you a pong";
      } else {
        output = "YOYO Brolo";
      }
      self.emit(":tellWithCard", output, "Modern Web Intent", output);
    },

    "TimeIntent": function() {
      let self: Alexa.Handler = this;
      let intentRequest = <Alexa.IntentRequest> self.event.request;
      let timeValue = intentRequest.intent.slots.DateTime.value;
      let locationValue = intentRequest.intent.slots.Location.value;
      let output = "";
      self.emit(":tellWithCard", output, "Modern Web Intent", output);
    }

  };

export class Handler {
  constructor(event: Alexa.RequestBody, context: Alexa.Context, callback: Function)
  {
    let alexa = Alexa.handler(event, context);
    alexa.appId = "my_alexa_id";

    alexa.registerHandlers(handlers);
    alexa.execute();
  }

}
