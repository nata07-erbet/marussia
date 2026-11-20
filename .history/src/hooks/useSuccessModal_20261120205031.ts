import { useState } from 'react';


interface useSuccessModal {
};

function useSuccessModal () {
   

 

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
