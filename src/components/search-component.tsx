import React from "react";
import styled from "styled-components";
import { IMovie } from '../types/types';

const Item = styled.li`
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 6px;
    padding: 20px 8px;
    width: 543px;
    height: 92px;
    `;


const ItemWrapper = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 16px;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const About = styled.div`
    display: flex;
    gap: 12px;
    font-weight: 400;
    font-size: 14px;
    line-height: 143%;
    color: rgba(255, 255, 255, 0.7);
    `;

const Title = styled.div`
    font-weight: 700;
    font-size: 18px;
    line-height: 133%;
    color: #fff;
`;

type SearchComponentProps = {
    film: IMovie;
}
function SearchComponent ({ film }: SearchComponentProps) {
    return(
        <Item className="search-item">
            <ItemWrapper className="search-item__wrapper">
                <img className="search-item__img" src={film.backdropUrl} width="42px" height="50px"/>
                <Content className="search-item__content">
                    <About className="search-item__content-about about">
                        <div className="about__rating">{film.tmdbRating}</div>
                        <div className="about__year">{film.relaseYear || film.releaseYear}</div>
                        <div className="about__genre">{film.genres}</div>
                        <div className="about__timing">{film.runtime}</div>
                    </About>
                    <Title className="search-item__content-title">{film.title}</Title>
                </Content>
            </ItemWrapper>
        </Item>
    );
};

export { SearchComponent };