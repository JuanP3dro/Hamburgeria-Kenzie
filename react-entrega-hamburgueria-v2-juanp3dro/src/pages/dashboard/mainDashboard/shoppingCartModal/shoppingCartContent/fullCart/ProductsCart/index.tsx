import { useContext } from "react";
import { iCartItem, ProductsContext } from "../../../../../../../contexts/ProductsContext";
import CartItens from "./CartItens";
import { StyledCartList } from "./style";
interface iCartListProps {
  cartList:iCartItem[]
}

function CartList({cartList}:iCartListProps) {
  
  return (
    <StyledCartList>
        {cartList?.map((item)=> {
          return <CartItens key={item.id} item={item}/>
        })}
    </StyledCartList>
  )
}

export default CartList