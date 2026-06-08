import { PopUpSample, PopUpSampleProps } from './pop-up-sample';
import { BASE_URL, ReqRoutes} from '../../const/const';
import styled from 'styled-components';
import { ButtonSecond } from '../button-second';
import { useForm } from 'react-hook-form';
import axios, { AxiosError } from 'axios';


const Modal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  border-radius: 24px;
  padding: 64px 40px;
  width: 420px;
  height: 709px;
  background-color: #fff;
`;

const WrapperAuth = styled.div`{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #67a5eb;
}`;

const ImgPopUp = styled.img`
  margin-bottom: 40px;
`;

const Form = styled.form``;

const Label = styled.label<{ $isError?: boolean }>`
  display: flex;
  gap: 12px;
  border: ${(props) => (props.$isError ? '1px solid #ff7575' : '1px solid rgba(0, 0, 0, 0.4)')};
  border-radius: 8px;
  padding: 16px;
  width: 340px;
  height: 56px;

  &:not(:last-child) {
    margin-bottom: 16px
    };
  }
`;

const Input = styled.input`
  display: flex;
  border: none;
  font-family: Play;
  font-weight: 400;
  font-size: 18px;
  line-height: 133%;
  color: rgba(0, 0, 0, 0.4);
`;

const Svg = styled.svg<{ $isError?: boolean }>`
  fill: ${(props) => (props.$isError ? '#ff7575' : 'rgba(0, 0, 0, 0.4)')};
`;

const Button = styled.button`
  background-color: #67a5eb;
  border: none;
  border-radius: 28px;
  margin-top: 24px;
  padding: 16px 48px;
  width: 340px;
  height: 56px;
  font-family: 'Play', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 133%;
  color: #fff;
`

type AuthPopUpProps = PopUpSampleProps & {
  onClickAuth: () => void;
  onClickPostDataAccount: () => void;
  onSubmit: () => void;
  isError: boolean;
};

type IFormData = {
  email: string;
  name: string;
  surname: string;
  password: string;
  passwordInputTwice: string;
};

function RegisterPopUp({
  onClickAuth,
  onClickPostDataAccount,
  onSubmit,
  ...props
}: AuthPopUpProps) {
  const handlePostDataAccount = () => {
    onClickPostDataAccount();
  };

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormData>();

  const handleClickAuth = () => {
    onClickAuth();
  };

  const onSubmitData = async(data:IFormData) => {
    try{
      const result = await axios.post(`${BASE_URL}${ReqRoutes.USER}`, data);

      if(result.status === 200) {
        onSubmit();
      }
    } catch(error) {
      const axiosError = error as AxiosError;
      
      if(axiosError.response?.status === 409 ) {
        alert('Такой пользователь уже существует');
      } if (axiosError.response?.status === 400) {
        alert('Пройдите регистрацию еще раз');
      }
    }
  };

  const emailInput = register('email', {
    required: {
      value: true,
      message: 'Введите email'
    },
    pattern: {
      value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
      message: 'Адрес электронной почты должен содержать @'
    }
  });

  const nameInput = register('name', {
    required: true
  });

  const surnameInput = register('surname', {
    required: true,
  });

  const passwordInput = register('password', {
    required: true
  });

  const passwordInputTwice = register('passwordInputTwice', {
    required: true,
  });

  const isError = false;
  return (
    <PopUpSample {...props}>
      <WrapperAuth>
        <Modal>
          <ImgPopUp
            src='/assets/marussia_popup.png'
            width='156px'
            height='35px'
          ></ImgPopUp>
          <Form onSubmit={handleSubmit(onSubmitData)}>
            <Label $isError={!!errors.email}>
              <Svg
                $isError={isError}
                width='24'
                height='24'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M21 3C21.5523 3 22 3.44772 22 4V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V19H20V7.3L12 14.5L2 5.5V4C2 3.44772 2.44772 3 3 3H21ZM8 15V17H0V15H8ZM5 10V12H0V10H5ZM19.5659 5H4.43414L12 11.8093L19.5659 5Z' />
              </Svg>
              <Input
                {...emailInput}
                type='email'
                id='email'
                placeholder='Электронная почта'
              ></Input>
            </Label>

            <Label $isError={!!errors.name}>
              <Svg
                $isError={isError}
                width='16'
                height='21'
                viewBox='0 0 16 21'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M0 21C0 16.5817 3.58172 13 8 13C12.4183 13 16 16.5817 16 21H14C14 17.6863 11.3137 15 8 15C4.68629 15 2 17.6863 2 21H0ZM8 12C4.685 12 2 9.315 2 6C2 2.685 4.685 0 8 0C11.315 0 14 2.685 14 6C14 9.315 11.315 12 8 12ZM8 10C10.21 10 12 8.21 12 6C12 3.79 10.21 2 8 2C5.79 2 4 3.79 4 6C4 8.21 5.79 10 8 10Z' />
              </Svg>
              <Input
                {...nameInput}
                type='text'
                id='name'
                placeholder='Имя'
              ></Input>
            </Label>

            <Label $isError={!!errors.surname}>
              <Svg
                $isError={isError}
                width='16'
                height='21'
                viewBox='0 0 16 21'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M0 21C0 16.5817 3.58172 13 8 13C12.4183 13 16 16.5817 16 21H14C14 17.6863 11.3137 15 8 15C4.68629 15 2 17.6863 2 21H0ZM8 12C4.685 12 2 9.315 2 6C2 2.685 4.685 0 8 0C11.315 0 14 2.685 14 6C14 9.315 11.315 12 8 12ZM8 10C10.21 10 12 8.21 12 6C12 3.79 10.21 2 8 2C5.79 2 4 3.79 4 6C4 8.21 5.79 10 8 10Z' />
              </Svg>
              <Input
              {...surnameInput}
                type='text'
                id='surname'
                placeholder='Фамилия'
              ></Input>
            </Label>

            <Label $isError={!!errors.password}>
              <Svg
                $isError={isError}
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M12.917 13C12.441 15.8377 9.973 18 7 18C3.68629 18 1 15.3137 1 12C1 8.68629 3.68629 6 7 6C9.973 6 12.441 8.16229 12.917 11H23V13H21V17H19V13H17V17H15V13H12.917ZM7 16C9.20914 16 11 14.2091 11 12C11 9.79086 9.20914 8 7 8C4.79086 8 3 9.79086 3 12C3 14.2091 4.79086 16 7 16Z' />
              </Svg>
              <Input
              {...passwordInput}
                type='text'
                id='password'
                placeholder='Пароль'
              ></Input>
            </Label>

            <Label $isError={!!errors.passwordInputTwice}>
              <Svg
                $isError={isError}
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M12.917 13C12.441 15.8377 9.973 18 7 18C3.68629 18 1 15.3137 1 12C1 8.68629 3.68629 6 7 6C9.973 6 12.441 8.16229 12.917 11H23V13H21V17H19V13H17V17H15V13H12.917ZM7 16C9.20914 16 11 14.2091 11 12C11 9.79086 9.20914 8 7 8C4.79086 8 3 9.79086 3 12C3 14.2091 4.79086 16 7 16Z' />
              </Svg>
              <Input
              {...passwordInputTwice}
                type='text'
                id='enter-password'
                placeholder='Подтвердите пароль'
              ></Input>
            </Label>
            <Button type ='submit'>Создать аккаунт</Button>
          </Form>
           
          <ButtonSecond
            value={'У меня есть пароль'}        
            onClick={handleClickAuth}
          />
        </Modal>
      </WrapperAuth>
    </PopUpSample>
  );
}

export { RegisterPopUp };
