var DateTime = luxon.DateTime;

const timeElemnt = document.querySelector('#myTime');

export function timeUpdate() {
  timeElemnt.textContent = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
}

