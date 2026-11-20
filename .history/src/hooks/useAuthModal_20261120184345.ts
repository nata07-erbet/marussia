import { useState } from 'react';
import { useNavigate } from 'react-router';
import {
    useGetProfileQuery,
  usePostLoginMutation,
  usePostRegistrationDataMutation
} from '../services/auth-api';
import { AppRoutes } from '../const/const';

interface IUseAuthModal {
  onSignUpClick: () => void;
}

const useAuthModal = ({ onSignUpClick }: IUseAuthModal) => {

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
        onSignUpClick();
    }
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


  return {
    postLogin,
    isShowPopUpAuth,
    handleClickAuth,
    
  };
};

export { useAuthModal };
