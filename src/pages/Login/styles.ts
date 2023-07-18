import styled from 'styled-components'
import { Theme } from '../../styles/theme';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 100%;

  padding: 4px;
`;

export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  margin: 100px;

  border-radius: 12px;
  border: solid 1px ${Theme.colors.pink};

  background-color: transparent;
`;

export const LeftView = styled.div`
  display: flex;
  justify-content: center;
  
  width: 50%;
  height: 100%;

  background-color: ${Theme.colors.gray300};
`;

export const RightView = styled.div`
  display: flex;
  justify-content: center;

  width: 50%;
  height: 100%;

  background-color: ${Theme.colors.background};
`;

export const MainForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  height: 100%;

  padding: 4px;
`;