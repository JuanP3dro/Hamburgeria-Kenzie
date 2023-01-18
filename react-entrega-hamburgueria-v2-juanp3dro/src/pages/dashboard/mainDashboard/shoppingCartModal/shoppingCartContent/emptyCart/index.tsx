import React from 'react'
import { StyledEmptyCart } from './style'

function EmptyCart() {
  return (
    <StyledEmptyCart>
        <h3 className='title3'>Sua sacola está vazia</h3>
        <p className='title4'>Adicione itens</p>
    </StyledEmptyCart>
  )
}

export default EmptyCart