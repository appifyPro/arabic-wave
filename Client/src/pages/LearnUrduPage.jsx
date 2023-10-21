import React from "react";
import NavBar from "../component/UI/NavReact";
import AyahOfTheDay from "../component/UI/AyahOfTheDay";
import MiniMainSec from "../component/UI/MiniMainSec";
import LearnUrduSec from "../component/LearnComponents/LearnUrdu";
import Footer from "../component/UI/Footer";
import WhatsAppBtn from "../component/UI/WhatsAppBtn";


export default function LearnUrduPage() {
    return(
        <>
        <NavBar/>
        <AyahOfTheDay/>
        <WhatsAppBtn/>
        <MiniMainSec
                        headClass="learn-bg"
                        header="Learn Urdu"
                        p="8 Years to NO age bar"
        />
        <LearnUrduSec/>
        <Footer/>
        </>
    )
}