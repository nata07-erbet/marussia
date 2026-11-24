import { useState } from 'react';
import { IFavorite } from '../types/types';
import { usePostFavoritesMutation } from '../services/favorites-api';

interface IUseFavoriteToggle {
  isAuthenticated: boolean,
  onClickAuth: () => void,
}

function useFavoriteToggle({
  isAuthenticated,
  onClickAuth
}: IUseFavoriteToggle) {
  const [isFavorite, setIsFavorite] = useState(false);

  const [
    postFavorites,
    { data: favoritesId, isSuccess: favoritesIdIsSuccess }
  ] = usePostFavoritesMutation();

  const handleAddToFavorites = (data: IFavorite) => {
    if (isAuthenticated) {
      if (!isFavorite) {
        postFavorites('2');
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
