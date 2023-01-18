import { StyledProductCard } from "./style";
import {
  iCartItem,
  iProducts,
  ProductsContext,
} from "../../../../../contexts/ProductsContext";
import { useContext } from "react";
interface iProductCardProps {
  product: iProducts;
}
function ProductCard({ product }: iProductCardProps) {
  const { addCart} = useContext(ProductsContext);
 
 
 
 

  return (
    <StyledProductCard>
      <div className="imgContainer">
        <img src={product.img} alt="" />
      </div>
      <div className="productInfo">
        <h2 className="title3">{product.name}</h2>
        <p className="title7 category">{product.category}</p>
        <p className="title6 price">{`R$ ${product.price.toFixed(2)}`}</p>
        <button className="title6" onClick={() => {
          addCart(product)           
        }}>
          Adicionar
        </button>
      </div>
    </StyledProductCard>
  );
}

export default ProductCard;
