import { usePostRegistrationDataMutation } from "../services/auth-api";

function useRegistrationModal () {
    const [isShowPopUpRegister, setIsShowPopUpRegister] = useState(false);
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

      const handleClosePopUpRegister = () => {
        setIsShowPopUpRegister(false);
      };

    return {

    }
}




export { useRegistrationModal }