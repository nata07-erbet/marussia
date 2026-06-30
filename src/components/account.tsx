import React from 'react';
import styled from 'styled-components';

const WrapperAccount = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 40px;
  column-gap: 16px;
  margin-bottom: 64px;
`;

const Icon = styled.div`
  width: 60px;
`;

const IconName = styled.span`
  position: absolute;
  font-weight: 700;
  font-size: 24px;
  line-height: 133%;
  color: #fff;
  top: 50%;
  transform: translateY(-50%);
  left: 15px;
`;

const IconContainer = styled.div`
  position: relative;
  border-radius: 30px;
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.5);
`;

const IconLetter = styled.svg`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 20px;
`;

const AccountContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const AccountLabel = styled.div`
  display: flex;
  font-weight: 400;
  font-size: 18px;
  line-height: 133%;
  color: #fff;
`;

const AccountValue = styled.div`
  display: flex;
  font-weight: 700;
  font-size: 24px;
  line-height: 133%;
  color: #fff;
`;

const Button = styled.button`
  border-radius: 28px;
  border: 0;
  width: 218px;
  height: 56px;
  background: #67a5eb;
`;

const TextButton = styled.span`
  font-weight: 700;
  font-size: 18px;
  line-height: 133%;
  color: #fff;
`;

type AccountProps = {
  userName: string | undefined;
  userMail: string | undefined;
};

function Account({ userName, userMail }: AccountProps) {
  return (
    <>
      <WrapperAccount className='wrapper-account'>
        <Icon className='icon'>
          <IconContainer className='icon__container'>
            <IconLetter
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M21 3C21.5523 3 22 3.44772 22 4V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V19H20V7.3L12 14.5L2 5.5V4C2 3.44772 2.44772 3 3 3H21ZM8 15V17H0V15H8ZM5 10V12H0V10H5ZM19.5659 5H4.43414L12 11.8093L19.5659 5Z'
                fill='white'
              />
            </IconLetter>
          </IconContainer>
        </Icon>
        <AccountContent className='account__content'>
          <AccountLabel className='account__label'>Имя Фамилия</AccountLabel>
          <AccountValue className='account__value'>
            {userName}
          </AccountValue>
        </AccountContent>
        <Icon className='icon'>
          <IconContainer className='icon__container'>
            <IconName className='icon__name'>KK</IconName>
          </IconContainer>
        </Icon>
        <AccountContent className='account__content'>
          <AccountLabel className='account__label'>
            Электронная почта
          </AccountLabel>
          <AccountValue className='account__value'>
            {userMail}
          </AccountValue>
        </AccountContent>
      </WrapperAccount>
      <Button
        className='genre-films'
        type='button'
      >
        <TextButton>Выйти из аккаунта</TextButton>
      </Button>
    </>
  );
}

export { Account };
