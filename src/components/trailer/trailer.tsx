import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { TrailerLoading } from './trailer-loading';
import classNames from 'classnames';

const Wrapper = styled.div`
  position: absolute;
  z-index: 1000;
  padding: 160px 80px;
  width: 1440px;
  height: 1000px;
  background: rgba(10, 11, 11, 0.9);
`;

const Wr = styled.div`
  position: relative;
  margin: 0 auto;
  width: 1104px;
  height: 540px;
`;

const Preview = styled.div`
  position: relative;
  margin: 0 auto;
  border: 1px solid rgba(255, 255, 255, 0.5);
  width: 960px;
  height: 540px;
`;

const IFrame = styled.iframe`
  width: 960px;
  height: 540px;
`;
const Image = styled.img`
  position: absolute;
  top: -50%;
  transform: translateY(50%);
  width: 960px;
  height: 540px;
  object-fit: cover;
`;

const Close = styled.button`
  position: absolute;
  top: 0px;
  left: 100%;
  transform: translateX(-100%);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  width: 48px;
  height: 48px;
  background: #fff;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  border-radius: 40px;
  padding: 8px;
  width: 80px;
  height: 80px;
`;

const TitleWrapper = styled.div`
  position: absolute;
  top: 436px;
  left: 50%;
  transform: translateX(-50%);
  padding: 24px 40px;
  width: 920px;
  height: 80px;
  background: rgba(10, 11, 11, 0.5);
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 133%;
  color: #fff;
`;

type TrailerProps = {
  url: string;
  posterUrl: string;
  title: string;
  isActive: boolean;
  onClose: () => void;
};

function Trailer({ url, posterUrl, title, isActive, onClose }: TrailerProps) {
  const classTrailer = classNames({
    'trailer-active': isActive,
  'visually-hidden': !isActive

  });

  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const isLoading = false;

  const handleToggleVideo = () => {
    if(!isPlaying) {
      setIsPlaying(true);
      setIsPaused(false);
    } else if (isPlaying) {
      setIsPlaying(false);
      setIsPaused(true);
    }
  };
  
  return (
    <Wrapper className={classTrailer}>
      <Wr className='wrapper'>
        {isLoading ? (
          <TrailerLoading />
        ) : (
          <Preview
            className='preview'
            onClick={handleToggleVideo}
          >
            <IFrame
              src={url}
              title={title}
              allow='autoplay'
              allowFullScreen
            />
            {!isPlaying && (
              <>
                <Image src={posterUrl} />
                <TitleWrapper className='title-trailer'>
                  <Title className='title'>{title}</Title>
                </TitleWrapper>
                <Button>
                  {isPaused ? (
                    <svg
                      className='non-play '
                      width='20'
                      height='30'
                      viewBox='0 0 20 30'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M0 0H3.33333V30H0V0ZM16.6667 0H20V30H16.6667V0Z'
                        fill='black'
                      />
                    </svg>
                  ) : (
                    <svg
                      className='play'
                      width='40'
                      height='40'
                      viewBox='0 0 40 40'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M10 33.6595V6.34035C10 5.0313 11.4399 4.23322 12.55 4.92702L34.4053 18.5867C35.4498 19.2393 35.4498 20.7605 34.4053 21.4133L12.55 35.0728C11.4399 35.7667 10 34.9687 10 33.6595Z'
                        fill='black'
                      />
                    </svg>
                  )}
                </Button>
              </>
            )}
          </Preview>
        )}
        <Close onClick={onClose}>
          <svg
            width='19'
            height='19'
            viewBox='0 0 19 19'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M7.79293 9.20715L0 1.41421L1.41421 0L9.20713 7.79285L17 0L18.4142 1.41421L10.6213 9.20715L18.4142 17L17 18.4142L9.20713 10.6213L1.41421 18.4142L0 17L7.79293 9.20715Z'
              fill='black'
            />
          </svg>
        </Close>
      </Wr>
    </Wrapper>
  );
}

export { Trailer };
