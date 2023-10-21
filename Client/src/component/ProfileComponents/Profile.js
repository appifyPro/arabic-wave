import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { decodeToken } from "react-jwt";
import "./profile.css";
export default function Profile() {
  const [activeTab, setActiveTab] = useState("profile");
  const [messageOption, setMessageOption] = useState("");
  const [messageContent, setMessageContent] = useState("");
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setconfirmPassword] = useState(null);
  const [teacher, setTeacher] = useState(null);

  const logOut = () => {
    localStorage.removeItem("auth");
    window.location.href = "/";
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("auth");
    try {
      const response = await fetch(
        "https://blue-cheerful-starfish.cyclic.app/auth/changeprofile",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
          body: JSON.stringify({
            firstname: firstName,
            lastname: lastName,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
          }),
        }
      );
      console.log(response.status);
      if (response.status === 200) {
        // If the login is successful, redirect to the website with the desired route.
        const message = await response.json();
        console.log(message.token);
        localStorage.setItem("auth", message.token);
        window.location.reload();
      } else {
        // If the login is unsuccessful, display the error message.
        const message = await response.json();
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleOptionChange = (e) => {
    setMessageOption(e.target.value);
  };

  const handleContentChange = (e) => {
    setMessageContent(e.target.value);
  };

  const handleTeacher = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("auth");
    try {
      const response = await fetch(
        "https://blue-cheerful-starfish.cyclic.app/form/startcourse",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
          body: JSON.stringify({
            type: messageOption,
            message: messageContent,
          }),
        }
      );
      console.log(response.status);
      if (response.status === 200) {
        // If the login is successful, redirect to the website with the desired route.
        window.location.reload();
      } else {
        // If the login is unsuccessful, display the error message.
        const message = await response.json();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleAcceptTeahers = async () => {
    const token = localStorage.getItem("auth");
    try {
      const response = await fetch(
        "https://blue-cheerful-starfish.cyclic.app/request/getrequests",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
        }
      );
      console.log(response.status);
      if (response.status === 200) {
        const data = await response.json();
        console.log(data);
        if (data.length) {
          setTeacher(data);
        } else {
          setTeacher(null);
        }
      } else {
        // If the login is unsuccessful, display the error message.
        const message = await response.json();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const ActionRequestAccept = async (id, type) => {
    const token = localStorage.getItem("auth");
    try {
      const response = await fetch(
        "https://blue-cheerful-starfish.cyclic.app/request/acceptteacher",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
          body: JSON.stringify({ id: id, type: type }),
        }
      );
      console.log(response.status);
      if (response.status === 200) {
        const data = await response.json();
        console.log(data);
        if (data.length) {
          setTeacher(data);
        } else {
          setTeacher(null);
        }
      } else {
        // If the login is unsuccessful, display the error message.
        const message = await response.json();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const ActionRequestReject = async (id, type) => {
    const token = localStorage.getItem("auth");
    try {
      const response = await fetch(
        "https://blue-cheerful-starfish.cyclic.app/request/rejectrequest",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
          body: JSON.stringify({ id: id, type: type }),
        }
      );
      console.log(response.status);
      if (response.status === 200) {
        const data = await response.json();
        console.log(data);
        if (data.length) {
          setTeacher(data);
        } else {
          setTeacher(null);
        }
      } else {
        // If the login is unsuccessful, display the error message.
        const message = await response.json();
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("auth");
    if (token) {
      const userName = decodeToken(token).firstname;
      setFirstName(userName);
      setLastName(decodeToken(token).lastname);
      setPassword(decodeToken(token).password);
      setEmail(decodeToken(token).email);
      console.log(userName);
    }
  }, []);
  useEffect(() => {
    if (activeTab === "teachers") {
      handleAcceptTeahers();
    }
  }, [activeTab]);

  return (
    <>
      <section className="profile-bg center">
        <div className="list">
          <ul>
            <li>
              <Link to="/">Back to Home</Link>
            </li>
            <li
              onClick={() => {
                handleTabClick("profile");
              }}
            >
              Profile
            </li>
            <li
              onClick={() => {
                handleTabClick("teachers");
              }}
            >
              Teachers
            </li>
            <li
              onClick={() => {
                handleTabClick("messages");
              }}
            >
              Messages
            </li>
            <li onClick={() => logOut()} className="logout">
              Log out
            </li>
          </ul>
        </div>
        <div className="user-details">
          {activeTab === "profile" && (
            <div className="profile">
              <h1>Your Profile</h1>
              <p>
                Here you can change your profile details just as you want but
                becarfull so you don't forget your own details
              </p>
              <div className="form-container ">
                <form action="" onSubmit={handleSubmit}>
                  <div>
                    <div className="input-container">
                      <input
                        onChange={(event) => {
                          setFirstName(event.target.value);
                        }}
                        placeholder={firstName}
                        type="text"
                      />
                      <label className="transition">First name</label>
                    </div>
                    <div className="input-container">
                      <input
                        onChange={(event) => {
                          setLastName(event.target.value);
                        }}
                        placeholder={lastName}
                        type="text"
                      />
                      <label className="transition">Last name</label>
                    </div>
                    <div className="input-container">
                      <input
                        onChange={(event) => {
                          setPassword(event.target.value);
                        }}
                        placeholder="*********"
                        type="password"
                      />
                      <label className="transition">Password</label>
                    </div>
                    <div className="input-container">
                      <input
                        onChange={(event) => {
                          setconfirmPassword(event.target.value);
                        }}
                        placeholder="*********"
                        type="password"
                      />
                      <label className="transition">Confirm password</label>
                    </div>
                  </div>
                  <button className="btn center">Change</button>
                </form>
              </div>
            </div>
          )}
          {activeTab === "messages" && (
            <div className="teacher-msg">
              <form className="center" onSubmit={handleTeacher}>
                <div className=" input-container center">
                  <div className="center select-container">
                    <label className="transition">Select Course</label>
                    <select value={messageOption} onChange={handleOptionChange}>
                      <option value="">Courses</option>
                      <option value="option1">Tajweed Ul-Quran</option>
                      <option value="option2">Memorization Ul-Quran</option>
                      <option value="option3">Learn Urdu</option>
                      <option value="option4">Learn Arabic</option>
                    </select>
                  </div>
                  <p className="error-msg" id="first-name">
                    Please Your Course
                  </p>
                </div>
                <div className="input-container center">
                  <div className="center teacher-txt">
                    <label className="transition">
                      Enter your Message and Zoom Link
                    </label>
                    <textarea
                      rows="4"
                      cols="50"
                      name="comment"
                      form="usrform"
                      value={messageContent}
                      onChange={handleContentChange}
                    >
                      Enter text here...
                    </textarea>
                  </div>
                </div>
                <button className="btn center" type="submit">
                  Submit
                </button>
              </form>
            </div>
          )}
          {activeTab === "teachers" && teacher && (
            <>
              <header className="center">
                <h1>Users want to be a teacher</h1>
              </header>
              <div className="teacher-container">
                <ul>
                  <li>
                    <h1>{teacher[0].user.firstname}</h1>
                    <a href={teacher[0].resume}>His/Her Resume</a>
                    <div className="btns">
                      <button
                        onClick={() =>
                          ActionRequestAccept(
                            teacher[0].user._id,
                            teacher[0].type
                          )
                        }
                        className="accept btn center"
                      >
                        <img
                          src="/img/icons8-select-checkmark-symbol-to-choose-true-answer-96.png"
                          alt=""
                        />
                      </button>
                      <button
                        onClick={() =>
                          ActionRequestReject(
                            teacher[0].user._id,
                            teacher[0].type
                          )
                        }
                        className="decline btn center"
                      >
                        <img src="/img/x-solid.svg" alt="" />
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
