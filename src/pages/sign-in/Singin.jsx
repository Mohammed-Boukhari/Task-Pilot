import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import ReactLoading from "react-loading";

import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../../firebase/config";

import Modal from "shared/Modal";
import Header from "../../components/header";
import Footer from "../../components/Footer";

import { useTranslation } from "react-i18next";

import "./signin.css";

const /* TODO: UI design to logic \\ component Signin */ Signin = () => {
    const navigate = useNavigate();
    const { i18n } = useTranslation();

    const [email, setemail] = useState("");
    const [resetPass, setresetPass] = useState("");
    const [password, setpassword] = useState("");
    const [firebaseError, setfirebaseError] = useState("");

    const [hasError, sethasError] = useState(false);
    const [showLoading, setshowLoading] = useState(false);
    const [showSendEmail, setshowSendEmail] = useState(false);
    const [showModal, setshowModal] = useState(false);

    // TODO: function to sing-in user || firebase to authentication for user Sign-in
    const signInBTN = async (eo) => {
      setshowLoading(true);
      eo.preventDefault();
      await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/");
        })
        // FIXME: catch error and redirect to Sign-in
        .catch((error) => {
          const errorCode = error.code;
          sethasError(true);

          // FIXME: switch conditions to error codes
          switch (errorCode) {
            case "auth/operation-not-allowed":
              setfirebaseError(
                "للأسف لا  يُمكن   تسجيل الدخول فى الوقت الحالى"
              );
              break;

            case "auth/invalid-email":
              setfirebaseError("Wrong Email");
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

    const forgotPassword /* FIXME: function to forgot Password */ = () => {
      setshowModal(true);
    };

    const closeModal /* FIXME: function Close Modal to forgot Password */ =
      () => {
        setshowModal(false);
      };

    return (
      <>
        {/* Helmet CEO To Browser */}
        <Helmet>
          <title>Signin</title>
        </Helmet>
        {/*== Helmet CEO To Browser ==*/}

        {/* Header components */}
        <Header />
        {/*== Header components ==*/}

        {/* main content */}
        <main>
          {showModal /* FIXME: if condition to showModal */ && (
            <Modal closeModal={closeModal}>
              <input
                onChange={(eo) => {
                  setresetPass(eo.target.value);
                }}
                required
                placeholder=" E-mail : "
                type="email"
              />
              <button
                // FIXME: send password Reset Email \\ firbase Authentication firbase
                onClick={(eo) => {
                  eo.preventDefault();

                  sendPasswordResetEmail(auth, resetPass)
                    .then(() => {
                      console.log("send email");
                      setshowSendEmail(true);
                    })
                    .catch((error) => {});
                }}
              >
                {" "}
                {i18n.language === "en" && "Reset Password"}
                {i18n.language === "ar" && "إعادة تعيين كلمة المرور "}
                {i18n.language === "fr" &&
                  " Réinitialiser le mot de passe"}{" "}
              </button>
              {showSendEmail /* FIXME: if condition to showSendEmail */ && (
                <p className="check-email">
                  {" "}
                  {i18n.language === "en" &&
                    "Please check your email to reset your password."}
                  {i18n.language === "ar" &&
                    "يرجى التحقق من بريدك الإلكتروني لإعادة تعيين كلمة المرور الخاصة بك"}
                  {i18n.language === "fr" &&
                    "Veuillez vérifier votre email pour réinitialiser votre mot de passe"}{" "}
                </p>
              )}
            </Modal>
          )}

          <form>
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
              // TODO: onclick function sing-in
              onClick={(eo) => {
                signInBTN(eo);
              }}
            >
              {showLoading ? (
                /* FIXME: if condition to showLoading */ <div
                  style={{ justifyContent: "center" }}
                  className="flex"
                >
                  <ReactLoading
                    // FIXME: library to loading
                    type={"spin"}
                    color={"white"}
                    height={20}
                    width={20}
                  />
                </div>
              ) : (
                "Sign in"
              )}
            </button>
            <p className="account">
              {" "}
              {i18n.language === "en" && "Don't hava an account "}
              {i18n.language === "ar" && "ليس لديك حساب؟"}
              {i18n.language === "fr" && "Vous n'avez pas de compte ?"}{" "}
              <Link to="/signup">
                {" "}
                {i18n.language === "en" && "Sign-up"}
                {i18n.language === "ar" && "سجل الآن"}
                {i18n.language === "fr" && "Inscrivez-vous"}{" "}
              </Link>
            </p>

            <p
              onClick={() => {
                forgotPassword();
              }}
              className="forgot-pass mtt"
            >
              {" "}
              {i18n.language === "en" && "Forgot password ?"}
              {i18n.language === "ar" && "هل نسيت كلمة المرور؟"}
              {i18n.language === "fr" && " Mot de passe oublié ?"}{" "}
            </p>

            {hasError /* FIXME: if condition to hasError */ && (
              <h6 className="mtt">{firebaseError}</h6>
            )}
          </form>
        </main>
        {/*== main content ==*/}

        {/* Footer component */}
        <Footer />
        {/*== Footer component ==*/}
      </>
    );
  };

export default Signin;
