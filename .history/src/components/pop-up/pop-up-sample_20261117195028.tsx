import {
  PropsWithChildren,
  useEffect,
  ReactNode
} from 'react';
import { createPortal } from 'react-dom';
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
    <Portal>

    </Portal>
  
  );
}

const Portal = ( {children }: { children : ReactNode}) => createPortal(children, document.body);

export { type PopUpSampleProps, PopUpSample };
