import { useState } from 'react';


interface useSuccessModal {
    onSignUp
};

function useSuccessModal () {
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
