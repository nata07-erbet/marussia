const VALUE_FOR_ACTION = 10;

const AppRoutes = {
    Main: '/',
    Genres: '/genres',
    Genre: '/genre',
    Film: '/film',
    Auth: '/auth'
} as const;

const ReqRoutes = {
    AUTH_LOGIN: '/auth/login',
    AUTH_LOGOUT: '/auth/logout',
    USER: '/user',
    PROFILE: '/profile',
    FAVORITES: '/favorites',
    MOVIE: '/movie'
} as const;

const NameSpace = {
    User: 'User',
    Auth: 'Auth',
    Movies: 'Movies',
    Favorites: 'Favorites',
    Movie: 'Movie',
    Search: 'Search',
    Genres: 'Genres'
}

export { VALUE_FOR_ACTION, AppRoutes, ReqRoutes, NameSpace };
