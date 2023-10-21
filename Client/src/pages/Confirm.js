import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";


function Confirm() {
  const navigate = useNavigate();
  let { id } = useParams();
  const activate = async () => {
    console.log(id)
    let res = await fetch("https://blue-cheerful-starfish.cyclic.app/auth/activate/" + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    // navigate('/') this will move the user to the homepage
  };
  useEffect(() => {
    activate();
  }, []);
  return (
      <>
        <div className="conformaion-container center">
          <h1>You just activated your account!!✨✨</h1>
          <p>Thank you for joining ArabicWave comunnity</p>
          <Link to="/">
            <p>Go to ArabicWave</p>
          </Link>
        </div>
      </>
  );
}

export default Confirm;