import { useState } from 'react';
import { IFavorite,  } from '../types/types';
import { usePostFavoritesMutation } from '../services/favorites-api';

interface IUseFavoriteToggle {
  isAuthenticated: boolean,
  onClickFavorite: () => void;
  onClickAuth: () => void,
  filmId: 
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
    if (isAuthenticated) {
      if (!isFavorite) {
        onClickFavorite();
        postFavorites(filmId);
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
