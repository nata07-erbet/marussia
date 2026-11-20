import { useState } from 'react';
import { usePostRegistrationDataMutation } from '../services/auth-api';

function useRegistrationModal({ onClickAuthReg }) {
    const [isShowPopUpAuth, setIsShowPopUpAuth] = useState(false);
  const [isShowPopUpRegister, setIsShowPopUpRegister] = useState(false);

  const handleClosePopUpRegister = () => {
    setIsShowPopUpRegister(false);
  };

  const handleClickAuthReg = () => {
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
    handleClickAuthReg,
    handleRegisterSubmit,
  };
}

export { useRegistrationModal };
