/*
|------------------------------------------------------------------------------------------------------------------
| Author:	    TS MOGANO
| Create date:  02/03/2021
| Description:  IDAS - Genio API Date(s) utilities class 
|------------------------------------------------------------------------------------------------------------------
 */

/*
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| Dependencies
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
const { appendLeadingZero, padLeft, padRight } = require(`./functions`);

/*
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| Functions
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
const dateParts = () => {
    var date = new Date();
    return {
        year: date.getFullYear(),
        month: appendLeadingZero((date.getMonth() + 1)),
        day: appendLeadingZero(date.getDate()),
        hour: appendLeadingZero(date.getHours()),
        minutes: appendLeadingZero(date.getMinutes()),
        seconds: appendLeadingZero(date.getSeconds()),
        ms: padRight(padLeft(date.getMilliseconds(), `000`), `000`),
        dow: date.getDay()
    };
}
const yyyymmdd = () => {
    var dp = dateParts();
    return `${dp.year}${dp.month}${dp.day}`.trim();
}
const yyyymmddDashSeparator = () => {
    var dp = dateParts();
    return `${dp.year}-${dp.month}-${dp.day}`.trim();
}
const yyyymmddDotSeparator = () => {
    var dp = dateParts();
    return `${dp.year}.${dp.month}.${dp.day}`.trim();
}
const hms = () => {
    var dp = dateParts();
    return `${dp.hour}:${dp.minutes}:${dp.seconds}`.trim();
}
const Thms = () => {
    var dp = dateParts();
    return `T${hms()}`.trim();
}
const ThmsZ = () => {
    var dp = dateParts();
    return `${Thms()}+0200`.trim();
}
const hmsms = () => {
    var dp = dateParts();
    return `${dp.hour}:${dp.minutes}:${dp.seconds}.${dp.ms}`.trim();
}
const Thmsms = () => {
    var dp = dateParts();
    return `T${hmsms()}`.trim();
}
const ThmsmsZ = () => {
    var dp = dateParts();
    return `${Thmsms()}+0200`.trim();
}
const yyyymmddhms = () => {
  return `${yyyymmdd()} ${hms()}`.trim();
}
const yyyymmddhmsDashSeparator = () => {
  return `${yyyymmddDashSeparator()} ${hms()}`.trim();
}
const yyyymmddhmsDotSeparator = () => {
  return `${yyyymmddDotSeparator()} ${hms()}`.trim();
}
const yyyymmddhmsms = () => {
  return `${yyyymmdd()} ${hmsms()}`.trim();
}
const yyyymmddhmsmsDashSeparator = () => {
  return `${yyyymmddDashSeparator()} ${hmsms()}`.trim();
}
const yyyymmddhmsmsDotSeparator = () => {
  return `${yyyymmddDotSeparator()} ${hmsms()}`.trim();
}
const yyyymmddThms = () => {
  return `${yyyymmdd()}${Thms()}`.trim();
}
const yyyymmddThmsDashSeparator = () => {
  return `${yyyymmddDashSeparator()}${Thms()}`.trim();
}
const yyyymmddThmsDotSeparator = () => {
  return `${yyyymmddDotSeparator()}${Thms()}`.trim();
}
const yyyymmddThmsms = () => {
  return `${yyyymmdd()}${Thmsms()}`.trim();
}
const yyyymmddThmsmsDashSeparator = () => {
  return `${yyyymmddDashSeparator()}${Thmsms()}`.trim();
}
const yyyymmddThmsmsDotSeparator = () => {
  return `${yyyymmddDotSeparator()}${Thmsms()}`.trim();
}
const yyyymmddThmsZ = () => {
  return `${yyyymmdd()}${ThmsZ()}`.trim();
}
const yyyymmddThmsZDashSeparator = () => {
  return `${yyyymmddDashSeparator()}${ThmsZ()}`.trim();
}
const yyyymmddThmsZDotSeparator = () => {
  return `${yyyymmddDashSeparator()}${ThmsZ()}`.trim();
}
const yyyymmddThmsmsZ = () => {
  return `${yyyymmdd()}${ThmsmsZ()}`.trim();
}
const yyyymmddThmsmsZDashSeparator = () => {
  return `${yyyymmddDashSeparator()}${ThmsmsZ()}`.trim();
}
const yyyymmddThmsmsZDotSeparator = () => {
  return `${yyyymmddDotSeparator()}${ThmsmsZ()}`.trim();
}
const yyyymmddhmsmsDotAsTimestamp = () => { return (new Date(yyyymmddhmsmsDotSeparator()).getTime()) / 1000 ; }

/*
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| module exports
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
module.exports = {
    yyyymmdd: yyyymmdd,
    yyyymmddDashSeparator: yyyymmddDashSeparator,
    yyyymmddDotSeparator: yyyymmddDotSeparator,
    yyyymmddhms: yyyymmddhms,
    yyyymmddhmsDashSeparator: yyyymmddhmsDashSeparator,
    yyyymmddhmsDotSeparator: yyyymmddhmsDotSeparator,
    yyyymmddhmsms: yyyymmddhmsms,
    yyyymmddhmsmsDashSeparator: yyyymmddhmsmsDashSeparator,
    yyyymmddhmsmsDotSeparator: yyyymmddhmsmsDotSeparator,
    yyyymmddThms: yyyymmddThms,
    yyyymmddThmsDashSeparator: yyyymmddThmsDashSeparator,
    yyyymmddThmsDotSeparator: yyyymmddThmsDotSeparator,
    yyyymmddThmsms: yyyymmddThmsms,
    yyyymmddThmsmsDashSeparator: yyyymmddThmsmsDashSeparator,
    yyyymmddThmsmsDotSeparator: yyyymmddThmsmsDotSeparator,
    yyyymmddThmsZ: yyyymmddThmsZ,
    yyyymmddThmsZDashSeparator: yyyymmddThmsZDashSeparator,
    yyyymmddThmsZDotSeparator: yyyymmddThmsZDotSeparator,
    yyyymmddThmsmsZ: yyyymmddThmsmsZ,
    yyyymmddThmsmsZDashSeparator: yyyymmddThmsmsZDashSeparator,
    yyyymmddThmsmsZDotSeparator: yyyymmddThmsmsZDotSeparator,
    yyyymmddhmsmsDotAsTimestamp: yyyymmddhmsmsDotAsTimestamp
}
