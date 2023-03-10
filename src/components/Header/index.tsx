import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AdminContext } from "../../contexts/AdminContext";
import { StyledHeader } from "./styles";

const Header = () => {
  const { logout } = useContext(AdminContext);

  /*   const navigate = useNavigate(); */
  /*   const logOut = () => {
    localStorage.removeItem("@task-and-point-token");
    setUsers(null);
    navigate("/");
  }; */

  return (
    <StyledHeader>
      <nav>
        <figure>
          <img src="../../assets/logo.svg" alt="logo" />
        </figure>
        <button onClick={() => logout()}>Sair</button>
      </nav>
    </StyledHeader>
  );
};
export default Header;
