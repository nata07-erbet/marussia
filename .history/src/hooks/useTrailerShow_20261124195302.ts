interface IUseTrailerShow {
    onShowTailer: () => void;
    onCloseTailer: () => void;
}

function useTrailerShow({onShowTailer }) {
  const handleOpenTrailer = () => {
    onShowTailer();
  };

  const handleCloseTrailer = () => {
    onCloseTailer();
  };

  return {
    handleOpenTrailer,
    handleCloseTrailer,
  };
}

export { useTrailerShow };
