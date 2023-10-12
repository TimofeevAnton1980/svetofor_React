import React, {useEffect, useState} from "react";
import s from "./app.css";
import { useNavigate } from "react-router";

export const Green = ({green, red, yellow, green_active, setStatus = f => f}) => {
    const [miracle, setMiracle] = useState(0)
    const hist = useNavigate();

    useEffect(() => {
        green_active({backgroundColor: 'green'});
        if (miracle === 0) {
            setTimeout(() => {
                setMiracle(1);
            }, 7000);
        }
        if (miracle === 1) {
            const intervalId = setInterval(() => green_active((green) => !green ? {backgroundColor: 'green'} : null), 100);
            setTimeout(() => {
                clearInterval(intervalId);
                green_active(null);
                setStatus(1);
                hist('/red');
            }, 3000);
        }
        }, [miracle]
    )

    return(
        <>
            <div className={s.all} style={red}> </div>
            <div className={s.all} style={yellow}> </div>
            <div className={s.all} style={green}> </div>
        </>)
}