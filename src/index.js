"use strict";
exports.__esModule = true;
var Alexa = require("alexa-sdk");
var handlers = {
    "AboutIntent": function () {
        var self = this;
        var output = "This was created be Jim Lesperance @cooljl31";
        self.emit(":tellWithCard", output, "Modern Web Intent", output);
    },
    "ModernIntent": function () {
        var self = this;
        var intentRequest = self.event.request;
        var value = intentRequest.intent.slots.Word.value;
        var output = "";
        if (value.toLowerCase() == "ping") {
            output = "I am giving you a pong";
        }
        else {
            output = "YOYO Brolo";
        }
        self.emit(":tellWithCard", output, "Modern Web Intent", output);
    },
    "TimeIntent": function () {
        var self = this;
        var intentRequest = self.event.request;
        var timeValue = intentRequest.intent.slots.DateTime.value;
        var locationValue = intentRequest.intent.slots.Location.value;
        var output = "";
        self.emit(":tellWithCard", output, "Modern Web Intent", output);
    }
};
var Handler = /** @class */ (function () {
    function Handler(event, context, callback) {
        var alexa = Alexa.handler(event, context);
        alexa.appId = "my_alexa_id";
        alexa.registerHandlers(handlers);
        alexa.execute();
    }
    return Handler;
}());
exports.Handler = Handler;
