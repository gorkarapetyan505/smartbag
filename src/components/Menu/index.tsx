import React, { useEffect, useState } from "react";
import "./style.scss"
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import {Link} from "react-router-dom"

export const Menu = React.memo(()=>{
    const [bool, setBool] = useState<Boolean>(false)
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setBool(user ? true : false)
        })
    }, [])
    return (
        <div className="menu">
            gyhj
            <nav>
                {
                    bool ?
                    <ul>
                        <li><Link to={"/order"}>Order</Link></li>
                    </ul>
                    :
                    <></>
                }
            </nav>
        </div>
    )
})