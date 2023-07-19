import React from "react";
import { useRoutes } from "react-router-dom";
import { Leyout } from "../../pages/Leyout";
import { Home } from "../../pages/Home";


export const MyRouter = React.memo(()=>{
    const routes = useRoutes([
        {
            path:"/",
            element:<Leyout/>,
            children:[
                {
                    path:'/',
                    element:<Home/>
                }
            ]
        },
        {
            path:"*",
            element:"404 erore"
        }
    ])
    return routes
})