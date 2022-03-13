const events = require("events");
const event = new events.EventEmitter();

event.on("event0", function () {
    console.log("From Event 0");
})

event.on("event1", function () {
    console.log("From Event 1");
    event.emit("event0");
})

event.emit("event1");