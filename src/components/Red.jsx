import React, {useEffect, useState} from "react";
import s from "./app.css";
import { useNavigate } from "react-router";

export const Red = ({green, red, yellow, red_active, setStatus = f => f}) => {
    const [miracle, setMiracle] = useState(0)
    const hist = useNavigate();

    useEffect(() => {
        red_active({backgroundColor: 'red'});
        if (miracle === 0) {
            setTimeout(() => {
                setMiracle(1);
            }, 7000);
        }
        if (miracle === 1) {
                    const intervalId = setInterval(() => red_active((red) => !red ? {backgroundColor: 'red'} : null), 100);
                    setTimeout(() => {
                        clearInterval(intervalId);
                        red_active(null);
                        setStatus(2);
                        hist('/yellow');
                    }, 3000);
        }
        },[miracle])
    return(
        <>
            <div className={s.all} style={red}> </div>
            <div className={s.all} style={yellow}> </div>
            <div className={s.all} style={green}> </div>
        </>)
}