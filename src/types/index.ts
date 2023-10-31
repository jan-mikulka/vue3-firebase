export type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};

export type MonthNumbers = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type FlowerColors = 'white' | 'yellow' | 'violet' | 'brown';
