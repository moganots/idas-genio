console.log(`\r\n===> Start Test:\r\n${__filename}`);

const { toMidnightInHours, DateDiff } = require("../../../common/date-util");

const startDate = new Date();
const endDate = toMidnightInHours();

console.log(`\r\nstartDate=\r\n${startDate}\r\nendDate=\r\n${endDate}`)

console.log(`\r\nDateDiff.InYears=\r\n${DateDiff.InYears(startDate, endDate)}`);
console.log(`\r\nDateDiff.InMonths=\r\n${DateDiff.InMonths(startDate, endDate)}`);
console.log(`\r\nDateDiff.InWeeks=\r\n${DateDiff.InWeeks(startDate, endDate)}`);
console.log(`\r\nDateDiff.InDays=\r\n${DateDiff.InDays(startDate, endDate)}`);
console.log(`\r\nDateDiff.InHours=\r\n${DateDiff.InHours(startDate, endDate)}`);
console.log(`\r\nDateDiff.InMinutes=\r\n${DateDiff.InMinutes(startDate, endDate)}`);
console.log(`\r\nDateDiff.InSeconds=\r\n${DateDiff.InSeconds(startDate, endDate)}`);
console.log(`\r\nDateDiff.InMilliSeconds=\r\n${DateDiff.InMilliSeconds(startDate, endDate)}`);