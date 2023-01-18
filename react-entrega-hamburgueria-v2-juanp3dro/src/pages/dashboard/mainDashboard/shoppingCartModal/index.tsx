import React from 'react'
import ShoppingCartContent from './shoppingCartContent'
import { StyledShoppingCartBackground } from './style'

function ShoppingCartModal() {
  return (
    <StyledShoppingCartBackground>
        <ShoppingCartContent/>
    </StyledShoppingCartBackground>
  )
}

export default ShoppingCartModal