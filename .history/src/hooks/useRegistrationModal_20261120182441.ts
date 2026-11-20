import { usePostRegistrationDataMutation } from "../services/auth-api";

function useRegistrationModal () {
    const [postData, { isSuccess: dataRegistrationSuccess }] =
    usePostRegistrationDataMutation();
    
    const handleRegisterSubmit = () => {
        if (dataRegistrationSuccess) {
          setIsShowPopUpRegister(false);
          setIsShowSuccessPopUp(true);
        } else {
          return;
        }
      };
    return {

    }
}




export { useRegistrationModal }