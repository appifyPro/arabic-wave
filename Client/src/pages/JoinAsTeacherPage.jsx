import React from "react";
import NavBar from "../component/UI/NavReact";
import AyahOfTheDay from "../component/UI/AyahOfTheDay";
import MiniMainSec from "../component/UI/MiniMainSec";
import JoinAsTeacherSec from "../component/FormComponents/JoinAsTeacherSec"
import Footer from "../component/UI/Footer";


export default function LearnUrduPage() {
    return(
        <>
        <NavBar/>
        <AyahOfTheDay/>
        <MiniMainSec
                        headClass="learn-bg"
                        header="Join As A Teacher"
        />
        <JoinAsTeacherSec/>
        <Footer/>
        </>
    )
}