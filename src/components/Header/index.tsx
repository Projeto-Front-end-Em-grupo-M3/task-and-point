import { useContext } from "react";
import { AdminContext } from "../../contexts/AdminContext";
import { StyledHeader, StyledLink } from "./styles";
import logo from "../../assets/logo.svg";

interface IContentProps {
  content: string;
}

const Header = ({ content }: IContentProps) => {
  const { logout } = useContext(AdminContext);

  return (
    <StyledHeader>
      <nav>
        <img src={logo} alt="logo" />
        {content == "Sair" && <button onClick={logout}>{content}</button>}
        {content == "Inscreva-se" && (
          <StyledLink to="/register">{content}</StyledLink>
        )}
        {content == "Conecte-se" && (
          <StyledLink to="/login">{content}</StyledLink>
        )}
      </nav>
    </StyledHeader>
  );
};
export default Header;
