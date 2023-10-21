import React from 'react';
import NavBar from "../component/UI/NavReact";
import AyahOfTheDay from "../component/UI/AyahOfTheDay";
import Profile from '../component/ProfileComponents/Profile';
import Footer from "../component/UI/Footer";

export default function ProfilePage() {
    return (
        <>
        <NavBar/>
        <AyahOfTheDay/>
        <Profile/>
        <Footer/>
        </>
    )
}
