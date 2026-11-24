import { useState } from "react";
import { IFavorite } from '../types/types';
import { usePostFavoritesMutation } from "../services/favorites-api";

function useFavoriteToggle () {
    const handleAddToFavorites = (data: IFavorite) => {
        const [isFavorite, setIsFavorite] = useState(false);
        const
        
        const [
            postFavorites,
            { data: favoritesId, isSuccess: favoritesIdIsSuccess }
          ] = usePostFavoritesMutation();
        
        if (isAuthenticated) {
          if (!isFavorite) {
            postFavorites('2');
            setIsFavorite(true);
          } else {
            setIsFavorite(false);
            // handleDropFavorite(data);
          }
        } else {
          handleClickAuth();
        }

     
        
      };
    return {
        handleAddToFavorites,
    }
}

export { useFavoriteToggle }