import { useState } from 'react';
import { IFavorite, IMovie } from '../types/types';
import { usePostFavoritesMutation } from '../services/favorites-api';

interface IUseFavoriteToggle {
  isAuthenticated: boolean,
  onClickFavorite: () => void;
  onClickAuth: () => void,
  filmId: (IMovie['id'] | undefined;
}

function useFavoriteToggle({
  isAuthenticated,
  onClickAuth,
  onClickFavorite,
  filmId
}: IUseFavoriteToggle) {
  const [isFavorite, setIsFavorite] = useState(false);

  const [
    postFavorites,
    { data: favoritesId, isSuccess: favoritesIdIsSuccess }
  ] = usePostFavoritesMutation();

  const handleAddToFavorites = (data: IFavorite) => {
    if(!filmId) return;

    if (isAuthenticated) {
      if (!isFavorite) {
        onClickFavorite();
        postFavorites(filmId.toString());
        setIsFavorite(true);
      } else {
        setIsFavorite(false);
        // handleDropFavorite(data);
      }
    } else {
      onClickAuth();
    }
  };

  return {
    handleAddToFavorites
  };
}

export { useFavoriteToggle };
