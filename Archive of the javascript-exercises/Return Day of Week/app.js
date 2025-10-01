function getWeekDay(date) {
  let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

  return days[date.getDay()];
}

let date = new Date(2025, 8, 24); // 3 Jan 2014
alert( getWeekDay(date) ); // FR