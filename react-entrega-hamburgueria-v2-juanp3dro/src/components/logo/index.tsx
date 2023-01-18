import { StyledLogoSection } from "./style";
import Burger from "./logoBurger.png";
import Dots from "./dotsImg.png";

function LogoSection() {
  return (
    <StyledLogoSection>
      <div className="logo">
        <img src={Burger} alt="" />
      </div>
      <div className="innerDiv">
        <div></div>
        <p className="title5">
          A vida é como um sanduíche, é preciso recheá-la com os{" "}
          <span className="title6">melhores</span> ingredientes.
        </p>
      </div>
      <img className="dots" src={Dots} alt="" />
    </StyledLogoSection>
  );
}

export default LogoSection;
