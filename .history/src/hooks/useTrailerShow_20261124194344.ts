function useTrailerShow() {
  const [isShowTailer, setIsShowTailer] = useState(false);

  const handleOpenTrailer = () => {
    setIsShowTailer(true);
  };

  const handleCloseTrailer = () => {
    setIsShowTailer(false);
  };
  return {};
}

export { useTrailerShow };
