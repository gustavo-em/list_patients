import {IUsers} from '../../configs/types/Users';

export async function getUsers(URL: string): Promise<IUsers[] | false> {
  try {
    const fetchUsers = await fetch(URL);

    const usersParsed = await fetchUsers.json();
    return usersParsed.results;
  } catch {
    return false;
  }
}
