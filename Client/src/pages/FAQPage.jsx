import React from "react";
import NavBar from "../component/UI/NavReact";
import AyahOfTheDay from "../component/UI/AyahOfTheDay";
import MiniMainSec from "../component/UI/MiniMainSec";
import FAQSec from "../component/PolicyComponents/FAQSec";
import Footer from "../component/UI/Footer";
import WhatsAppBtn from "../component/UI/WhatsAppBtn";


export default function PrivacyPage() {
    return(
        <>
        <NavBar/>
        <AyahOfTheDay/>
        <WhatsAppBtn/>
        <MiniMainSec
            headClass="policy-bg"
            header="Frequently Asked Questions"
        />
        <FAQSec/>
        <Footer/>
        </>
    )
}