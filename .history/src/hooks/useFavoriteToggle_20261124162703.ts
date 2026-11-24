import { useState } from "react";
import { IFavorite } from '../types/types';

function useFavoriteToggle () {
    const handleAddToFavorites = (data: IFavorite) => {
        const [isFavorite, setIsFavorite] = useState(false);
        
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

    }
}

export { useFavoriteToggle }