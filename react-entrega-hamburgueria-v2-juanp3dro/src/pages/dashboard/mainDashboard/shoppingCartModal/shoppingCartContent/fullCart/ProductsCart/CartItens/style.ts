import styled from "styled-components";

export const StyledCartItens = styled.li`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  .cartDiv {
    display: flex;
    gap: 10px;
    width: 100%;
  }
  .itemImg {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    background-color: var(--grey-100);
    border-radius: 5px;
    img {
      max-width: 100%;
    }
  }
  .itemNameAmount {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h3 {
      color: var(--gray-600);
    }
    div {
      width: 106px;
      height: 34px;
      border: 2px solid #F2F2F2;
      display: flex;
      margin-bottom: 5px;
      
      button {
        background: #F2F2F2;
        width: 30px;
        height: 34px;
        color: var(--color-secondary);
      }
      input {
        width: 46px;
      height: 34px;
      padding-left: 20px;
      }
    }
  }
  .trash {
    height: 20px;
    cursor: pointer;
  }
`;
