export interface MenuItems {
  label: string;
  path: string;
}

export type UserRegister = {
  email: string;
  name: string;
  surname: string;
  password: string;
  favoriteTeam?: string;
};
