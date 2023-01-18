import { StyledCartItens } from "./style";
import Trash from "./trash.png";
import {
  iCartItem,
  ProductsContext,
} from "../../../../../../../../contexts/ProductsContext";
import { useContext, useState } from "react";

interface iCartItemProps {
  item: iCartItem;
}


function CartItens({ item }: iCartItemProps) {
  const { removeCart, addCart } = useContext(ProductsContext);
  return (
    <StyledCartItens>
      <div className="cartDiv">
        <div className="itemImg">
          <img src={item.img} alt="" />
        </div>
        <div className="itemNameAmount">
          <h3 className="title3">{item.name}</h3>
          <div>
            <button className="title8">-</button>
            <input type="number" defaultValue={item.count} name="" id="" />
            <button className="title8" onClick={() => {
             addCart(item)
            }}>+</button>
          </div>
        </div>
      </div>
      <img
        className="trash"
        src={Trash}
        onClick={() => removeCart(item.id)}
        alt=""
      />
    </StyledCartItens>
  );
}

export default CartItens;
