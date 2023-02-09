import {useState, useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';

import {getBalance} from '../services/Balance';

export const useBalance = (days = 0) => {
  const [balance, setBalance] = useState(0);

  useFocusEffect(
    useCallback(() => {
      const loadBalance = async () => {
        const dataBalance = await getBalance(days);
        setBalance(dataBalance);
      };
      loadBalance();
    }, [days]),
  );

  return [balance];
};
