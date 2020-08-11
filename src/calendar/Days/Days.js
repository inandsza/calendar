import React from "react";

import Styled from "./styles";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const NUMBER_OF_DAYS_IN_A_WEEK = 7;

const Days = ({
  day,
  month,
  year,
  daysInMonth,
  startDayOfTheMonth,
  lastDayOfTheMonth,
  previousMonthDays,
  nexrMonthDays,
  updateSelectedDay,
}) => {
  const getDaysInPrevMonth = () => {
    return Array.from(Array(previousMonthDays), (_, i) => i + 1).splice(
      previousMonthDays - startDayOfTheMonth,
      startDayOfTheMonth
    );
  };

  const getDaysInNextMonth = () => {
    const nextMonthDays = Array.from(Array(nexrMonthDays), (_, i) => i + 1);
    return nextMonthDays.splice(
      0,
      NUMBER_OF_DAYS_IN_A_WEEK - lastDayOfTheMonth
    );
  };

  const createDaysArray = () => {
    const daysToShow = [
      ...getDaysInPrevMonth(),
      ...Array.from(Array(daysInMonth), (_, i) => i + 1),
      ...getDaysInNextMonth(),
    ];

    return daysToShow;
  };

  return (
    <Styled.Container>
      {days.map((day) => (
        <Styled.Day dayIndicator key={day}>
          {day}
        </Styled.Day>
      ))}
      {createDaysArray().map((d, index) => {
        const notThisMonth =
          index < startDayOfTheMonth ||
          index >= startDayOfTheMonth + daysInMonth;

        const isSelected =
          day.getDate() === d &&
          day.getMonth() === month &&
          day.getFullYear() === year;

        return (
          <Styled.Day
            key={`${d}_${index}`}
            onClick={
              !notThisMonth
                ? () => updateSelectedDay(new Date(year, month, d))
                : () => {}
            }
            selected={!notThisMonth && isSelected}
            notThisMonth={notThisMonth}
          >
            {d}
          </Styled.Day>
        );
      })}
    </Styled.Container>
  );
};

export default Days;
