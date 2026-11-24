import { useState } from 'react';
import { IFavorite, IMovie } from '../types/types';
import { usePostFavoritesMutation } from '../services/favorites-api';

interface IUseFavoriteToggle {
  isAuthenticated: boolean,
  onClickFavorite: () => void;
  onClickAuth: () => void,
  c: IMovie['id'] | undefined;
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
    if(Тип "number | undefined" не может быть назначен для типа "number".
    Тип "undefined" не может быть назначен для типа "number".ts(2322)
  useFavoriteToggle.ts(9, 3): Ожидаемый тип поступает из свойства "filmId", объявленного здесь в типе "IUseFavoriteToggle"
  (property) IUseFavoriteToggle.filmId: number)
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
