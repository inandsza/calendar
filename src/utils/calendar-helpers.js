export function getDaysInMonth(month, year) {
  return new Date(year, month + 1, 0).getDate();
}

export function getStartDayOfTheWeek(month, year) {
  return new Date(year, month, 0).getDay();
}

export function getPrevMonth(month) {
  if (month === 0) return 11;
  return month - 1;
}

export function getPrevYear(month, year) {
  if (month === 0) return year - 1;
  return year;
}

export function getNextMonth(month) {
  if (month === 11) return 0;
  return month + 1;
}

export function getNextYear(month, year) {
  if (month === 11) return year + 1;
  return year;
}
