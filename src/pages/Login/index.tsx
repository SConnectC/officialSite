import * as S from "./styles";

import Atomo from "../../assets/atomo.png";
import Logo from "../../assets/logoSmart.png"

const Login = () => {
  return (
    <S.Container>
      <S.Main>
        <S.LeftView>
          <img src={Atomo} width={380} height={440} alt="Atomo" />
        </S.LeftView>
        <S.RightView>
          <img src={Logo} width={232} height={130} alt="Logo Smart Connect Company"/>
          <S.MainForm>
            
          </S.MainForm>
        </S.RightView>
      </S.Main>
    </S.Container>
  );
};

export default Login;
