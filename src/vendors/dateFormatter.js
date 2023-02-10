import moment from './moment';

export const dateFormatter = dateString => {
  const newDate = new Date(dateString);
  return moment(newDate).format('L');
};
