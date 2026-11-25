import { useState } from "react";

function useTrailerShow() {


  const handleOpenTrailer = () => {
    setIsShowTailer(true);
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
