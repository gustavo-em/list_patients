import React from 'react';
import styled from 'styled-components/native';
import {colors} from '../../../configs/layout/colors';

export const ContainerSearch = styled.View`
  justify-content: center;
  align-items: center;
  height: 100px;
  padding: 0px 20px 0px 20px;
  flex-direction: row;
`;

export const InputSearch = styled.TextInput`
  background-color: ${colors.white};
  width: 80%;
  border-radius: 5px;
  height: 50px;
  border: 2px solid ${colors.green100};
  padding-left: 20px;
  color: ${colors.blue100};
  font-size: 20px;
`;

export const WrapperIconSearch = styled.TouchableOpacity`
  position: absolute;
  align-items: center;
  left: 75%;
  z-index: 1;
`;

export const WrapperFilter = styled.TouchableOpacity`
  height: 50px;
  width: 20%;
  align-items: center;
  justify-content: center;
`;

export const DropdownFilter = styled.View`
  height: 100px;
  width: 50%;
  background-color: ${colors.white};
  border: 2px solid ${colors.green100};
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 2;
  right: 0px;
  top: 70px;
  flex-direction: column;
`;

export const OptionButton = styled.TouchableOpacity`
  height: 50px;
  width: 100%;

  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const WrapperRadioButton = styled.View`
  justify-content: center;
  align-items: center;
  height: 20px;
  padding: 0px 20px 0px 20px;
`;

export const TextRadio = styled.Text`
  font-size: 16px;
  color: ${colors.black};
`;
