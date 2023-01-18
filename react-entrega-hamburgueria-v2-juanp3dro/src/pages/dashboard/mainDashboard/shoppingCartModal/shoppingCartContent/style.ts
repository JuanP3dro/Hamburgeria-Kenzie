import styled from "styled-components";

export const StyledShoppingCartContent = styled.div`
width: 90%;
max-width: 500px;

.cartTitle{
    background: #27AE60;
    border-radius: 5px 5px 0px 0px;
    width: 100%;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px;
    h2 {
        color: white;
    }
    img {
        cursor: pointer;
    }
}
`