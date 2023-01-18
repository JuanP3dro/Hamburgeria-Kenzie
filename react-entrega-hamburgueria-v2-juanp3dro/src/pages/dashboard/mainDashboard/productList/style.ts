import styled from "styled-components";

export const StyledProductList = styled.ul`
width: 100vw;
display: flex;
overflow-x: scroll;
gap: 20px;

@media(min-width: 768px) {
    max-width: 1200px;
    overflow-x: hidden;
    flex-wrap: wrap;
    justify-content: space-between;
}
`