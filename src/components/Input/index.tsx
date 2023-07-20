import { FC } from "react";

import { InputComponentProps } from "./types";

import * as S from "./styles";

export const InputComponent: FC<InputComponentProps> = (props) => {
  return (
    <S.Container>
      <S.InputLabel>
        <label>{props.label}</label>
        {props.icon ? (
          <S.InputIcon>
            <input {...props} />
          </S.InputIcon>
        ) : (
          <input {...props} />
        )}
      </S.InputLabel>
    </S.Container>
  );
};
