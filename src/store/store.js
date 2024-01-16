import AsyncStorage from '@react-native-async-storage/async-storage';
import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import {createCartSlice} from './cartSlice';
import {createDataSlice} from './dataSlice';
import {createFavoriteSlice} from './favoriteSlice';
import {createHistorySlice} from './historySlice';

export const useStore = create(
  persist(
    (...a) => ({
      ...createDataSlice(...a),
      ...createCartSlice(...a),
      ...createFavoriteSlice(...a),
      ...createHistorySlice(...a),
    }),
    {
      name: 'coffee-app',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
