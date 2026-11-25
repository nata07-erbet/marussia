import { useState } from "react";

function useTrailerShow() {
  const handleOpenTrailer = () => {
    onShowTailer();
  };

  const handleCloseTrailer = () => {
    onCloseTailer(false);
  };
  return {
    handleOpenTrailer,
    handleCloseTrailer,
  };
}

export { useTrailerShow };
