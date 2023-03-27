import { HttpErrorResponse } from '@angular/common/http';

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
  results: { token: string; role: string };
};

export type TokenRole = { token: string; role: string };

export type Team = {
  id: string;
  name: string;
  logo: string;
  championships: number;
  bestPosition: {
    position: number;
    times: number;
  };
  poles: number;
  fastestLaps: number;
  chassis: string;
  engine: string;
};

export type Circuit = {
  id: string;
  race: string;
  image: string;
  location: {
    country: string;
    city: string;
  };
  laps: number;
  lapRecord: {
    time: string;
    driver: string;
    year: string;
  };
};

export type Driver = {
  id: string;
  name: string;
  image: string;
  nationality: string;
  racingNumber: number;
  championships: number;
  podiums: number;
  team: string;
};

export type Ranking = {
  id: string;
  position: number;
  points: number;
  wins: 15;
  team: {
    name: string;
    id: string;
  };
  driver: {
    name: string;
    id: string;
  };
};
