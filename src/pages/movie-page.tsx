import React from "react";
import { QueryStatus } from "@reduxjs/toolkit/query";
import {
  useFetchMoviesQuery,
  useFetchMoviesTopQuery,
  useFetchMovieByIdQuery,
  useFetchMoviesGenreQuery,
  useFetchMoviesRandomQuery,
} from "../services/movie-api";

function MoviePage() {
  const { data, status, error } = useFetchMovieByIdQuery(2);

  return (
    <>
      {status === QueryStatus.pending && <div>Loading...</div>}
      {status === QueryStatus.rejected && (
        <div>
          {error && "status" in error ? `Error: ${error.status}` : "Wrong"}
        </div>
      )}
      {status === QueryStatus.fulfilled && <div>{data && data.title}</div>}
    </>
  );
}

export { MoviePage };
