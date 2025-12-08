type IFavorite = string;
    
type IUser = {
    name: string;        
    surname: string;     
    email: string;       
    favorites: IFavorite[]; 
};

type IAuthInfo = {
    email: string;
    password: string;
};

type ISuccessfulResult = {
    result: boolean;
};

type IError = {
    error: string;
};

type IRegisterData = {
    email: string;
    password: string;
    name?: string;
    surname?: string;
};

type IMovie = {
    id: number;
    title: string;
    originalTitle: string;
    language: string;
    releaseYear: number;
    releaseDate: string;
    genres: string[]; 
    plot: string;
    runtime: number; 
    budget: string;
    revenue: string;
    homepage: string;
    status: string;
    posterUrl: string;
    backdropUrl: string;
    trailerUrl: string;
    trailerYoutubeId: string;
    tmdbRating: number; 
    searchL: string;
    keywords: string[];
    countriesOfOrigin: string[];
    languages: string[];
    cast: string[];
    director: string;
    production: string;
    awardsSummary: string;
  };
  

  type IApiResponse = {
    code: number;
    type: string;
    message: string;
  };
  
  type IFavoritesBody = {
    id: string;
  };

export type  { 
    IFavorite, 
    IUser,
    IAuthInfo, 
    ISuccessfulResult, 
    IError,  
    IRegisterData, 
    IMovie, 
    IApiResponse, 
    IFavoritesBody
};