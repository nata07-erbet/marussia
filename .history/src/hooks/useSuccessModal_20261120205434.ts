import { useState } from 'react';


interface useSuccessModal {
};

function useSuccessModal () {
   const [setIsShowSuccessPopUp, setsetIsShowSuccessPopUp]

  const onClickEnterSuccess = () => {
    alert(2);
    setIsShowSuccessPopUp(false);
    setIsShowPopUpAuth(true);
  };

    const handleClosePopUpSuccess = () => {
      setIsShowSuccessPopUp(false);
    };

  return {
    onClickEnterSuccess
  };
}

export { useSuccessModal };
