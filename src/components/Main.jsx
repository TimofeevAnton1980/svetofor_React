import React, {useEffect} from "react";
import { useNavigate } from "react-router";

export const Main = ({setStatus = f => f}) => {
    const hist = useNavigate();

    useEffect(() => {
            hist('/green');
            setStatus(0);
        }, []
    )
    return(
    <> </>
    )
}