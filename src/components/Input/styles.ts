import styled from "styled-components"
import { Theme } from "../../styles/theme";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const InputLabel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  height: 100%;

  label {
    color: ${Theme.colors.white};
    font-size: 16px;

    margin-bottom: 16px;
  }

  input {
    width: 100%;
    height: 100%;

    padding: 8px 12px;

    background-color: ${Theme.colors.backgroundOpacity50};

    border: none;
    border-radius: 6px;

    ::placeholder {
      color: ${Theme.colors.gray100}
    }
  }
`;

export const InputIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  height: 100%;

  background-color: ${Theme.colors.backgroundOpacity50};
`;