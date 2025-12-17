import React from "react";

function Header() {
  return (
    <header className="page-header">
      <div className="page-header__ wrapper wrapper">
        <a className="page-header" />
        <nav className="page-header__nav header-navigation">
          <ul className="header-navigation__list nav-list">
            <li className="nav-list__item">
              <a className="nav-list__item-link" href="#">
                Главная
              </a>
            </li>
            <li className="nav-list__item">
              <a className="nav-list__item-link" href="#">
                Жанры
              </a>
            </li>
            <li className="nav-list__item">
              <a className="nav-list__item-link" href="#">
                <form
                  className="nav-list__item-search search"
                  action="#"
                  method="POST"
                >
                  <label className="search__label" htmlFor="search-input-id">
                    <input
                      className="search__input"
                      type="text"
                      name="search-input-name"
                      id="search-input-id"
                      placeholder="Поиск"
                    />
                    <button className="search__button" type="submit">
                      <span className="search__button-title visially-hidden">
                        Поиск
                      </span>
                    </button>
                  </label>
                </form>
              </a>
            </li>
            <li className="nav-list__item">
              <a className="nav-list__item-link" href="#">
                Войти
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export { Header };
