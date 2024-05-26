import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import CalendarScreen from "./CalendarScreen.tsx";
import Profile from "./Profile.tsx";
import Home from "./Home.tsx";

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
            {
                path: "home",
                element: <Home/>,
            },
            {
                path: "calendar/*",
                element: <CalendarScreen/>,
            },
            {
                path: "profile",
                element: <Profile/>,
            }
        ]
    },

]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
