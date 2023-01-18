import styled from "styled-components";

export const StyledTotalPrice = styled.div`
width: 95%;
height: 140px;
border-top: 2px solid var(--grey-100);
margin-top: 20px;
margin-left: 20px;
div {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3 {
        color: var(--gray-600);
    }
    p {
        color: var(--grey-300);
        margin-right: 20px;
    }
}
button {
    width: 97%;
    height: 60px;
    background-color: var(--grey-100);
    border: 2px solid var(--grey-100);
    border-radius: 8px;
    color: var(--grey-300);
    margin-top: 20px;
}
`