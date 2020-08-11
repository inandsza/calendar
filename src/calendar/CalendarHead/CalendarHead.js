import React from "react";

import Styled from "./styles";
import LeftArrow from "../../svgs/back.svg";
import RightArrow from "../../svgs/next.svg";

const CalendarHead = ({ month, goToNextMonth, goToPrevMonth, year }) => {
  return (
    <Styled.Container>
      <Styled.LeftArrow onClick={goToPrevMonth}>
        <LeftArrow />
      </Styled.LeftArrow>
      <Styled.Container>
        {month} {year}
      </Styled.Container>
      <Styled.RightArrow onClick={goToNextMonth}>
        <RightArrow />
      </Styled.RightArrow>
    </Styled.Container>
  );
};

export default CalendarHead;
