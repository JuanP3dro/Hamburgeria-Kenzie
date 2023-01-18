import { StyledHeader } from "./style";
import Burger from "../../../components/logo/logoBurger.png";
import Search from "./search-Img.png";
import Logout from "./logout-Icon.png";
import SearchBar from "./SearchBar";
import { useContext } from "react";
import { ProductsContext } from "../../../contexts/ProductsContext";

function Header() {
  const { search, setSearch, setModal, cartList, logout } = useContext(ProductsContext);
  return (
    <StyledHeader>
      <div className="headerContainer">
        {(search == false || window.innerWidth > 768) && <img src={Burger} alt="" />}
        
        <div className="icons">
          {search == true ? (
            <SearchBar />
          ) : (
            <img src={Search} onClick={() => setSearch(true)} />
          )}
          {(search == false || window.innerWidth > 768) && <div className="cart" onClick={() => setModal(true)}>
            <div>{cartList.length}</div>
          </div>}
          {(search == false || window.innerWidth > 768) && <img src={Logout} alt="" className="logout" onClick={() => {
            logout()
          }} />}
          
        </div>
      </div>
    </StyledHeader>
  );
}

export default Header;
