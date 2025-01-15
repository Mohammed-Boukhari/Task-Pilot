import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";

import { useTranslation } from "react-i18next";
import ThemeContext from "../context/ThemeContext";

import "./Header.css";
import "../theme.css";

const /* TODO: UI design to logic || components Header */ Header = () => {
    const [user] = useAuthState(auth);

    const { t, i18n } = useTranslation();
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [active, setActive] = useState(false);

    return (
      <div className="myheader">
        <header style={{ height: "70px" }} className="hide-when-mobile ali ">
          <h1>
            <Link to="/">mohamed.dev</Link>
          </h1>
          {/* Ln 133 */}

          {/* FIXME: change toggle theme Dheat mode and Dark mode */}
          <i
            onClick={() => {
              toggleTheme(theme === "Light" ? "Dark" : "Light");
            }}
            className="fa-solid fa-moon"
          ></i>
          <i
            onClick={() => {
              toggleTheme(theme === "Light" ? "Dark" : "Light");
            }}
            className="fa-solid fa-sun"
          ></i>

          <ul className="flex">
            <li className="main-list lang">
              <p style={{ cursor: "pointer" }}>{t("lang")}</p>
              <ul className="lang-box">
                <li
                  onClick={() => {
                    i18n.changeLanguage("ar");
                  }}
                  dir="rtl"
                >
                  <p>العربية</p>{" "}
                  {i18n.language === "ar" && (
                    <i className="fa-solid fa-check"></i>
                  )}
                </li>
                <li
                  onClick={() => {
                    i18n.changeLanguage("en");
                  }}
                >
                  <p>English</p>{" "}
                  {i18n.language === "en" && (
                    <i className="fa-solid fa-check"></i>
                  )}
                </li>
                <li
                  onClick={() => {
                    i18n.changeLanguage("fr");
                  }}
                >
                  <p>French</p>{" "}
                  {i18n.language === "fr" && (
                    <i className="fa-solid fa-check"></i>
                  )}
                </li>
              </ul>
            </li>

            {!user /* FIXME: if condition not sign-in to uesr */ && (
              <li className="main-list">
                <NavLink
                  onClick={() => {
                    setActive(false);
                  }}
                  className="main-link"
                  to="/signin"
                >
                  {t("Sign-in")}
                </NavLink>
              </li>
            )}

            {!user /* FIXME: if condition not sign-in to uesr */ && (
              <li className="main-list">
                <NavLink
                  onClick={() => {
                    setActive(false);
                  }}
                  className="main-link"
                  to="/signup"
                >
                  {t("sign-up")}
                </NavLink>
              </li>
            )}

            {user /* FIXME: if condition sign-in to uesr */ && (
              <li
                onClick={() => {
                  setActive(true);
                }}
                className="main-list"
              >
                <Link className={`main-link ${active ? "active" : ""}`} to="/">
                  {t("Home")}
                </Link>
              </li>
            )}

            {user /* FIXME: if condition sign-in to uesr */ && (
              <li className="main-list">
                <NavLink
                  onClick={() => {
                    setActive(false);
                  }}
                  className="main-link"
                  to="/about"
                >
                  {t("support")}
                </NavLink>
              </li>
            )}

            {user /* FIXME: if condition sign-in to uesr */ && (
              <li className="main-list">
                <NavLink
                  onClick={() => {
                    setActive(false);
                  }}
                  className="main-link"
                  to="/profile"
                >
                  {t("account")}
                </NavLink>
              </li>
            )}
            {user /* FIXME: if condition sign-in to uesr */ && (
              <li
                // TODO: function to sign-Out user || firebase to authentication
                onClick={() => {
                  signOut(auth)
                    .then(() => {
                      // ...
                    })
                    .catch(() => {
                      // ...
                    });
                }}
                className="main-list"
              >
                <button className="main-link signout">{t("signout")}</button>
              </li>
            )}
          </ul>
        </header>
      </div>
    );
  };

export default Header;

// Ln 25
// <button
//   onClick={() => {
//     toggleTheme(theme === "Light" ? "Dark" : "Light");
//   }}
//   className="theme-btn"
// >
//   {theme}
// </button>;
