import { useContext } from "react"
import { ProductsContext } from "../../../../../../../../contexts/ProductsContext"
import { StyledTotalPrice } from "./style"


function TotalPrice() {
  const {cartList, removeAll} = useContext(ProductsContext)
  const total = cartList.reduce((valorAcumulado, itemAtual) => {
    return valorAcumulado + itemAtual.price
}, 0)
  return (
    <StyledTotalPrice>
        <div>
            <h3 className="title6">Total</h3>
            <p className="title6">{`R$ ${total.toFixed(2)}`}</p>
        </div>
        <button className="title6" onClick={() => {
          removeAll()
        }}>Remover Todos</button>
    </StyledTotalPrice>
  )
}

export default TotalPrice