import {getEntries} from './Entries';

export const PageLoading = () => {
  const makeRedirect = async () => {
    return await getEntries(0, 'Alimentação');
  };
  console.log(makeRedirect());
};
