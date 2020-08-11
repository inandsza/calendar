import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;

  svg {
    width: 20px;
    height: 14px;
  }
`;

const arrowContainerStyles = `
  border: 1px solid #3e89de;
  border-radius: 50%;
  padding: 4px;
  margin: 16px;
  cursor: pointer;

  &:hover {
    background: #d4e8ff;
  }
`;

const LeftArrow = styled.div`
  ${arrowContainerStyles}
`;

const RightArrow = styled.div`
  ${arrowContainerStyles}
`;

export default {
  Container,
  RightArrow,
  LeftArrow,
};
