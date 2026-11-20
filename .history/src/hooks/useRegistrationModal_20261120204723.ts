import { useState } from 'react';
import { usePostRegistrationDataMutation } from '../services/auth-api';

interface IUseRegistrationModal {
    onClickAuthReg: () => void;
};

function useRegistrationModal({ onClickAuthReg }: IUseRegistrationModal) {
  const [isShowPopUpRegister, setIsShowPopUpRegister] = useState(false);

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
      itSubmitSuccess
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

export { useRegistrationModal };
