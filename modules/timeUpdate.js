/* global luxon */

const DateTime = luxon.DateTime;
// import { DateTime } from "luxon";

const timeElemnt = document.querySelector('#myTime');

export default function timeUpdate() {
  timeElemnt.textContent = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
}
