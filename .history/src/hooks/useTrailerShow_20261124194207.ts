function useTrailerShow () {
    return {
        const [isShowTailer, setIsShowTailer] = useState(false);

  const handleOpenTrailer = () => {
    setIsShowTailer(true);
  };

  const handleCloseTrailer = () => {
    setIsShowTailer(false);
  };
    }
}

export { useTrailerShow }