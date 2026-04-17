import React, { PropsWithChildren, ReactNode, useEffect, useState } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

const PopUpWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 17%;
  width: 100%;
  height: 100%;
  width: 1440px;
  height: 997px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 271px 438px
`;
const ButtonClose = styled.button`
    position: absolute;
    top:270px;
    left: 66%;
    border-radius: 24px;
    width: 48px;
    height: 48px;   
    background: #fff;
`;
const ContentPopUp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

type PopUpSampleProps  = PropsWithChildren<{
  isActive: boolean;
  onClose: () => void;
}>;

function PopUpSample({ children, onClose, isActive }: PopUpSampleProps) {
 
  const classPopUpSample = classNames({
    'pop-up-sample': true,
    'visually-hidden': !isActive
  });

  const handleCloseEsc = (evt: KeyboardEvent) => {
    if(evt.key === 'Escape') {
      onClose();
    }
  };

  const handleClosePopUp = () => {
    onClose();
  };

  useEffect(() => {
    document.addEventListener('keydown',handleCloseEsc);
    return () =>{
      document.removeEventListener('keydown',handleCloseEsc);
    }
  });


    return (
        <PopUpWrapper className={classPopUpSample}>
        <ContentPopUp className='pop-up-sample__content'>
            {children}
        </ContentPopUp>
        <ButtonClose 
          className='pop-up-sample__button-close'
          onClick={handleClosePopUp}
          >
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z'
              fill='black'
            />
          </svg>
        </ButtonClose>
      </PopUpWrapper>
    );
 
}

export  {type PopUpSampleProps,  PopUpSample };
