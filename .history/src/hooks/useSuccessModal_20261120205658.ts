import { useState } from 'react';


interface IUseSuccessModal {
    onSignUp: () => void;
};

function useSuccessModal ({ onSignUp }) {
   const [ isShowSuccessPopUp, setIsShowSuccessPopUp ] = useState(false);

  const onClickEnterSuccess = () => {
    alert(2);
    setIsShowSuccessPopUp(false);
    onSignUp();
  };

    const handleClosePopUpSuccess = () => {
      setIsShowSuccessPopUp(false);
    };

  return {
    onClickEnterSuccess
  };
}

export { useSuccessModal };
