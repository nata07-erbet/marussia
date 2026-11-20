import { useState } from 'react';
import { usePostRegistrationDataMutation } from '../services/auth-api';

function useRegistrationModal() {
  const [isShowPopUpRegister, setIsShowPopUpRegister] = useState(false);

  const handleClosePopUpRegister = () => {
    setIsShowPopUpRegister(false);
  };

  const handleClickAuthReg = () => {
    setIsShowPopUpRegister(false);
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
    handleClickAuthReg
  };
}

export { useRegistrationModal };
