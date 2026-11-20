import { useState } from 'react';


interface useSuccessModal {
};

function useSuccessModal () {
   

  clearTimeout

  const handleRegisterSubmit = () => {
    if (dataRegistrationSuccess) {
      setIsShowPopUpRegister(false);
      //   setIsShowSuccessPopUp(true);
    } else {
      return;
    }
  };

  const [postData, { isSuccess: dataRegistrationSuccess }] =
    usePostRegistrationDataMutation();

  const handleClickEnter = () => {
    alert(2);
    // setIsShowSuccessPopUp(false);
    // // setIsShowPopUpAuth(true);
  };

  //   const handleClosePopUpSuccess = () => {
  //     setIsShowSuccessPopUp(false);
  //   };

  return {
    handleClosePopUpRegister,
    postData,
    handleClickAuthPass,
    handleRegisterSubmit,
  };
}

export { useSuccessModal };
