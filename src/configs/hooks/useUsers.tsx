import React, {createContext, useContext, useState} from 'react';
import {IUsers} from '../types/Users';

const UsersContext = createContext(null);

export const UsersContainerContext = ({children}: any) => {
  const [users, setUsers] = useState<IUsers[] | []>([]);
  const [searching, setSearching] = useState<Boolean>(false);
  return (
    <UsersContext.Provider value={{users, setUsers, searching, setSearching}}>
      {children}
    </UsersContext.Provider>
  );
};

type IUserContext = {
  users: IUsers[] | [];
  setUsers: Function;
  searching: Boolean;
  setSearching: Function;
};

export const useUsers = () => {
  const userContext = useContext(UsersContext);
  return userContext as unknown as IUserContext;
};

export const URL_USERS =
  'https://randomuser.me/api/?seed=testmobile&results=50';
