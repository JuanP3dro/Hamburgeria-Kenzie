import styled from "styled-components";
import SearchBtn from './searchBtn.png'

export const StyledSearchBar = styled.form`
  width: 365px;
  position: relative;
  display: flex;
  align-items: center;
  input {
    width: 100%;
    max-width: 365px;
    height: 60px;
    color: var(--grey-100);
    font-weight: 400;
    font-size: 16px;
    padding-left: 15px;
    border: 2px solid var(--grey-100);
    border-radius: 8px;
    margin-bottom: 15px;
  }
  button {
    position: absolute;
    top: 10px;
    left: 300px;
    width: 53px;
    height: 40px;
    background: var(--color-primary);
    border-radius: 8px;
    font-weight: 600;
    font-size: 14px;
    color: white;
    background-image: url(${SearchBtn});
    background-repeat: no-repeat;
    background-position: center;
  }
`;
