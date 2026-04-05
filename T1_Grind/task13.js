const EventEmitter = require("events");
const ee = new EventEmitter();
// Event to calculate total marks
ee.on("calculate", () => {
    const marks = [22, 18, 20, 25, 24];
    let total = 0;
    for (let i = 0; i < marks.length; i++) {
        total += marks[i];
    }
    console.log("Total Marks:", total);
    ee.emit("percentage", total);
});
ee.on("percentage", (total) => {
    const totalMaxMarks = 5 * 25;
    const percentage = (total / totalMaxMarks) * 100;
    console.log("Percentage:", percentage + "%");
});
ee.emit("calculate");