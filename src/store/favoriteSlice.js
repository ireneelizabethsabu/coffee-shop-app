import {produce} from 'immer';

export const createFavoriteSlice = (set, get) => ({
  FavoriteList: [],
  addToFavorites: id =>
    set(
      produce(state => {
        state.FavoriteList.push(id);
      }),
    ),
  removeFromFavorites: id =>
    set(
      produce(state => {
        const index = state.FavoriteList.indexOf(id);
        if (index > -1) {
          state.FavoriteList.splice(index, 1);
        }
      }),
    ),
});
