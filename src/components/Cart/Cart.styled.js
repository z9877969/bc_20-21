import styled from "styled-components";

const StyledCartContainer = styled.div`
  position: absolute;
  top: 0;
  left: 100%;
  width: 400px;
  height: 500px;
  background-color: darkslategray;
  overflow-y: scroll;
  padding: 20px 15px 30px;
  z-index: 25;
  transition: transform 0.5s linear;

  ${({ isOpen }) => isOpen && "transform: translateX(-100%)"}
`;

const StyledBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  :active {
    transform: scale(0.95);
  }
`;

const StyledBtnClose = styled(StyledBtn)`
  width: 30px;
  height: 30px;
  margin-left: auto;
  margin-bottom: 20px;
  background-color: lightslategray;
  border: 1px solid #212121;
  border-radius: 50%;

  .icon-close {
    width: 15px;
    height: 15px;
  }
`;

const StyledProductsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-bottom: 20px;
`;

const StyledProductItem = styled.li`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  margin: 0;
  padding: 5px;
  height: 100px;
  border: 1px solid #212121;

  :not(:last-child) {
    margin-bottom: 5px;
  }

  .cart-image {
    width: 70px;
    height: 100%;
  }

  .cart-descr,
  .cart-model {
    margin: 0;
  }

  .cart-descr {
    margin-left: 20px;
    padding: 10px;
    color: bisque;
  }
`;

const StyledBtnRemove = styled(StyledBtn)`
  margin-left: auto;
  padding: 10px;
  border: none;
  background-color: burlywood;
  border-radius: 10px;

  .icon-remove {
    width: 30px;
    height: 30px;
    fill: rgb(75, 102, 75);
  }
`;

const StyledBtnOrder = styled(StyledBtn)`
  background-color: burlywood;
  padding: 10px 20px;
  border: none;
  border-radius: 3px;
  font-size: 24px;
`;

export {
  StyledCartContainer,
  StyledBtnClose,
  StyledProductsList,
  StyledProductItem,
  StyledBtnRemove,
  StyledBtnOrder
};
