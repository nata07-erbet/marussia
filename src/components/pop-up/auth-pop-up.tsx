import React, { useState } from 'react';
import axios from 'axios';
import { StatusCodes } from 'http-status-codes';
import { PopUpSample, PopUpSampleProps } from './pop-up-sample';
import styled from 'styled-components';
import { ButtonSecond } from '../button-second';
import { useForm } from 'react-hook-form';
import { BASE_URL, ReqRoutes } from '../../const/const';


const Modal = styled.div<{ $isError?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  border-radius: 24px;
  padding: 64px 40px;
  width: 420px;
  height: ${(props) => (props.$isError ? '500px' : '455px')};
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

const Label = styled.label<{ $isError?: boolean }>`
  display: flex;
  gap: 12px;
  border: ${(props) => (props.$isError ? '1px solid #ff7575' : '1px solid rgba(0, 0, 0, 0.4)')};
  border-radius: 8px;
  padding: 16px;
  width: 340px;
  height: 56px;

  &:first-of-type {
    margin-bottom: ${(props) => (props.$isError ? '' : '16px')};
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

const Svg = styled.svg<{ $isError: boolean }>`
  fill: ${(props) => (props.$isError ? '#ff7575' : 'rgba(0, 0, 0, 0.4)')}
`;

const ButtonEl = styled.button`
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
`;

const PError = styled.span`
  font-size: 10px;
  color: red;
`;

type AuthPopUpProps = PopUpSampleProps & {
  onClickRegistration: () => void;
  onSubmit: () => void;
};

type FormInputs = {
  email: string,
  password: string
};

function AuthPopUp({ onClickRegistration, onSubmit, ...props }: AuthPopUpProps) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormInputs>();

  const handleClickRegistration = () => {
    onClickRegistration();
  };

 

  const onSubmitData = async(data: FormInputs) => {
   const result = await axios.post(
    `${BASE_URL}${ReqRoutes.AUTH_LOGIN}`,
     data, 
     {
      withCredentials: true
     });
    if(result.status === StatusCodes.OK) {
      onSubmit();
    }
  };


  return (
    <PopUpSample {...props}>
      <WrapperAuth>
        <Modal $isError={!!errors.email || !!errors.password}>
          <ImgPopUp
            src='/assets/marussia_popup.png'
            width='156px'
            height='35px'
          ></ImgPopUp>
          <form onSubmit={handleSubmit(onSubmitData)}>
            <Label $isError={!!errors.email}>
              <Svg 
                $isError={!!errors.email}
                width='24'
                height='24'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M21 3C21.5523 3 22 3.44772 22 4V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V19H20V7.3L12 14.5L2 5.5V4C2 3.44772 2.44772 3 3 3H21ZM8 15V17H0V15H8ZM5 10V12H0V10H5ZM19.5659 5H4.43414L12 11.8093L19.5659 5Z'
                  fillOpacity='0.4'
                />
              </Svg>
              <Input
                {...register('email', {
                  required: {
                    value: true,
                    message: 'Введите email'
                  },
                  pattern: {
                    value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                    message: 'Адрес электронной почты должен содержать @'
                  }
                })}
                id='email'
                type='email'
                placeholder='Электронная почта'
              ></Input>
            </Label>
            {errors.email && (<PError>{errors.email.message}</PError>)}
            <Label $isError={!!errors.password}>
              <Svg
                $isError={!!errors.password}
                width='24'
                height='24'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M12.917 13C12.441 15.8377 9.973 18 7 18C3.68629 18 1 15.3137 1 12C1 8.68629 3.68629 6 7 6C9.973 6 12.441 8.16229 12.917 11H23V13H21V17H19V13H17V17H15V13H12.917ZM7 16C9.20914 16 11 14.2091 11 12C11 9.79086 9.20914 8 7 8C4.79086 8 3 9.79086 3 12C3 14.2091 4.79086 16 7 16Z'
                  fillOpacity='0.4'
                />
              </Svg>
              <Input
                {...register('password', {
                  required: {
                    value: true,
                    message: 'Введите пароль'
                  },
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d).{6,12}$/,
                    message: 'Введите пароль'
                  }
                })}
                type='password'
                id='password'
                placeholder='Пароль'
              ></Input>
            </Label>
            {errors.password && (<PError >{errors.password.message}</PError>)}
            <ButtonEl type ='submit'>Войти</ButtonEl>
            <ButtonSecond
              value={'Регистрация'}
              onClick={handleClickRegistration}
            />
          </form>
        </Modal>
      </WrapperAuth>
    </PopUpSample>
  );
}

export { AuthPopUp };