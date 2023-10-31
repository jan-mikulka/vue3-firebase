import { map, range } from 'lodash';
import { i18n } from 'src/boot/i18n';

const monthNames = map(range(1, 13), (month: number) =>
  i18n.global.t(`months.${month}`)
);

export const getMonthName = (month: number): string => {
  return monthNames[month - 1];
};
