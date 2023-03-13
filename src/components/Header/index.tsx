import { useContext } from "react";
import { Link } from "react-router-dom";
import { AdminContext } from "../../contexts/AdminContext";
import { StyledHeader, StyledLink } from "./styles";

interface IContentProps {
  content: string;
}

const Header = ({ content }: IContentProps) => {
  const { logout } = useContext(AdminContext);

  return (
    <StyledHeader>
      <nav>
        <img src="../../assets/fig.svg" alt="logo" />
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
