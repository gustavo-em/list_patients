import React from 'react';
import styled from 'styled-components/native';
import {colors} from '../../configs/layout/colors';

// export const WrapperModal = styled.View`
//   flex: 1;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   padding: 40px;
//   padding-bottom: 200px;
//   margin-top: 10px;
//   position: relative;
// `;

export const WrapperList = styled.View`
  flex: 1;
  padding: 20px;
`;

export const WrapperImageModal = styled.View`
  width: 100%;
  height: 100px;
  position: absolute;
  align-items: center;
  z-index: 4;
  top: -80px;
  left: 50px;
`;

export const ImagemModal = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 100px;
`;

export const ContainerModal = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

export const WrapperModal = styled.View`
  position: absolute;
  width: 100%;
  height: 70%;
  background-color: ${colors.green100};
  z-index: 3;
  bottom: 0;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 50px;
`;

export const WrapperX = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  align-self: flex-end;
  align-items: center;
  justify-content: center;
`;

export const TitleModal = styled.Text`
  font-size: 24px;
  color: ${colors.white};
  font-weight: bold;
`;

export const WrapperTitle = styled.View`
  width: 100%;
  height: 100px;
  padding: 50px;
`;

export const SubTitleModal = styled.Text`
  font-size: 16px;
  color: ${colors.white};
  font-weight: normal;
`;

export const WrapperLocationModal = styled.View`
  width: 100%;
  height: auto;
  background-color: ${colors.blue50};
  padding: 20px;
  border-radius: 10px;
  margin-top: 30px;
`;

export const InfoLocation = styled.Text`
  font-size: 14px;
  color: ${colors.white};
  font-weight: normal;
`;

export const TitleLocation = styled.Text`
  font-size: 14px;
  color: ${colors.white};
  font-weight: bold;
`;
