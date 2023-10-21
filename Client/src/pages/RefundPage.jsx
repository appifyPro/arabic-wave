import React from "react";
import NavBar from "../component/UI/NavReact";
import AyahOfTheDay from "../component/UI/AyahOfTheDay";
import MiniMainSec from "../component/UI/MiniMainSec";
import RefundSec from "../component/PolicyComponents/RefundSec";
import Footer from "../component/UI/Footer";

export default function PrivacyPage() {
  return (
    <>
      <NavBar />
      <AyahOfTheDay />
      <MiniMainSec
        headClass="policy-bg"
        header="Cancellation & Refund policy"
        p="At Arabic, we are passionate about customer satisfaction"
      />
      <RefundSec />
      <Footer />
    </>
  );
}
