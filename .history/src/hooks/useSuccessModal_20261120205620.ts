import { useState } from 'react';


interface useSuccessModal {
};

function useSuccessModal () {
   const [ isShowSuccessPopUp, setIsShowSuccessPopUp ] = useState(false);

  const onClickEnterSuccess = () => {
    alert(2);
    setIsShowSuccessPopUp(false);
    on;
  };

    const handleClosePopUpSuccess = () => {
      setIsShowSuccessPopUp(false);
    };

  return {
    onClickEnterSuccess
  };
}

export { useSuccessModal };
