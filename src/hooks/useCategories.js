import {useState, useCallback} from 'react';

import {useFocusEffect} from '@react-navigation/native';

import {
  getDebitCategories,
  getCreditCategories,
  getAllCategories,
  getInitCategories,
} from '../services/Categories';

const useCategories = type => {
  const [categories, setCategories] = useState([]);

  useFocusEffect(
    useCallback(() => {
      const loadEntries = async () => {
        const data =
          type === 'init'
            ? await getInitCategories()
            : type === undefined
            ? await getAllCategories()
            : type
            ? await getCreditCategories()
            : await getDebitCategories();

        setCategories(data);
      };

      loadEntries();
    }, [type]),
  );

  return [categories];
};

export default useCategories;
