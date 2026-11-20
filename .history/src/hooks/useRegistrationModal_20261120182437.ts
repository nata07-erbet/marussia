import { usePostRegistrationDataMutation } from "../services/auth-api";

function useRegistrationModal () {
    const [postData, { isSuccess: dataRegistrationSuccess }] =
    usePostRegistrationDataMutation();
    

    
    return {

    }
}




export { useRegistrationModal }