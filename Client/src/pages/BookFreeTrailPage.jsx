import React from "react";
import NavBar from "../component/UI/NavReact";
import AyahOfTheDay from "../component/UI/AyahOfTheDay";
import MiniMainSec from "../component/UI/MiniMainSec";
import BookFreeTrailSec from "../component/FormComponents/BookFreeTrailSec"
import Footer from "../component/UI/Footer";


export default function LearnUrduPage() {
    return(
        <>
        <NavBar/>
        <AyahOfTheDay/>
        <MiniMainSec
                        headClass="learn-bg"
                        header="Book A Free Trail"
        />
        <BookFreeTrailSec/>
        <Footer/>
        </>
    )
}