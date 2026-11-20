import { useState } from 'react';
import { useNavigate } from 'react-router';
import {
    useGetProfileQuery,
  usePostLoginMutation,
  usePostRegistrationDataMutation
} from '../services/auth-api';
import { AppRoutes } from '../const/const';

const useAuthModal = () => {

  const navigate = useNavigate();
  
  const { data: profileData, isLoading, error } = useGetProfileQuery();

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

  const [isShowSuccessPopUp, setIsShowSuccessPopUp] = useState(false);

 
  const handleClickAuth = () => {
    if (profileData) {
      navigate(AppRoutes.User);
    } else {
        setIsShowPopUpAuth(true);
    }
  };

  const handleClosePopUpAuth = () => {
    setIsShowPopUpAuth(false);
  };

  const handleAuthSubmit = () => {
    setIsShowPopUpAuth(false);
  };

  const handleClickRegistration = () => {
    onC
    setIsShowPopUpRegister(true);
    setIsShowPopUpAuth(false);
  };

  return {
    postLogin,
    isShowPopUpAuth,
    handleClickAuth,
    handleClosePopUpAuth,
    handleAuthSubmit
  };
};

export { useAuthModal };
