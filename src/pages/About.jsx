import Header from "../components/header";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import Erroe404 from "../shared/erroe404";

import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
import { useTranslation } from "react-i18next";

const About = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const { i18n } = useTranslation();

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

  // TODO: error to AIP for firebase
  if (error) {
    return <Erroe404 />;
  }

  // TODO: Loading to uesr for firebase
  if (loading) {
    return <Loading />;
  }
  // TODO: sign-in to uesr || user verified email
  if (user) {
    if (user.emailVerified) {
      return (
        <>
          {/* Helmet CEO To Browser */}
          <Helmet>
            <title>About Page</title>
          </Helmet>
          {/*== Helmet CEO To Browser ==*/}

          {/* Header components */}
          <Header />
          {/*== Header components ==*/}

          {/*== main content ==*/}
          <main>
            {" "}
            {i18n.language === "en" && "About pages"}
            {i18n.language === "ar" && "حول الصفحة"}
            {i18n.language === "fr" && " À propos de la page"}{" "}
          </main>
          {/*== main content ==*/}

          {/* Footer component */}
          <Footer />
          {/*== Footer component ==*/}
        </>
      );
    }
  }
};

export default About;
export const url = "https://google.com";
