import React from 'react';
import styled from 'styled-components/native';
import {colors} from '../../../configs/layout/colors';

export const WrapperUser = styled.View`
  height: 120px;
  width: 100%;
  background-color: ${colors.white};
  border: 2px solid ${colors.green100};
  border-radius: 5px;
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
  padding: 5px;
  overflow: hidden;
`;

export const WrapperImage = styled.ImageBackground`
  justify-content: space-between;
  border-radius: 50px;
  overflow: hidden;
  width: 100px;
  height: 100px;
  margin: 5px;
  margin-right: 15px;
`;

export const WrapperInfos = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  padding: 10px;
  overflow: hidden;
`;

export const NameUserList = styled.Text`
  font-size: 20px;
  color: ${colors.blue100};
  font-weight: bold;
`;

export const GenderText = styled.Text`
  font-size: 16px;
  color: ${colors.black};
  font-weight: normal;
  padding: 2px;
`;

export const WrapperGender = styled.View`
  height: 35px;
  flex-direction: row;
  align-items: center;
  padding-top: 10px;
`;

export const WrapperLocations = styled.View`
  height: 30px;
  flex-direction: row;
  align-items: center;
`;

export const LocationsText = styled.Text`
  font-size: 16px;
  color: ${colors.blue100};
  font-weight: bold;
`;
