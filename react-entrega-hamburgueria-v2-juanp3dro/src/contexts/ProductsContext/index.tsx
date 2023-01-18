import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Api } from "../../services/api";
import { iDefaultProviderProps } from "../UserContext/@types";

export interface iProducts {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
  count?: number;
}

interface iProductsContext {
  products: iProducts[];
  setProducts: React.Dispatch<React.SetStateAction<iProducts[]>>
  search: boolean;
  setSearch: React.Dispatch<React.SetStateAction<boolean>>;
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  cartList: iCartItem[];
  addCart: (product: iCartItem) => void;
  removeCart: (itemId: iProducts["id"]) => void;
  removeAll: () => void;
  logout: () => void;
  filteredList: iProducts[] | [];
  valueInput: string;
  setValueInput: React.Dispatch<React.SetStateAction<string>>
}

export interface iCartItem {
  id: iProducts["id"];
  name: iProducts["name"];
  category: iProducts["category"];
  price: iProducts["price"];
  img: iProducts["img"];
  count?:iProducts["count"];
}

export const ProductsContext = createContext({} as iProductsContext);

function ProductsProvider({ children }: iDefaultProviderProps) {
  const [products, setProducts] = useState<iProducts[]>([]);
  const [search, setSearch] = useState<boolean>(false);
  const [modal, setModal] = useState(false);
  const [cartList, setCartList] = useState<iCartItem[]>([]);
  const [valueInput, setValueInput] = useState("");
  const filteredList = products.filter((item) => {
   return valueInput == '' ? true : item.name.toLowerCase().includes(valueInput.toLowerCase())
  })
 const navigate = useNavigate()

  const token = localStorage.getItem("token");

  function addCart(product: iProducts) {
    
    if(!cartList.some(item => item.id == product.id)) {
      const newProduct = {...product, count: 1}
    setCartList([...cartList, newProduct]);
    } else {
      const newList = cartList.map(cartProduct => {
        if(cartProduct.id == product.id) {
          return {...cartProduct, count: cartProduct.count! + 1}
        } else {
          return cartProduct
        }
        
      })
      console.log(newList)
      setCartList(newList)
    }
  }

  function removeCart(itemId: iProducts["id"]) {
    const newCartList = cartList.filter((item) => item.id !== itemId);
    setCartList(newCartList);
  }

  function removeAll () {
    setCartList([])
  }

  function logout () {
    localStorage.removeItem('token') 
    navigate('/')
  }

  useEffect(() => {
    if (token) {
      (async () => {
        try {
          const response = await Api.get<iProducts[]>("/products", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          
          setProducts(response.data);

        } catch (error) {
          console.log(error);
          toast.error("Algo está errado", {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      })();
    }
  }, []);
  return (
    <ProductsContext.Provider
      value={{
        products,
        search,
        setSearch,
        modal,
        setModal,
        cartList,
        addCart,
        removeCart,
        setProducts,
        removeAll, 
        logout,
        filteredList,
        valueInput,
        setValueInput
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsProvider;
