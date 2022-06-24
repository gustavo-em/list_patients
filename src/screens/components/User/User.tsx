import React from 'react';
import {Image, Text} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {IUsers} from '../../../configs/types/Users';
import {colors} from '../../../configs/layout/colors';
import {
  NameUserList,
  WrapperImage,
  WrapperInfos,
  WrapperUser,
  GenderText,
  WrapperGender,
  WrapperLocations,
  LocationsText,
} from './style';

type IUserComponent = {
  user: IUsers;
};
export const User = ({user}: IUserComponent) => {
  return (
    <>
      <WrapperUser>
        <WrapperImage source={{uri: user.picture.large}} />
        <WrapperInfos>
          <NameUserList>
            {user.name.title} {user.name.first} {user.name.last}
          </NameUserList>

          <WrapperLocations>
            <LocationsText>
              <FontAwesome5Icon
                name="city"
                size={16}
                color={colors.gray100}></FontAwesome5Icon>{' '}
              {user.location.city}
            </LocationsText>
            <LocationsText>{'  '}</LocationsText>
            <LocationsText>
              <FontAwesome5Icon
                name="home"
                size={16}
                color={colors.gray100}></FontAwesome5Icon>{' '}
              {user.nat}
            </LocationsText>
          </WrapperLocations>
          <WrapperGender>
            {user.gender == 'male' ? (
              <FontAwesome5Icon
                name="male"
                size={16}
                color={colors.blue50}></FontAwesome5Icon>
            ) : (
              <FontAwesome5Icon
                name="female"
                size={16}
                color={colors.orange100}></FontAwesome5Icon>
            )}
            <GenderText>{user.gender}</GenderText>
            <GenderText style={{paddingLeft: 60}}>
              {user.dob.date.substring(0, 10)}
            </GenderText>
          </WrapperGender>
        </WrapperInfos>
      </WrapperUser>
    </>
  );
};
