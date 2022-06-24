import React from 'react';
import {Image, SafeAreaView, StatusBar, Text} from 'react-native';
import {List} from '../List/List';
import styled from 'styled-components/native';
import {UsersContainerContext} from '../../configs/hooks/useUsers';
import {WrapperPictureInitial} from './style';
import {colors} from '../../configs/layout/colors';
const WrapperInitial = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.white100};
`;
export const InitialComponent = () => {
  return (
    <UsersContainerContext>
      <StatusBar
        backgroundColor={colors.white100}
        barStyle={'dark-content'}></StatusBar>
      <WrapperInitial>
        <WrapperPictureInitial>
          <Image source={require('../../assets/logo.png')} />
        </WrapperPictureInitial>
        <List></List>
      </WrapperInitial>
    </UsersContainerContext>
  );
};
