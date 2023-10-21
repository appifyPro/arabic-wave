import React from "react";
import NavBar from "../component/UI/NavReact";
import AyahOfTheDay from "../component/UI/AyahOfTheDay";
import MiniMainSec from "../component/UI/MiniMainSec";
import TermsSec from "../component/PolicyComponents/TermsSec";
import Footer from "../component/UI/Footer";


export default function PrivacyPage() {
    return(
        <>
        <NavBar/>
        <AyahOfTheDay/>
        <MiniMainSec
            headClass="policy-bg"
            header="Terms and Conditions"
            p="At Arabic, we are passionate about customer satisfaction"
        />
        <TermsSec/>
        <Footer/>
        </>
    )
}