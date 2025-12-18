import React from 'react';
import { SamplePage, SamplePageProps } from './sample-page';
import styled from 'styled-components';

const PageMain = styled.main`
  display: block;
  width: 1440px;
  height: 680px;
  margin-top: 32px;
`;

const FilmWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr)
`;

const FilmContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 356px;
  margin-top: 74px;
  gap: 16px;
`;

const List = styled.ul`
  display: flex;
  flex-direction: row;
  align-content: center;
  gap:16px;
  font-weight: 400;
  font-size: 18px;
  line-height: 133%;
  color: rgba(255, 255, 255, 0.7);
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 48px;
  line-height: 117%;
  color: #fff;
  margin: 0;
`;

const Description = styled.p`
  font-weight: 400;
  font-size: 24px;
  line-height: 133%;
  color: rgba(255, 255, 255, 0.7);
  margin: 0
`;
type MainPageProps = SamplePageProps & {};

function MainPage({ ...props }: MainPageProps) {
  return (
    <SamplePage {...props}>
      <PageMain className='page-main'>
        <h1 className='page-main__title visually-hidden'>Главная страница</h1>
        <div className='page-main__wrapper wrapper'>
          <section className='film-random'>
            <FilmWrapper className='film-random__wrapper'>
              <FilmContent className='film-random__content'>
                <div className='film-random__params'>
                  <List className='film-random__list list list-reset'>
                    <li className='list__item'>7,5</li>
                    <li className='list__item'>1979</li>
                    <li className='list__item'>детектив</li>
                    <li className='list__item'>1 ч 7 мин</li>
                  </List>
                </div>
                <Title className='film-random__title'>
                  Шерлок Холмс и доктор Ватсон: Знакомство
                </Title>
                <Description className='film-random__description'>
                  Увлекательные приключения самого известного сыщика всех времен
                </Description>
                <div className='film-random__button button-action'>
                  <button className='button-action__item button-action__item--modal-trailer'>
                    Трейлер
                  </button>
                  <a
                    className='button-action__item button-action__item--about'
                    href='#'
                  >
                    О фильме
                  </a>
                  <button className='button-action__item button-action__item--favorites' />
                  <button className='button-action__item button-action__item--about' />
                </div>
              </FilmContent>
              <div className='film-random__image random-picture'>
                <img className='random-picture__img'  src='/assets/image.png'/>
              </div>
            </FilmWrapper>
          </section>

          <section className='top-10'>
            <div className='top-10__wrapper'>
              <ul className='top-10__list'>
                <li className='top-10__item card'>
                  <img className='card__img' />
                </li>
              </ul>
            </div>
          </section>
        </div>
      </PageMain>
    </SamplePage>
  );
}

export { MainPage };
