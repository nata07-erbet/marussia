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

      const handleClickAuthReg = () => {
        setIsShowPopUpRegister(false);
        setIsShowPopUpAuth(true);
      };
    
      const handleClickRegistration = () => {
        setIsShowPopUpRegister(true);
        setIsShowPopUpAuth(false);
      };
    

    return {

    }
}




export { useRegistrationModal }