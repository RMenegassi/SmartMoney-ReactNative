import {useState, useCallback} from 'react';

import {useFocusEffect} from '@react-navigation/native';

import {getDebitCategories, getCreditCategories} from '../services/Categories';

const useCategories = positivo => {
  const [categories, setCategories] = useState([]);

  useFocusEffect(
    useCallback(() => {
      const loadEntries = async () => {
        const data = positivo
          ? await getCreditCategories()
          : await getDebitCategories();
        setCategories(data);
      };

      loadEntries();
    }, [positivo]),
  );

  return [categories];
};

export default useCategories;
