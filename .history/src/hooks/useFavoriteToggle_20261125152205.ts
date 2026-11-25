import { useState } from 'react';
import { IFavorite, IMovie } from '../types/types';
import { usePostFavoritesMutation } from '../services/favorites-api';

interface IUseFavoriteToggle {
  isAuthenticated: boolean,
  onClickFavorite: () => void;
  onClickAuth: () => void,
}

function useFavoriteToggle({
  isAuthenticated,
  onClickAuth,
  onClickFavorite,
}: IUseFavoriteToggle) {
  const [isFavorite, setIsFavorite] = useState(false);

  const [
    postFavorites,
    { data: favoritesId, isSuccess: favoritesIdIsSuccess }
  ] = usePostFavoritesMutation();

  const handleAddToFavorites = (filmId: (IMovie['id'])) => {
    if(!filmId) return;

    if (isAuthenticated) {
      if (!isFavorite) {
        onClickFavoriteAdd();
        postFavorites(filmId.toString());
        setIsFavorite(true);
      } else {
        onClickFavoriteRemove();
        
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
