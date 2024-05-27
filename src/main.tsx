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
import Auth from "./Auth.tsx";
import Nickname from "./Nickname.tsx";
import Character from "./Character.tsx";
import SetProfile from "./SetProfile.tsx";
import Login from "./Login.tsx";


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
    {
        path: "/register",
        element: <Login/>,
    },
    {
        path: "/setNickname",
        element: <Nickname/>,
    },
    {
        path: "/setCharacter",
        element: <Character/>,
    },
    {
        path: "/setProfile",
        element: <SetProfile/>,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
