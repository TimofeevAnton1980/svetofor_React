import React, {useState} from "react";
import s from "./app.css";
import {Route, Routes} from "react-router";
import {BrowserRouter} from "react-router-dom";
import {Green} from "./Green.jsx";
import {Red} from "./Red.jsx";
import {Yellow} from "./Yellow.jsx";
import {Main} from "./Main.jsx";

function  App() {
    const [red, red_active] = useState(null );
    const [green, green_active] = useState(null);
    const [yellow, yellow_active] = useState(null);
    const [status, setStatus] = useState(0);

    return (
        <main className={s.main}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main green = {green} green_active = {green_active} setStatus = {setStatus}/>} />
                <Route path="/green" element={(status === 0) ? <Green green = {green} red = {red} yellow = {yellow} green_active = {green_active} setStatus = {setStatus} /> : null} />
                <Route path="/red" element={(status === 1) ? <Red green = {green} red = {red} yellow = {yellow} red_active = {red_active} setStatus = {setStatus} /> : null} />
                <Route path="/:id" element={(status === 2) ? <Yellow green = {green} red = {red} yellow = {yellow} yellow_active = {yellow_active} setStatus = {setStatus} /> : null} />
            </Routes>
        </BrowserRouter>
        </main>
    )
}
export default App;