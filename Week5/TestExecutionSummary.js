"use strict";
//Test Execution Summary using Object Literal
let testExecutionSummary = {
    suiteName: "TestSuiteName",
    totalTests: 10,
    passedTests: 8,
    failedTests: 2,
    executionTime: 2
};
console.log(testExecutionSummary);
console.log(`Test Execution Pass percentage: ${((testExecutionSummary.passedTests / testExecutionSummary.totalTests) * 100)}`);
//Check Execution Completed status
if (testExecutionSummary.failedTests > 0) {
    console.log(`Execution Completed with Failures - ${testExecutionSummary.failedTests}`);
}
else if (testExecutionSummary.failedTests === 0) {
    console.log(`Execution Successful`);
}
else {
    console.log("Enter a valid Count");
}
