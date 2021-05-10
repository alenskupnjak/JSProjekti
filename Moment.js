const nekiDatum = "2021-05-08T22:15:00Z";

// instantiate a moment object
var NowMoment = moment();

console.log(NowMoment);
console.log(NowMoment.format());
console.log(nekiDatum);

console.log("001", moment().startOf("year")); // set to January 1st, 12:00 am this year
console.log("002", moment().startOf("month")); // set to the first of this month, 12:00 am
console.log("003", moment().startOf("quarter")); // set to the beginning of the current quarter, 1st day of months, 12:00 am
console.log("004", moment().startOf("week")); // set to the first day of this week, 12:00 am
console.log("005", moment().startOf("isoWeek")); // set to the first day of this week according to ISO 8601, 12:00 am
console.log("006", moment().startOf("day")); // set to 12:00 am today
console.log("007", moment().startOf("hour")); // set to now, but with 0 mins, 0 secs, and 0 ms
console.log("008", moment().startOf("minute")); // set to now, but with 0 seconds and 0 milliseconds
console.log("009", moment().startOf("second")); // same as moment().milliseconds(0);

console.log(moment().subtract(nekiDatum));
console.log(moment().subtract(nekiDatum));

const now = moment(new Date()); //todays date
const end = moment(nekiDatum); // another date
const duration = moment.duration(now.diff(end));
console.log({ duration });

const days = duration.asDays();
console.log(days);

// instantiate a JavaScript Date object
var NowDate = new Date();

let endDate = NowMoment.utcOffset("America/New_York", true)
  .endOf("day")
  .toDate();

console.log(endDate);
