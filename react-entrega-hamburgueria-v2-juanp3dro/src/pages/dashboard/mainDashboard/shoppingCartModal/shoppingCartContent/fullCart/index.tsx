import { useContext } from "react"
import { ProductsContext } from "../../../../../../contexts/ProductsContext"
import CartList from "./ProductsCart"
import TotalPrice from "./ProductsCart/TotalPrice"
import { StyledFullCart } from "./style"


function FullCart() {
  const {cartList} = useContext(ProductsContext)
  return (
    <StyledFullCart>
        <CartList cartList={cartList}/>
        <TotalPrice/>
    </StyledFullCart>
  )
}

export default FullCart