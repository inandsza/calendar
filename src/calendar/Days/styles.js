import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-column-gap: 1px;
  grid-row-gap: 1px;
`;

const Day = styled.div`
  border: 1px solid white;
  padding: 12px 16px;
  text-transform: uppercase;
  text-align: center;
  background: #f5f5f5;
  cursor: pointer;

  ${({ dayIndicator }) =>
    dayIndicator &&
    `
    background: white;
  `}

  ${({ notThisMonth }) =>
    notThisMonth &&
    `
    opacity: 0.3;
    cursor: not-allowed;
  `}

  ${({ selected }) => selected && `background: #fad91a;`}
`;

export default {
  Container,
  Day,
};
