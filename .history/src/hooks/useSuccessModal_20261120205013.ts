import { useState } from 'react';


interface useSuccessModal {
};

function useSuccessModal () {
   

  const handleClosePopUpRegister = () => {
    setIsShowPopUpRegister(false);
  };

  const handleClickAuthPass = () => {
    setIsShowPopUpRegister(false);
    onClickAuthReg();
  };

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
