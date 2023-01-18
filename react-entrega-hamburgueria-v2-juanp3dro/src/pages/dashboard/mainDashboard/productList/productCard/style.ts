import styled from "styled-components";

export const StyledProductCard = styled.li`
  border: 2px solid var(--grey-100);
  border-radius: 5px;
  height: 340px;
  width: 70%;
  max-width: 300px;

  :hover {
    border-color: var(--color-primary);
    button {
      background-color: var(--color-primary);
    }
  }
  .imgContainer {
    background-color: var(--grey-0);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 150px;
    img {
      max-height: 100%;
    }
  }
  .productInfo {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding-left: 20px;
    padding-top: 25px;
  }
  h2 {
    color: var(--gray-600);
  }
  .category {
    color: var(--grey-300);
  }
  .price {
    color: var(--color-primary);
  }
  button {
    background-color: #BDBDBD;
    border-radius: 8px;
    width: 106px;
    height: 40px;
    color: white;
  }

  @media (min-width:768px) {
    min-width: 170px;
    width: 25%;
}
`;
