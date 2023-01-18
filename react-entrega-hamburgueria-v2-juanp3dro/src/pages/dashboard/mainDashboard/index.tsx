import React, { useContext } from 'react'
import { ProductsContext } from '../../../contexts/ProductsContext'
import ProductList from './productList'
import ShoppingCartModal from './shoppingCartModal'
import { StyledMainDashboard } from './style'

function MainDashboard() {
  const {modal} = useContext(ProductsContext)
  return (
    <StyledMainDashboard>
        <ProductList/>
        {modal ? <ShoppingCartModal/> : null}
    </StyledMainDashboard>
  )
}

export default MainDashboard