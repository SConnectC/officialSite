import { Atomo } from "../../assets/svgs/atomo";

import * as S from "./styles";

import Logo from "../../assets/imgs/logo.png";
import { InputComponent } from "../../components/Input";

const Login = () => {
  return (
    <S.Container>
      <S.BackMain></S.BackMain>
      <S.Main>
        <S.LeftView>
          <Atomo />
        </S.LeftView>
        <S.RightView>
          <img src={Logo} width={232} height={130} alt="Logo Smart Connect" />
          <S.MainForm>
            <div className="containerInput">
              <InputComponent
                type="email"
                id="email"
                placeholder="E-mail"
                label="E-mail"
              />
            </div>
            <div className="containerInput">
              <InputComponent
                type="passwprd"
                id="passwprd"
                placeholder="Senha"
                label="Senha"
              />
            </div>
          </S.MainForm>
        </S.RightView>
      </S.Main>
    </S.Container>
  );
};

export default Login;
