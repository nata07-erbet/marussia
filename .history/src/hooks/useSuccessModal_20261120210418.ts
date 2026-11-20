import { useState } from 'react';


interface IUseSuccessModal {
    onSignUp: () => void;
};

function useSuccessModal ({ onSignUp }: IUseSuccessModal) {
   const [ isShowSuccessPopUp, setIsShowSuccessPopUp ] = useState(false);

  const handleClickEnterSuccess= () => {
    alert(2);
    setIsShowSuccessPopUp(false);
    onSignUp();
  };

    const handleClosePopUpSuccess = () => {
      setIsShowSuccessPopUp(false);
    };

  return {
    handleClickEnterSuccess,
    handleClosePopUpSuccess

  };
}

export { useSuccessModal };
