import React, { useState, useEffect } from "react";
import logo from "../images/migracode-logo.png";
import login from "../images/login.png";

function Header({ onHeaderClick, logIn, whichUserHeader }) {
  let username = { whichUserHeader };
  username = username.whichUserHeader;

  function zweistellig(s) {
    while (s.toString().length < 2) {
      s = "0" + s;
    }
    return s;
  }
  const [date, setDate] = useState(new Date());
  var today = new Date();
  var time =
    zweistellig(today.getHours()) +
    ":" +
    zweistellig(today.getMinutes()) +
    ":" +
    zweistellig(today.getSeconds());
  var hours = today.getHours();

  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });
  function tick() {
    setDate(new Date());
  }

  return (
    <div className="header">
      {logIn === 1 ? (
        <div className="greeting">
          Hello {username}, it is {time} and you have no appointments in your
          calendar today!
        </div>
      ) : (
        <>.</>
      )}

      {logIn === 1 ? (
        <img
          className="greeting"
          src={logo}
          alt="logo"
          onClick={onHeaderClick}
        />
      ) : (
        <img
          className="greeting"
          src={login}
          alt="logo"
          onClick={onHeaderClick}
        />
      )}
    </div>
  );
}
export default Header;
