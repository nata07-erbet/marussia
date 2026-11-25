interface IUseTrailerShow () 
function useTrailerShow() {
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
