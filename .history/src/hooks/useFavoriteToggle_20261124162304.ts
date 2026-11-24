function useFavoriteToggle () {
    const handleAddToFavorites = (data: IFavorite) => {
        if (loginIsSuccess) {
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