import { useState } from 'react';
import { useNavigate } from 'react-router';
import {
    useGetProfileQuery,
  usePostLoginMutation,
  usePostRegistrationDataMutation
} from '../services/auth-api';
import { AppRoutes } from '../const/const';

interface IUseAuthModal {
    onClickRegistration : () => void;
}
const useAuthModal = ({ onClickRegistration }: IUseAuthModal) => {

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
        setIsShowPopUpAuth(true);
    
  };

  const handleClosePopUpAuth = () => {
    setIsShowPopUpAuth(false);
  };

  const handleAuthSubmit = () => {
    setIsShowPopUpAuth(false);
  };

  const handleClickRegistration = () => {
    onClickRegistration();
    setIsShowPopUpAuth(false);
  };

  return {
    postLogin,
    isShowPopUpAuth,
    handleClickAuth,
    handleClosePopUpAuth,
    handleAuthSubmit,
    handleClickRegistration
  };
};

export { useAuthModal };
