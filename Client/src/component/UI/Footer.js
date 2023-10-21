import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer center">
      <div className="logo-social center arab-gap">
        <img src="/pics/AR-icon.webp" alt="" />
        <p>
          Best online Quran and Arabic learning Academy. Be the part of this
          path of wisdom happiness.
        </p>
        <ul className="socail-links center">
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/arabic-wave-academy/"
            >
              <img src="/pics/linkedin.png" alt="" />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://wa.link/xo8cx6">
              <img src="/pics/whatsapp.png" alt="" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.facebook.com/Arabicwaveacademy"
            >
              <img src="/pics/facebook.png" alt="" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://instagram.com/arabicwave_academy?igshid=YmMyMTA2M2Y="
            >
              <img src="/pics/instagram.png" alt="" />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.youtube.com/@arabicwave7630">
              <img src="/pics/Youtube_logo.png" alt="" />
            </a>
          </li>
        </ul>
      </div>
      <div className="logo-social link-pages center">
        <h3>Useful Links</h3>
        <ul className="page-links">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/curriculum">Curriculum</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/blog">Blogs</Link>
          </li>
          <li>
            <Link to="/our-featured">Features</Link>
          </li>
          <li>
            <Link to="/joinasteacher">Career</Link>
          </li>
        </ul>
      </div>
      <div className="logo-social link-pages center">
        <h3>Policies</h3>
        <ul className="page-links">
          <li>
            <Link to="/privacy">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/refund">Refund Policy</Link>
          </li>
          <li>
            <Link to="/terms">Terms and Conditions</Link>
          </li>
          <li>
            <Link to="/faq">FAQs</Link>
          </li>
          <li>
            <Link>Downloads</Link>
          </li>
          <li>
            <button
              className="btn"
              style={{
                marginTop: "20px",
                backgroundColor: "orange",
                color: "white",
                height: "2em",
                padding: "0em 1em",
                margin: "0px",
                fontWeight: "bold",
                fontSize: "18px",
              }}
              onClick={() =>
                (window.location.href =
                  "https://donate.stripe.com/28o9CocKN5Rcb0414k")
              }
            >
              Donate Now
            </button>
          </li>
        </ul>
      </div>
      <div className="logo-social link-pages center">
        <h3>Contact Us</h3>
        <ul className="page-links">
          <li>India,US,Canada,UK,UAE,KSA</li>
          <li>care@arabicwave.com</li>
          <li>India: +91 99 49 17 44 18 </li>
          <li>India: +91 63 04 80 96 83</li>
          <li>USA: (701) 419-7224</li>
          <li>UAE: +971 56 304 1780</li>
        </ul>
      </div>
    </footer>
  );
}
