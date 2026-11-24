import { useState } from 'react';
import { useNavigate } from 'react-router';
import {
  useGetProfileQuery,
  usePostLoginMutation,
  usePostRegistrationDataMutation
} from '../services/auth-api';
import { AppRoutes } from '../const/const';

interface IUseAuthModal {
  onClickRegistration: () => void
  onClickAuthSign: () => void
  onClose: () => void
}
const useAuthModal = ({ onClickRegistration, onClickAuthSign, onClose }: IUseAuthModal) => {


  const { data: profileData, isLoading, error } = useGetProfileQuery();

  const [
    postLogin,

  ] = usePostLoginMutation();

  const [isShowPopUpAuth, setIsShowPopUpAuth] = useState(false);

  const handleClickAuth = () => {
    onClickAuthSign();
  };

  const handleClosePopUpAuth = () => {
    onClose();
  };

  const handleAuthSubmit = () => {
    setIsShowPopUpAuth(false);
  };

  const handleClickRegistration = () => {
    setIsShowPopUpAuth(false);
    onClickRegistration();
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
