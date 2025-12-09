import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router';
import { routerConfig } from '../routes/router-config';
const router = createBrowserRouter(routerConfig);

function App () {
    return <RouterProvider router={router} /> 
}

export { App };


