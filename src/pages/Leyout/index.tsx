import React from "react";
import "./style.scss"
import {Outlet} from "react-router-dom"
import { Menu } from "../../components/Menu";

export const Leyout = React.memo(()=>{
    return (
        <div className="">
            <Menu/>
            <Outlet/>
        </div>
    )
})