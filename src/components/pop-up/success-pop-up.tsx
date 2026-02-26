import React from 'react';
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

const Title = styled.p`
    font-weight: 700;
    font-size: 24px;
    line-height: 133%;
    color: #000;
`;

const Description = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 133%;
    text-align: center;
    color: #000;
`;

type AuthPopUpProps = PopUpSampleProps & {
    onClickEnter: () => void;
};

function SuccessPopUp({ onClickEnter, ...props }: AuthPopUpProps) {

  const handlePostData = () => {
    onClickEnter();
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
          <Title>Регистрация завершена</Title>
          <Description>Используйте вашу электронную почту для входа</Description>
          <ButtonFirst
            value={'Войти'}
            onSubmit={handlePostData}
          />
        </Modal>
      </WrapperAuth>
    </PopUpSample>
  );
}

export { SuccessPopUp };
