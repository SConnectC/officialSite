import { Atomo } from "../../assets/svgs/atomo";

import * as S from "./styles";

import Logo from "../../assets/imgs/logo.png";

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
        </S.RightView>
      </S.Main>
    </S.Container>
  );
};

export default Login;
