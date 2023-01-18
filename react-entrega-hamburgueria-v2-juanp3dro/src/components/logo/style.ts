import styled from "styled-components";
import ShoppingBag from "./shopping-bag.png";

export const StyledLogoSection = styled.section`
  width: 90%;
  max-width: 400px;
  .logo {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
  }
  .innerDiv {
    border: 1px solid var(--grey-100);
    box-shadow: 0px 4px 40px -20px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    height: 100px;
    width: 100%;
    display: flex;
    gap: 30px;
    align-items: center;
    padding: 0px 20px;

    div {
      min-width: 60px;
      height: 60px;
      background: rgba(39, 174, 96, 0.1);
      border-radius: 5px;
      background-image: url(${ShoppingBag});
      background-repeat: no-repeat;
      background-position: center;
    }
    p {
      color: var(--grey-300);
      span {
        color: var(--gray-600);
      }
    }
  }
  .dots {
    margin-top: 30px;
    display: none;
  }

  @media (min-width: 768px) {
    .dots {
      display: block;
    }
  }
`;
