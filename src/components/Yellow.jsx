import React, {useEffect, useState} from "react";
import s from "./app.css";
import { useNavigate , useParams } from "react-router";

export const Yellow = ({green, red, yellow, yellow_active, setStatus = f => f}) => {
    const hist = useNavigate();
    const params = useParams();
    const current = params.id;
    // console.log(current);

    useEffect(() => {
            yellow_active({backgroundColor: 'yellow'} );
            setTimeout(() => {
                yellow_active(null);
                setStatus(0);
                hist('/');
            }, 5000);
        }, []
    )


    return(
        <>
            <div className={s.all} style={red}> </div>
            <div className={s.all} style={yellow}> </div>
            <div className={s.all} style={green}> </div>
        </>)
}