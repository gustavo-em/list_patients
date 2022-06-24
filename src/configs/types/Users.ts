export type IUsers = {
  gender: 'male' | 'female';
  name: {
    title: String;
    first: String;
    last: String;
  };
  location: {
    street: {
      number: number;
      name: String;
    };
    city: String;
    state: String;
    country: String;
    postcode: number;
    coordinates: {
      latitude: number;
      longitude: number;
    };
    timezone: {
      offset: String;
      description: String;
    };
  };
  email: String;
  login: {
    uuid: String;
    username: String;
    password: String;
    salt: String;
    md5: String;
    sha1: String;
    sha256: String;
  };
  dob: {
    date: String;
    age: number;
  };
  registered: {
    date: String;
    age: number;
  };
  phone: String;
  cell: String;
  id: {
    name: String;
    value: number;
  };
  picture: {
    large: String;
    medium: String;
    thumbnail: String;
  };
  nat: String;
};
