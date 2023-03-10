import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AdminContext } from "../../contexts/AdminContext";
import { StyledHeader } from "./styles";

const Header = () => {
  const { logout } = useContext(AdminContext);

  return (
    <StyledHeader>
      <nav>
        <img src={logo} alt="logo" />
        <button onClick={() => logout()}>Sair</button>
      </nav>
    </StyledHeader>
  );
};
export default Header;
