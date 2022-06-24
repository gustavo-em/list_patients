import {IUsers} from '../../configs/types/Users';

export type IFetch = {
  limit: number;
};
export type IResult = {
  info: {
    page: number;
    results: number;
    seed: String;
    version: String;
  };
  results: IUsers[];
};
