import React from "react";
import { SamplePage, SamplePageProps } from'./sample-page';
import { GenreFilmsList } from '../components/genge-films-list';
import styled from "styled-components";

type  GenreFilmsPageProps = SamplePageProps & {};

const TitleOfGenre = styled.h2`
  font-weight: 700;
  font-size: 48px;
  line-height: 117%;
  color: #fff;
`;

function GenreFilmsPage({...props}: GenreFilmsPageProps) {
  return (
    <SamplePage {...props}>
      <section className="genre-films">
        <TitleOfGenre className="genre-films__title">Заголовок взять из стора</TitleOfGenre>
        <GenreFilmsList/>
        <div className="genre-films-list">

        </div>
      </section>
    </SamplePage>
  );
}

export { GenreFilmsPage };
