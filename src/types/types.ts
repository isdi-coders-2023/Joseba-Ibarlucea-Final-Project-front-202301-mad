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

export type BestPosition = {
  position: number;
  times: number;
};

export type Team = {
  id: string;
  name: string;
  logo: string;
  championships: number;
  bestPosition: BestPosition;
  poles: number;
  fastestLaps: number;
  chassis: string;
  engine: string;
};

export type CircuitLocation = {
  country: string;
  city: string;
};

export type CircuitRecord = {
  time: string;
  driver: string;
  year: string;
};

export type Circuit = {
  id: string;
  race: string;
  image: string;
  location: CircuitLocation;
  laps: number;
  lapRecord: CircuitRecord;
};
