import React, { useState } from 'react';
import { PopUpSample, PopUpSampleProps } from './pop-up-sample';
import styled from 'styled-components';
import { ButtonFirst } from '../button-first';
import { ButtonSecond } from '../button-second';


const Modal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  border-radius: 24px;
  padding: 64px 40px;
  width: 420px;
  height: 455px;
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

const Label = styled.label`
  display: flex;
  gap: 12px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 8px;
  padding: 16px;
  width: 340px;
  height: 56px;

  &:first-of-type {
    margin-bottom: 16px;
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
type AuthPopUpProps = PopUpSampleProps & {
  onClickEnter: () => void;
  onClickRegistration: () => void;
};

function AuthPopUp({ onClickEnter, onClickRegistration, ...props }: AuthPopUpProps) {
  const [ emailInput, setEmailInput ] = useState('');
  const [ passwordInput, setPasswordInput ] = useState('');

  const handleClickEnter = () => {
    onClickEnter();
  };

  const handleClickRegistration = () => {
    onClickRegistration();
  };



  const handleChangeEmail = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setEmailInput(evt.target.value);
  };

  const handleChangePassword = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setEmailInput(evt.target.value);
  };

  return (
    <PopUpSample {...props}>
      <WrapperAuth>
        <Modal>
          <ImgPopUp
            src='/assets/marussia_popup.png'
            width='156px'
            height='35px'
          ></ImgPopUp>
          <Label>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M21 3C21.5523 3 22 3.44772 22 4V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V19H20V7.3L12 14.5L2 5.5V4C2 3.44772 2.44772 3 3 3H21ZM8 15V17H0V15H8ZM5 10V12H0V10H5ZM19.5659 5H4.43414L12 11.8093L19.5659 5Z'
                fill='black'
                fillOpacity='0.4'
              />
            </svg>
            <Input
              type='text'
              name='email'
              id='email'
              value={emailInput}
              placeholder='Электронная почта'
              onChange={handleChangeEmail}
            ></Input>
          </Label>
          <Label>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M12.917 13C12.441 15.8377 9.973 18 7 18C3.68629 18 1 15.3137 1 12C1 8.68629 3.68629 6 7 6C9.973 6 12.441 8.16229 12.917 11H23V13H21V17H19V13H17V17H15V13H12.917ZM7 16C9.20914 16 11 14.2091 11 12C11 9.79086 9.20914 8 7 8C4.79086 8 3 9.79086 3 12C3 14.2091 4.79086 16 7 16Z'
                fill='black'
                fillOpacity='0.4'
              />
            </svg>
            <Input
              type='text'
              name='password'
              id='password'
              value={passwordInput}
              placeholder='Пароль'
              onChange={handleChangePassword}
            ></Input>
          </Label>
          <ButtonFirst
            value={'Войти'}
            onClick={handleClickEnter}
          />
          <ButtonSecond 
            value={'Регистрация'} 
            onClick={handleClickRegistration}
          />
        </Modal>
      </WrapperAuth>
    </PopUpSample>
  );
}

export { AuthPopUp };
