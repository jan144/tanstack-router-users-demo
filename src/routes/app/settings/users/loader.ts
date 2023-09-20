import { Loader } from '@tanstack/react-loaders';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export const usersLoader = new Loader({
  key: 'usersLoader',
  fn: async ({ username }: { username: string }) => {
    const users: User[] = await fetch(
      `https://jsonplaceholder.typicode.com/users${
        username && username.length > 0 ? `?username=${username}` : ''
      }`
    ).then((res) => res.json());
    return users;
  },
});
