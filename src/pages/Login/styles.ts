import styled from "styled-components";
import { Theme } from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  padding-top: 30%;
`;

export const BackMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;

  width: 900px;
  height: 600px;

  margin: 0 auto;

  border-radius: 28px;
  background: linear-gradient(
    140deg,
    ${Theme.colors.GradientBorder.color1},
    ${Theme.colors.GradientBorder.color2},
    ${Theme.colors.GradientBorder.color3}
  );
`;

export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  z-index: 3000;

  width: 894px;
  height: 594px;

  margin: 0 auto;

  border-radius: 28px;
  background: ${Theme.colors.backgroundOpacity100};
`;

export const LeftView = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 50%;
  height: 100%;

  background: ${Theme.colors.backgroundOpacity100};
  border-top-left-radius: 28px;
  border-bottom-left-radius: 28px;
`;

export const RightView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 50%;
  height: 100%;

  background-color: ${Theme.colors.background};
  border-top-right-radius: 28px;
  border-bottom-right-radius: 28px;

  img {
    margin: 0 auto;
  }

`;

export const MainForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  height: 100%;
  
  .containerInput {
    width: 300px;
    height: 80px;

    margin: 0 auto;
    margin-bottom: 24px;

    .icon {
      font-size: 32px;
      color: ${Theme.colors.segundary}
    }
  }
`;
