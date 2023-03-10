import styled from "styled-components";

export const StyledRegister = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 60px;
  }
`;
