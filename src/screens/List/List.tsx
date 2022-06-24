import React, {memo, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  ListRenderItemInfo,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {IUsers} from '../../configs/types/Users';
import {Search} from '../components/Search/Search';
import {User} from '../components/User/User';
import {colors} from '../../configs/layout/colors';
import {
  ContainerModal,
  WrapperList,
  WrapperImageModal,
  ImagemModal,
  WrapperX,
  TitleModal,
  SubTitleModal,
  WrapperLocationModal,
  TitleLocation,
  InfoLocation,
} from './style';
import {URL_USERS, useUsers} from '../../configs/hooks/useUsers';
import {IFetch, IResult} from './types';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {getUsers} from './functions';

export const List = memo(() => {
  const {users, setUsers, searching, setSearching} = useUsers();
  const [search, setSearch] = useState<String>('');
  const [userDetails, setUserDetails] = useState<IUsers | null>(null);
  const offset = useSharedValue(-100);
  const modalHeight = useSharedValue(200);

  const animatedStylesNameModal = useAnimatedStyle(() => {
    return {
      transform: [{translateY: offset.value}],
    };
  });
  const animatedStylesModal = useAnimatedStyle(() => {
    return {
      transform: [{translateY: modalHeight.value}],
    };
  });
  const chooseUser = (user: IUsers) => {
    setTimeout(() => {
      //timeout to preview animation
      offset.value = withSpring(0);
      modalHeight.value = withTiming(0, {
        duration: 1000,
        easing: Easing.out(Easing.exp),
      });
    });
    setUserDetails(user);
  };

  async function getUsersFromApi(URL: string) {
    const usersOrFalse = await getUsers(URL);
    if (usersOrFalse !== false && usersOrFalse !== undefined) {
      setUsers(usersOrFalse);
      return setSearching(false);
    } else {
      setSearching(false);
      return Alert.alert('Unable to load patients');
    }
  }

  React.useEffect(() => {
    setSearching(true);
    getUsersFromApi(URL_USERS);
  }, []);

  const itemUser = ({item}: ListRenderItemInfo<IUsers>) => {
    return (
      <TouchableOpacity onPress={() => chooseUser(item)}>
        <User user={item}></User>
      </TouchableOpacity>
    );
  };
  return (
    <>
      <Search
        value={search}
        onChangeText={(text: React.SetStateAction<String>) => setSearch(text)}
        placeholder={'Searching'}
      />
      {users && users.length !== 0 && !searching ? (
        <WrapperList>
          <FlatList
            data={users}
            renderItem={itemUser}
            keyExtractor={(item, index) => index.toString()}
          />
        </WrapperList>
      ) : (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator color={colors.green100} size={100} />
          <Text>Loading</Text>
        </View>
      )}
      {userDetails ? (
        <ContainerModal>
          <Animated.View
            style={[
              animatedStylesModal,
              {
                position: 'absolute',
                width: '100%',
                height: '70%',
                backgroundColor: colors.green100,
                zIndex: 3,
                bottom: 0,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                padding: 50,
              },
            ]}>
            <WrapperImageModal>
              <ImagemModal source={{uri: userDetails?.picture.large}} />
            </WrapperImageModal>
            <WrapperX
              onPress={() => {
                offset.value = withTiming(-100);
                modalHeight.value = withTiming(700, {
                  duration: 300,
                  easing: Easing.out(Easing.exp),
                });
                setUserDetails(null);
              }}>
              <FontAwesome
                name="close"
                size={25}
                color={colors.white}></FontAwesome>
            </WrapperX>
            <Animated.View style={[animatedStylesNameModal]}>
              <TitleModal>
                {userDetails.name.title} {userDetails.name.first}{' '}
                {userDetails.name.last}
              </TitleModal>
              <SubTitleModal>Email: {userDetails.email}</SubTitleModal>
              <SubTitleModal>
                Username: {userDetails.login.username}
              </SubTitleModal>
              <SubTitleModal>{userDetails.dob.age} Years Old</SubTitleModal>

              <SubTitleModal>
                <FontAwesome5 name="phone" size={16} color={colors.white} />
                {'  '}
                {userDetails.phone}
              </SubTitleModal>
            </Animated.View>
            <WrapperLocationModal>
              <TitleLocation>
                Nationality: <InfoLocation>{userDetails.nat}</InfoLocation>
              </TitleLocation>
              <TitleLocation>
                Country:{' '}
                <InfoLocation>{userDetails.location.country}</InfoLocation>
              </TitleLocation>
              <TitleLocation>
                City: <InfoLocation>{userDetails.location.city}</InfoLocation>
              </TitleLocation>
              <TitleLocation>
                State: <InfoLocation>{userDetails.location.state}</InfoLocation>
              </TitleLocation>
              <TitleLocation>
                Street:{' '}
                <InfoLocation>
                  {userDetails.location.street.name} -{' '}
                  {userDetails.location.street.number}
                </InfoLocation>
              </TitleLocation>
              <TitleLocation>
                Timezone:{' '}
                <InfoLocation>
                  {userDetails.location.timezone.description}
                </InfoLocation>
              </TitleLocation>
            </WrapperLocationModal>
          </Animated.View>
        </ContainerModal>
      ) : null}
    </>
  );
});
