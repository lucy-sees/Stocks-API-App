// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

const API_KEY = '17fb152bc0303cf17ad11b8b6fae087a';
const STOCKS_API_URL = `https://financialmodelingprep.com/api/v3/available-traded/list?apikey=${API_KEY}`;

const fetchData = async () => {
  const url = STOCKS_API_URL;
  const getURL = await axios.get(url);
  return getURL;
};

fetchData('react');

describe('Testing API axios', () => {
  test('URL is the correct', () => {
    const url = 'https://financialmodelingprep.com/api/v3/available-traded/list?apikey=17fb152bc0303cf17ad11b8b6fae087a';
    expect(url).toStrictEqual(STOCKS_API_URL);
  });
});

export { fetchData, STOCKS_API_URL };
