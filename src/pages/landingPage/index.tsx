import { useNavigate } from "react-router-dom";
import StyledDiv from "./style";
import logo from "../../assets/logo.svg";
import frame from "../../assets/frame.svg";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <StyledDiv>
      <div className="intro">
        <div>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <h2>Centralize as atividades da sua equipe</h2>
          <h3>
            e tenha controle de <span>ponto</span>
          </h3>
          <button
            onClick={(event) => {
              event.preventDefault();
              navigate("/login");
            }}
          >
            Iniciar
          </button>
        </div>
      </div>

      <div className="frame">
        <img src={frame} alt="frame" />
      </div>
    </StyledDiv>
  );
};

export default LandingPage;
