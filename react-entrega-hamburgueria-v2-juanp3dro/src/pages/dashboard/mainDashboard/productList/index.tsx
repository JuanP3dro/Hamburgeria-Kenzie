import { useContext } from 'react'
import {ProductsContext } from '../../../../contexts/ProductsContext'
import ProductCard from './productCard'
import { StyledProductList } from './style'

function ProductList() {
    const {products, filteredList} = useContext(ProductsContext)
  return (
    <StyledProductList>
        {filteredList?.map ((product, index)=> {
          return  <ProductCard key={index} product={product}/>
        })}
    </StyledProductList>
  )
}

export default ProductList