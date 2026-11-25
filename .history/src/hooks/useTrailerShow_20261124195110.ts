import { useState } from "react";

function useTrailerShow() {
  const handleOpenTrailer = () => {
    onShowTailer(true);
  };

  const handleCloseTrailer = () => {
    setIsShowTailer(false);
  };
  return {
    handleOpenTrailer,
    handleCloseTrailer,
  };
}

export { useTrailerShow };
