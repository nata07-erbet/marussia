import { useState } from "react";

function useTrailerShow() {
  const handleOpenTrailer = () => {
    onShowTailer();
  };

  const handleCloseTrailer = () => {
    onShowTailer(false);
  };
  return {
    handleOpenTrailer,
    handleCloseTrailer,
  };
}

export { useTrailerShow };
