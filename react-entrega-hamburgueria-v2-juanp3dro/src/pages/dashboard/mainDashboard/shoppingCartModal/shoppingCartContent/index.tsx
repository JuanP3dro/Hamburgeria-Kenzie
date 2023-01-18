import { useContext } from "react"
import { ProductsContext } from "../../../../../contexts/ProductsContext"
import EmptyCart from "./emptyCart"
import FullCart from "./fullCart"
import { StyledShoppingCartContent } from "./style"
import X from './X.png'

function ShoppingCartContent() {
  const {setModal, cartList} = useContext(ProductsContext)
  return (
    <StyledShoppingCartContent>
        <div className='cartTitle'>
            <h2 className="title3">Carrinho de compras</h2>
            <img src={X} onClick={()=> setModal(false)} alt="" />
        </div>
        {cartList.length == 0 ? <EmptyCart/> : <FullCart/>}
        
    </StyledShoppingCartContent>
  )
}

export default ShoppingCartContent