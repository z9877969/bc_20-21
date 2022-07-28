import styled, { createGlobalStyle } from "styled-components";

const StyledItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0;
  padding: 5px;
  background-color: #212121;

  .image {
    display: block;
    width: 100%;
    height: 430px;
  }
`;

const StyledDescr = styled.div`
  margin: 0;
  padding: 10px;
  color: bisque;
`;

const StyledBtnBye = styled.button`
  font-size: 24px;
  padding: 10px 20px;
  border: none;
  background-color: burlywood;
  color: ${({ price }) => (price ? "rgb(58, 44, 4)" : "red")};
  border-radius: 3px;

  :active {
    transform: scale(0.95);
  }
`;

export { StyledItem, StyledDescr, StyledBtnBye };
