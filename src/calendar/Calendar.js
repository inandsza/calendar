import React, { useState } from "react";

import CalendarHead from "./CalendarHead/CalendarHead";
import { months } from "./CalendarHead/data";

import Days from "./Days/Days";

import {
  getDaysInMonth,
  getStartDayOfTheWeek,
  getPrevMonth,
  getPrevYear,
  getNextMonth,
  getNextYear,
} from "../utils/calendar-helpers";

const Calendar = () => {
  const date = new Date();
  const [selectedDay, updateSelectedDay] = useState(new Date());
  const [selectedDate, updateSelectedDate] = useState({
    month: date.getMonth(),
    year: date.getFullYear(),
  });

  const { year, month } = selectedDate;

  const goToNextMonth = () => {
    updateSelectedDate({
      ...selectedDate,
      month: getNextMonth(month),
      year: getNextYear(month, year),
    });
  };

  const goToPrevMonth = () => {
    updateSelectedDate({
      ...selectedDate,
      month: getPrevMonth(month),
      year: getPrevYear(month, year),
    });
  };

  const prevMonth = getPrevMonth(month);
  const prevYear = getPrevYear(month, year);
  const nextMonth = getNextMonth(month);
  const nextYear = getNextYear(month, year);

  return (
    <div>
      <CalendarHead
        month={months[month]}
        year={year}
        goToNextMonth={goToNextMonth}
        goToPrevMonth={goToPrevMonth}
      />
      <Days
        previousMonthDays={getDaysInMonth(prevMonth, prevYear)}
        nexrMonthDays={getDaysInMonth(nextMonth, nextYear)}
        month={month}
        year={year}
        day={selectedDay}
        updateSelectedDay={updateSelectedDay}
        daysInMonth={getDaysInMonth(month, year)}
        startDayOfTheMonth={getStartDayOfTheWeek(month, year)}
        lastDayOfTheMonth={getStartDayOfTheWeek(month + 1, year)}
      />
    </div>
  );
};

export default Calendar;
