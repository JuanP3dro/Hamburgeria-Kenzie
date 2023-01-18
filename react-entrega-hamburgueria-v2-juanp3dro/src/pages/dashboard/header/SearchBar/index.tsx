import { StyledSearchBar } from "./style";
import { useContext, useState } from "react";
import { ProductsContext } from "../../../../contexts/ProductsContext";


function SearchBar() {
  
  const { setSearch, products, setProducts, valueInput, setValueInput, filteredList } = useContext(ProductsContext);
  
  
  
  function handleInput (event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  function filterSearch (valueInput: string) {
    const filteredProducts = products.filter((item) => item.name.toLowerCase().includes(valueInput.toLowerCase()))
       setProducts(filteredProducts)
  }
  
  return (
    <StyledSearchBar onSubmit={(event) => handleInput(event)}>
      <input
        type="text"
        placeholder="Digitar Pesquisa"
        onChange={(event) => setValueInput(event.target.value)}
      />
      <button type="submit" onClick={() => {
                filterSearch?.(valueInput)
                setSearch(false)
              }} ></button>
    </StyledSearchBar>
  );
}

export default SearchBar;
