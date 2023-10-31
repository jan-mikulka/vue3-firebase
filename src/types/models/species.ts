import type { MonthNumbers, FlowerColors } from '../index';

export interface Species {
  id: number;
  name: string;
  minHeight: number;
  maxHeight: number;
  flowerColor?: FlowerColors;
  flowering: MonthNumbers[];
  leafPicking: MonthNumbers[];
  flowerPicking: MonthNumbers[];
  fruitPicking: MonthNumbers[];
  seedPicking: MonthNumbers[];
}
