import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { StyledHeader } from "./styles";

const Header = () => {
  const navigate = useNavigate();
  const logOut = () => {
    /*         localStorage.removeItem('@task-and-point-token');
     */ /* setUser(null) */ navigate("/");
  };

  return (
    <StyledHeader>
      <nav>
        <img src={logo} alt="LOGO" />
        <button>Sair</button>
      </nav>
    </StyledHeader>
  );
};
export default Header;
