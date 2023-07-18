import { DateTime } from '../node_modules/luxon/src/luxon.js';

const timeElemnt = document.querySelector('#myTime');

export default () => {
  timeElemnt.textContent = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
};
