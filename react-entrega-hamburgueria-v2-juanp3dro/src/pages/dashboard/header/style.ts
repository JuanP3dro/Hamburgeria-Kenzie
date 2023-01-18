import styled from "styled-components";
import CartImg from "./cart-Icon.png";

export const StyledHeader = styled.header`
  width: 100vw;
  height: 80px;
  display: flex;
  justify-content: center;
  background-color: var(--grey-0);
  .headerContainer {
    height: 100%;
    width: 90%;
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .icons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }
  .cart {
    width: 50px;
    height: 50px;
    background-image: url(${CartImg});
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    div {
      width: 20px;
      height: 22px;
      font-weight: 700;
      font-size: 14px;
      background: #27ae60;
      border-radius: 7px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
    }
  }
  .logout {
    cursor: pointer;
  }
`;
