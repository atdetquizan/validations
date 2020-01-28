import moment from "moment";
/**
 * Format of startTime and endTime
 */
const values = {
  id: null,
  startTime: moment("09:30", "hh:mm").format(),
  endTime: moment("22:29", "hh:mm").format()
};
/**
 * Lista of turns
 */
const turnsList = [
  { startTime: "10:00", endTime: "11:00" },
  { startTime: "12:00", endTime: "14:00" },
  { startTime: "22:30", endTime: "23:00" }
];

/**
 * Loops of turns
 */
for (const item of turnsList) {
  /**
   * Format startTime and endTime of Loop
   */
  const startTime = moment(item.startTime, "hh:mm").format();
  const endTime = moment(item.endTime, "hh:mm").format();
  /**
   * Validation crossing
   */
  if (
    (values.startTime <= startTime && values.endTime >= endTime) ||
    (values.startTime >= startTime && values.endTime <= endTime) ||
    (values.startTime < startTime &&
      values.endTime >= startTime &&
      values.endTime <= endTime) ||
    (values.startTime > startTime &&
      values.startTime >= startTime &&
      values.startTime <= endTime)
  ) {
    console.log("cruce de horarios");
  }
  // if (values.startTime) {
  //   console.log('cruce de horarios');
  // }
}
