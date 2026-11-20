import { useState } from 'react';


interface useSuccessModal {
};

function useSuccessModal () {
   const [ isShowSuccessPopUp, setIsShowSuccessPopUp] 

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
