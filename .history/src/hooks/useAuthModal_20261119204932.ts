import { useState } from 'react';
import { useNavigate } from 'react-router';
import { usePostLoginMutation, usePostRegistrationDataMutation } from '../services/auth-api';
import { AppRoutes } from '../const/const';

interface IUseAuthModal {
  onSignUpClick: () => void;
  onLoginUpClick: () => void
  
}

const useAuthModal = ({ onLoginUpClick, onSignUpClick }: IUseAuthModal) => {
  const navigate = useNavigate();
  const [postData, { isSuccess: dataRegistrationSuccess }] =
    usePostRegistrationDataMutation();

  const [
    postLogin,
    {
      data: loginData,
      error: loginError,
      isLoading: loginIsLoading,
      isSuccess: loginIsSuccess
    }
  ] = usePostLoginMutation();

  const [isShowPopUpAuth, setIsShowPopUpAuth] = useState(false);
  const [isShowPopUpRegister, setIsShowPopUpRegister] = useState(false);
  const [isShowSuccessPopUp, setIsShowSuccessPopUp] = useState(false);

  const handleClosePopUpRegister = () => {
    setIsShowPopUpRegister(false);
  };

  const handleClickAuth = () => {
    if (loginIsSuccess) {
      navigate(AppRoutes.User);
    } else {
        onLoginUpClick()
      setIsShowPopUpAuth(true);
    }
  };

  const handleClickAuthReg = () => {
    setIsShowPopUpRegister(false);
    setIsShowPopUpAuth(true);
  };

  const handleClickRegistration = () => {
    setIsShowPopUpRegister(true);
    setIsShowPopUpAuth(false);
  };

  const handleClosePopUpSuccess = () => {
    setIsShowSuccessPopUp(false);
  };

  const handleAuthSubmit = () => {
    setIsShowPopUpAuth(false);
  };

  const handleClickEnter = () => {
    setIsShowSuccessPopUp(false);
    setIsShowPopUpAuth(true);
  };

  const handleClosePopUpAuth = () => {
    setIsShowPopUpAuth(false);
  };

  const handleRegisterSubmit = () => {
    if (dataRegistrationSuccess) {
      setIsShowPopUpRegister(false);
      setIsShowSuccessPopUp(true);
    } else {
      return;
    }
  };

  return {
    postData,
    isShowPopUpAuth,
    isShowPopUpRegister,
    isShowSuccessPopUp,
    handleClosePopUpRegister,
    handleClickAuth,
    handleClickAuthReg,
    handleClickRegistration,
    handleClosePopUpSuccess,
    handleAuthSubmit,
    handleClickEnter,
    handleClosePopUpAuth,
    handleRegisterSubmit
  }
};

export { useAuthModal };
