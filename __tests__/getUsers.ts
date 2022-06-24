import 'react-native';
import React from 'react';
import {URL_USERS} from '../src/configs/hooks/useUsers';
import {getUsers} from '../src/screens/List/functions';

it('Get patients', async () => {
  const data = await getUsers(URL_USERS);
  expect(data).toBe(Object);
});
