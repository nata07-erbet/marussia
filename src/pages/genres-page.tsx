import React from 'react';
import { SamplePage } from './sample-page';
import type { SamplePageProps } from './sample-page';
import styled from 'styled-components';
import { GenresList } from '../components/genres-list';
import { Header } from '../components/header';

const Wrapper = styled.section`
  
`;
const Title = styled.h1`
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 48px;
  line-height: 117%;
  color: #fff;
`;

const FilmsWrapper = styled.div`
  margin-top: 64px;
`;

type GenresProps = SamplePageProps & {};

function Genres({ ...props }: GenresProps) {
  
  return (
    <SamplePage {...props}>
      <Header isUserPage={false} username={''} isActiveIndex={false} />
      <Wrapper className='top-10'>
        <Title>Жанры фильмов</Title>
        <FilmsWrapper className='top-10__wrapper'>
          <GenresList/>
        </FilmsWrapper>
      </Wrapper>
    </SamplePage>
  );
}

export { Genres };
