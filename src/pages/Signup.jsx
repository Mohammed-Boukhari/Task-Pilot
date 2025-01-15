import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

import {
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../firebase/config";

import { useAuthState } from "react-firebase-hooks/auth";

import Header from "../components/header";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import Erroe404 from "../shared/erroe404";
import ReactLoading from "react-loading";

const Signup /* TODO: UI design to logic \\ components Sign-up */ = () => {
  const [user, loading, error] = useAuthState(auth);

  const { i18n } = useTranslation();
  const navigate = useNavigate();

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [firebaseError, setfirebaseError] = useState("");
  const [userName, setuserName] = useState("");

  const [hasError, sethasError] = useState(false);
  const [showLoading, setshowLoading] = useState(false);

  useEffect(() => {
    if (user) {
      if (user.emailVerified) {
        navigate("/");
      }
    }
  });

  // TODO: function to Sign Up user || firebase to authentication for user Sign Up
  const signUpBTN = async (eo) => {
    eo.preventDefault();
    setshowLoading(true);

    // FIXME: function to Create User with Email and Password || firebase to authentication
    await createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        // console.log(user);
        // FIXME: function to send email verification to user || firebase to authentication
        sendEmailVerification(auth.currentUser).then(() => {
          // console.log("Email verification sent!");
        });

        // FIXME: function to update Profile to user || firebase to authentication
        updateProfile(auth.currentUser, {
          displayName: userName,
        })
          .then(() => {
            navigate("/");
          })
          .catch(() => {
            // console.log(error.code);
            //
          });

        //
      })

      // FIXME: switch conditions to error codes
      .catch((error) => {
        const errorCode = error.code;

        // console.log(errorCode);

        sethasError(true);

        switch (errorCode) {
          case "auth/invalid-email":
            setfirebaseError("Wrong Email");
            break;

          case "auth/operation-not-allowed":
            setfirebaseError("للأسف لا  يُمكن   إنشاء حساب فى الوقت الحالى");
            break;

          case "auth/user-not-found":
            setfirebaseError("Wrong Email");
            break;

          case "auth/wrong-password":
            setfirebaseError("Wrong Password");
            break;

          case "auth/too-many-requests":
            setfirebaseError("Too many requests, please try aganin later");
            break;

          default:
            setfirebaseError("Please check your email & password");
            break;
        }
      });

    setshowLoading(false);
  };

  // TODO: error to AIP for firebase
  if (error) {
    return <Erroe404 />;
  }

  // TODO: Loading to uesr for firebase
  if (loading) {
    return <Loading />;
  }

  // TODO: sign-in to uesr || user ont verified email
  if (user) {
    if (!user.emailVerified) {
      return (
        <div>
          {/* Header components */}
          <Header />
          {/*== Header components ==*/}

          {/* main content */}
          <main>
            <p>
              {" "}
              {i18n.language === "en" &&
                "We send you an email to verify your Account"}
              {i18n.language === "ar" &&
                "نرسل لك بريدًا إلكترونيًا للتحقق من حسابك"}
              {i18n.language === "fr" &&
                " Nous vous envoyons un email pour vérifier votre compte"}{" "}
            </p>
            <button className="delete">
              {" "}
              {i18n.language === "en" && "Send again"}
              {i18n.language === "ar" && "إعادة الإرسال"}
              {i18n.language === "fr" && " Envoyer à nouveau"}{" "}
            </button>
          </main>
          {/*== main content ==*/}

          {/* Footer component */}
          <Footer />
          {/*== Footer component ==*/}
        </div>
      );
    }
  }

  // TODO: not sign-in to uesr
  if (!user) {
    return (
      <>
        {/* Helmet CEO To Browser */}
        <Helmet>
          <title>Signup</title>
        </Helmet>
        {/*== Helmet CEO To Browser ==*/}

        {/* Header components */}
        <Header />
        {/*== Header components ==*/}

        <main>
          <form>
            <p dir="auto" style={{ fontSize: "23px", marginBottom: "22px" }}>
              {i18n.language === "en" && "Create a new account "}
              {i18n.language === "ar" && "إنشاء حساب جديد"}
              {i18n.language === "fr" && "Créer un nouveau compte"}{" "}
              <span>🧡</span>{" "}
            </p>

            <input
              onChange={(eo) => {
                setuserName(eo.target.value);
              }}
              required
              placeholder=" UserName : "
              type="text"
            />

            <input
              onChange={(eo) => {
                setemail(eo.target.value);
              }}
              required
              placeholder=" E-mail : "
              type="email"
            />

            <input
              onChange={(eo) => {
                setpassword(eo.target.value);
              }}
              required
              placeholder=" Password : "
              type="password"
            />

            <button
              // TODO: function to Sign Up user
              onClick={(eo) => {
                signUpBTN(eo);
              }}
            >
              {showLoading /* FIXME: if condition to showLoading */ ? (
                <div style={{ justifyContent: "center" }} className="flex">
                  <ReactLoading
                    // FIXME: library to loading
                    type={"spin"}
                    color={"white"}
                    height={20}
                    width={20}
                  />
                </div>
              ) : (
                "Sign up"
              )}
            </button>
            <p className="account">
              {" "}
              {i18n.language === "en" && " Already hava an account"}
              {i18n.language === "ar" && "هل لديك حساب بالفعل؟"}
              {i18n.language === "fr" && "Vous avez déjà un compte ?"}{" "}
              <Link to="/signin">
                {i18n.language === "en" && "Sign-in"}
                {i18n.language === "ar" && "تسجيل الدخول"}
                {i18n.language === "fr" && "Connectez-vous"}{" "}
              </Link>
            </p>

            {hasError /* FIXME: if condition to hasError */ && (
              <h6 className="mtt">{firebaseError}</h6>
            )}
          </form>
        </main>
        <Footer />
      </>
    );
  }
};

export default Signup;
