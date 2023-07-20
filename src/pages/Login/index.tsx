import { Envelope, UserCircle } from '@phosphor-icons/react'

import { InputComponent } from "../../components/Input";

import Logo from '../../assets/imgs/logo.png'

import { Atomo } from "../../assets/svgs/atomo";

import * as S from "./styles";

const Login = () => {
  return (
    <S.Container>
      <S.BackMain></S.BackMain>
      <S.Main>
        <S.LeftView>
          <Atomo />
        </S.LeftView>
        <S.RightView>
          <img src={Logo} width={232} height={130} alt='Logo Smart Connect'/>
          <S.MainForm>
            <div className="containerInput">
              <InputComponent
                type="email"
                id="email"
                placeholder="E-mail"
                label="E-mail"
                icon={<Envelope className='icon'/>}
              />
            </div>
            <div className="containerInput">
              <InputComponent
                type="passwprd"
                id="passwprd"
                placeholder="Senha"
                label="Senha"
                icon={<UserCircle className='icon'/>}
              />
            </div>
          </S.MainForm>
        </S.RightView>
      </S.Main>
    </S.Container>
  );
};

export default Login;
