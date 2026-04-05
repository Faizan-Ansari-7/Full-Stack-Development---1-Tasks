const EventEmitter = require("events");
const event = new EventEmitter();
event.on("registerUser", (username, status) => {
    console.log(`Welcome ${username}`);
    if (status === "fresh") {
        event.emit("generateEmail", username);
    }
});
event.on("generateEmail", (username) => {
    const email = username + "@insti.co.in";
    console.log(`Generated Email: ${email}`);
});
event.emit("registerUser", "abc", "fresh");