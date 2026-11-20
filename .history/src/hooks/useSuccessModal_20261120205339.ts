import { useState } from 'react';


interface useSuccessModal {
};

function useSuccessModal () {
   



  const onClickEnterSuccess = () => {
    alert(2);
    setIsShowSuccessPopUp(false);
    // setIsShowPopUpAuth(true);
  };

    const handleClosePopUpSuccess = () => {
      setIsShowSuccessPopUp(false);
    };

  return {
    onClickEnterSuccess
  };
}

export { useSuccessModal };
