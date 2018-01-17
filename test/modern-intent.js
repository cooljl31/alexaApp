var Context = require("aws-lambda-mock-context");
var expect = require("chai").expect;
var index = require("../src/index");

var ctx = Context();

describe('Testing a session with ModernIntent', function() {
    var speechResponse = null;
    var speechErro = null;

    before(function(done) {
        index.Handler({
            "session":{
              "sessionId": "SessionId.1233-dsd-d3dd2332dwwwf8sdf9789df8sod",
              "application": {
                "applicationId": "my_alexa_id"
              },
              "attributest": {},
              "user":{
                "userId": null
              },
              "new": true
            },
            "request": {
              "type": "IntentRequest",
              "requestId": "EdwRequestId.2343e2ed-24dwd-1212-1231",
              "timestamp": "2018-01-16T01:0502Z",
              "intent": {
                "name": "ModernIntent",
                "slots": {
                  "Word": {
                    "name": "Word",
                    "value": "1ping"
                  }
                }
              },
            "locale": "en-US"
            },
            "version": "1.0"
            }, ctx);

      ctx.Promise
        .then(response => {speechResponse = response; done(); })
        .catch(error => {speechErro = error;  done();})
    });


    describe('Is the response correct ', function() {
      it('should not have an error', function() {
        expect(speechErro).to.be.null;
      });
      it('should have a response', function() {
      console.log(speechResponse);
        expect(speechResponse).not.to.be.null;
      });
    });
});
