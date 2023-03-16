export interface MenuItems {
  label: string;
  path: string;
}

export type User = {
  id: string;
  email: string;
  name: string;
  surname: string;
  password: string;
  favoriteTeam?: string;
};

export type Token = {
  results: { token: string };
};
