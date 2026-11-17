import React, {
  PropsWithChildren,
  ReactNode,
  useEffect,
  useState
} from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

const PopUpWrapper = styled.div`
  position: fixed;
  left: 40px;
  top: 0;
  height: 100%;
  width: 1440px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 271px 438px;
`;

const PopUpSampleEl = styled.div`

`
;

const ContentPopUp = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ButtonClose = styled.button`
  position: absolute;
  top: 0%;
  left: 105%;
  border-radius: 24px;
  width: 48px;
  height: 48px;
  background: #fff;
`;

type PopUpSampleProps = PropsWithChildren<{
  isActive: boolean;
  onClose: () => void;
}>;

function PopUpSample({ children, onClose, isActive=true }: PopUpSampleProps) {
  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  });

  const classPopUpSample = classNames({
    'pop-up-sample': true,
    'visually-hidden': !isActive
  });

  const handleCloseEsc = (evt: KeyboardEvent) => {
    if (evt.key === 'Escape') {
      onClose();
    }
  };

  const handleClosePopUp = () => {
    onClose();
  };

  useEffect(() => {
    document.addEventListener('keydown', handleCloseEsc);
    return () => {
      document.removeEventListener('keydown', handleCloseEsc);
    };
  });

  return (
    <PopUpWrapper className={classPopUpSample}>
      <PopUpSampleEl>
        <ContentPopUp className='pop-up-sample__content'>
          {children}
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
        </ContentPopUp>
      </PopUpSampleEl>
    </PopUpWrapper>
  );
}

export { type PopUpSampleProps, PopUpSample };
