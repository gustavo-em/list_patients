import React, {useState} from 'react';
import {Text, TextInput} from 'react-native';
import {
  ContainerSearch,
  DropdownFilter,
  InputSearch,
  OptionButton,
  TextRadio,
  WrapperFilter,
  WrapperIconSearch,
  WrapperRadioButton,
} from './style';
import {colors} from '../../../configs/layout/colors';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useUsers, URL_USERS} from '../../../configs/hooks/useUsers';
import {IResult} from '../../List/types';
import {IUsers} from '../../../configs/types/Users';
import RadioForm from 'react-native-simple-radio-button';
type IInput = {
  placeholder: String;
  onChangeText: Function;
  value: String;
};
export const Search = ({placeholder, onChangeText, value}: IInput) => {
  const {users, setUsers, searching, setSearching} = useUsers();
  const [visibilityFilter, setVisibilityFilter] = useState(false);
  const [search, setSearch] = useState('');
  const [valueRadio, setValueRadio] = useState(0);
  function filterGender(gender: string, radio: number) {
    setSearching(true);
    fetch(`${URL_USERS}`)
      .then(r => r.json())
      .then((response: IResult) => {
        const usersResult: IUsers[] = response.results;

        const usersFilter = usersResult.filter((user: IUsers) => {
          if (user.gender !== gender) return false;
          if (valueRadio == 0) {
            //If select filter by name
            if (!user.name.first.includes(search)) return false;
          } else {
            //If select filter by name
            if (!user.nat.includes(search)) return false;
          }
          return user;
        });
        setUsers(usersFilter);
        setSearching(false);
      });
  }

  var radio_props = [
    {label: 'Name  ', value: 0},
    {label: 'Nationality', value: 1},
  ];

  React.useEffect(() => {
    filterStringInput(valueRadio);
  }, [search]);
  function filterStringInput(radio: number) {
    setSearching(true);
    fetch(`${URL_USERS}`)
      .then(r => r.json())
      .then((response: IResult) => {
        const usersResult: IUsers[] = response.results;

        const usersFilter = usersResult.filter((user: IUsers) => {
          if (valueRadio == 0) {
            //If select filter by name
            if (!user.name.first.includes(search)) return false;
          } else {
            //If select filter by name
            if (!user.nat.includes(search)) return false;
          }
          return user;
        });
        setUsers(usersFilter);
        setSearching(false);
      });
  }

  return (
    <>
      <ContainerSearch>
        <WrapperIconSearch onPress={filterStringInput}>
          <FontAwesome5 name={'search-plus'} size={20} color={colors.black} />
        </WrapperIconSearch>
        <InputSearch
          onChangeText={text => setSearch(text)}
          value={search}
          placeholder={placeholder}
        />
        <WrapperFilter onPress={() => setVisibilityFilter(!visibilityFilter)}>
          <FontAwesome5 name={'filter'} size={20} color={colors.black} />
        </WrapperFilter>
        {visibilityFilter ? (
          <DropdownFilter>
            <OptionButton onPress={() => filterGender('male', valueRadio)}>
              <Text>Male</Text>
            </OptionButton>
            <OptionButton onPress={() => filterGender('female', valueRadio)}>
              <Text>Female</Text>
            </OptionButton>
          </DropdownFilter>
        ) : null}
      </ContainerSearch>
      <WrapperRadioButton>
        <TextRadio>Filter by</TextRadio>
        <RadioForm
          radio_props={radio_props}
          initial={valueRadio}
          formHorizontal={true}
          labelHorizontal={true}
          buttonColor={colors.green100}
          animation={true}
          labelColor={colors.green100}
          onPress={value => setValueRadio(value)}
        />
      </WrapperRadioButton>
    </>
  );
};
