import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
import { deleteUser } from "firebase/auth";
import { useTranslation } from "react-i18next";

import Moment from "react-moment";

import Header from "../components/header";
import Footer from "../components/Footer";
import Loading from "../components/Loading";

const Profile = () => {
  const [user, loading, error] = useAuthState(auth);
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user && !loading) {
      navigate("/");
    }

    if (user) {
      if (!user.emailVerified) {
        navigate("/");
      }
    }
  });

  const DeleteBTN /* FIXME: function Delete user from database */ = () => {
    deleteUser(user)
      .then(() => {
        //
        // console.log("User deleted.");
      })
      .catch(() => {
        //
        // console.log(error.message);
      });
  };

  // TODO: Loading to uesr for firebase
  if (loading) {
    return <Loading />;
  }
  // TODO: error to AIP for firebase
  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }

  // TODO: sign-in to uesr
  if (user) {
    return (
      <>
        {/* Helmet CEO To Browser */}
        <Helmet>
          <title>Profile</title>

          <style type="text/css">{`
            main{
              flex-direction: column;
              align-items: flex-start;
              width: fit-content;
              margin: auto;
            }
          `}</style>
        </Helmet>
        {/*== Helmet CEO To Browser ==*/}

        {/* Header components */}
        <Header />
        {/*== Header components ==*/}

        {/* TODO: profile to user */}
        {/*== main content ==*/}
        <main>
          <h6 dir="auto">
            {" "}
            {i18n.language === "en" && "Email"}
            {i18n.language === "ar" && "بريد إلكتروني"}
            {i18n.language === "fr" && "Courriel"} {" : "} {user.email}
          </h6>
          <h6 dir="auto">
            {" "}
            {i18n.language === "en" && "UserName"}
            {i18n.language === "ar" && "اسم المستخدم"}
            {i18n.language === "fr" && "Nom d'utilisateur"} {" : "}{" "}
            {user.displayName}
          </h6>

          <h6 dir="auto">
            {" "}
            {i18n.language === "en" && "Last Sign-in"}
            {i18n.language === "ar" && "آخر تسجيل دخول"}
            {i18n.language === "fr" && "Dernière connexion"}
            {" : "}
            <Moment
              // FIXME: library time to react
              fromNow
              date={user.metadata.lastSignInTime}
            />{" "}
          </h6>

          <h6 dir="auto">
            {" "}
            {i18n.language === "en" && " Account Created"}
            {i18n.language === "ar" && "تم إنشاء الحساب"}
            {i18n.language === "fr" && "Compte créé"}
            {" : "}
            <Moment
              // FIXME: library time to react
              fromNow
              date={user.metadata.creationTime}
            />
          </h6>
          <button
            // FIXME: onclick to function DeleteAccount \\ { Ln 28 }
            onClick={() => {
              DeleteBTN();
            }}
            className="delete"
          >
            {" "}
            {i18n.language === "en" && "Delete account"}
            {i18n.language === "ar" && "حذف الحساب"}
            {i18n.language === "fr" && "Supprimer le compte"}{" "}
          </button>
        </main>
        {/*== main content ==*/}

        {/* Footer component */}
        <Footer />
        {/*== Footer component ==*/}
      </>
    );
  }
};

export default Profile;
