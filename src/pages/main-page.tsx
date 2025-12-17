import React from "react";

function MainPage() {
  return (
    <main className="page-main">
      <h1 className="page-main__title">Главная страница</h1>
      <div className="page-main__wrapper wrapper">
        <section className="film-random">
          <div className="film-random__content">
            <div className="film-random__params">
              <ul className="film-random__list list">
                <li className="list__item">7,5</li>
                <li className="list__item">1979</li>
                <li className="list__item">детектив</li>
                <li className="list__item">1 ч 7 мин</li>
              </ul>
            </div>
            <div className="film-random__title">
              Шерлок Холмс и доктор Ватсон: Знакомство
            </div>
            <div className="film-random__description">
              Увлекательные приключения самого известного сыщика всех времен
            </div>
            <div className="film-random__button button-action">
              <button className="button-action__item button-action__item--modal-trailer">
                Трейлер
              </button>
              <a
                className="button-action__item button-action__item--about"
                href="#"
              >
                О фильме
              </a>
              <button className="button-action__item button-action__item--favorites" />
              <button className="button-action__item button-action__item--about" />
            </div>
          </div>
          <div className="film-random__image random-picture">
            <img className="random-picture__img" />
          </div>
        </section>
        <section className="top-10">
          <div className="top-10__wrapper">
            <ul className="top-10__list">
              <li className="top-10__item card">
                <img className="card__img" />
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}

export { MainPage };
