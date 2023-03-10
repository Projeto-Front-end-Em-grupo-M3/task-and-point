import { useContext } from "react";
import { AdminContext } from "../../contexts/AdminContext";
import { StyledHeader } from "./styles";
/* import { logo } from "../../assets/logo.png";
 */
interface IContentProps {
  content: string;
}

const Header = ({ content }: IContentProps) => {
  const { logout } = useContext(AdminContext);

  return (
    <StyledHeader>
      <nav>
        {/*         <img src={logo} alt="logo" />
         */}{" "}
        {content == "Sair" && (
          <button onClick={() => logout()}>{content}</button>
        )}
        {content == "Inscreva-se" && (
          <button onClick={() => logout()}>{content}</button>
        )}
        {content == "Conecte-se" && (
          <button onClick={() => logout()}>{content}</button>
        )}
      </nav>
    </StyledHeader>
  );
};
export default Header;
