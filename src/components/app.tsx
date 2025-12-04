import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routerConfig } from '../routes/router-config';

const router = createBrowserRouter(routerConfig);

function App () {
    return (
        <RouterProvider router={router} fallbackElement={<div>Loading...</div>}/>
    );   
}

export { App };


// РАБОТАЕТ
// function App () {
//     return (
//         <p>!!!!</p>
//     );   
// }

// export { App };