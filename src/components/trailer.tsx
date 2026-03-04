import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
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
  padding: 0px 72px;
  border: 1 px solid red;
`;

const Preview = styled.div`
  margin: 0 auto;
  border: 1px solid rgba(255, 255, 255, 0.5);
  width: 960px;
  height: 540px;
`;

const Img = styled.img`
width: 100%;
height: 100%;
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

const Play = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
  margin-top: 436px;
  margin: 436px 20px 24px 20px;
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
  posterUrl: string;
  title: string;
};

function Trailer({ posterUrl, title }: TrailerProps) {
  return (
    <Wrapper>
      <Wr className='wrapper'>
        <Preview className='preview'>
          <Img
            src={posterUrl}
            width='960px'
            height='540px'
          />
          <Close>
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
          <Play>
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
            <svg
              className='non-play visually-hidden'
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
          </Play>
          <TitleWrapper>
            <Title>{title}</Title>
          </TitleWrapper>
        </Preview>
      </Wr>
    </Wrapper>
  );
}

export { Trailer };
