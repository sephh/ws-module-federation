import Api from './Api';

export const getCards = ({ page = 1, query = '', pageSize = 27 }) => {
  return Api.get(`/cards?page=${page}&name=${query}&pageSize=${pageSize}`).then(
    (res) => res.data.cards
  );
};
