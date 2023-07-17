/* global luxon */

let DateTime = luxon.DateTime;

const timeElemnt = document.querySelector('#myTime');

export default function timeUpdate() {
  timeElemnt.textContent = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
}
