import React from "react";
import { userApi } from '../services/services';
import { QueryStatus } from '@reduxjs/toolkit/query';

function MainPage () {
    const { data, error, status } = userApi.useFetchRandomMovieQuery();

    return(
        <>
            {status === QueryStatus.pending && <div>Loading...</div>}
            {status === QueryStatus.rejected && (
                <div>{error && 'status' in error ? `Error: ${error.status}` : 'Wrong'}</div>
            )}
            {status === QueryStatus.fulfilled && <div>{data && data.title}</div>}
        </>
    );
}

export { MainPage };