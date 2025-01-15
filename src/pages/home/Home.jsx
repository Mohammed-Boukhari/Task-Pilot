import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase/config";
import { sendEmailVerification } from "firebase/auth";

import { doc, setDoc } from "firebase/firestore";
import { useTranslation } from "react-i18next";

import Header from "../../components/header";
import Footer from "../../components/Footer";
import Loading from "../../components/Loading";

import HomeModal from "./modal";
import Snackbar from "shared/Snackbar";
import AllTasksSection from "./AllTasksSection";

import "./Home.css";

const Home = () => {
  const { i18n } = useTranslation();
  const [user, loading, error] = useAuthState(auth);

  const [showModal, setshowModal] = useState(false);
  const [showLoading, setshowLoading] = useState(false);
  const [showMessage, setshowMessage] = useState(false);

  const [taskTitle, settitle] = useState("");
  const [subTask, setsubTask] = useState("");

  const [array, setarray] = useState([]);

  const /* FIXME: send email Verification to AIP server firbase */ sendAgain =
      () => {
        sendEmailVerification(auth.currentUser).then(() => {
          console.log("Email verification sent!");
          // ...
        });
      };

  /* ===============================
    TODO: FUNCTIONS of Modal
  =============================== */
  const /* FIXME: functon to closeModal */ closeModal = () => {
      setshowModal(false);
      settitle("");
      setarray([]);
    };

  // FIXME: event onchange function to title Input
  const titleInput = (eo) => {
    settitle(eo.target.value);
  };

  // FIXME: event onchange function to details Input
  const detailsInput = (eo) => {
    setsubTask(eo.target.value);
  };

  const addBTN /* FIXME: send data to firebase database */ = (eo) => {
    eo.preventDefault();

    // FIXME: if condition to loop to array array.includes(VARIABLES)
    if (!array.includes(subTask)) {
      array.push(subTask);
    }

    // console.log(array);
    setsubTask("");
  };

  const submitBTN = async (eo) => {
    eo.preventDefault();

    setshowLoading(true);

    const taskId = new Date().getTime();
    await setDoc(doc(db, user.uid, `${taskId}`), {
      title: taskTitle,
      details: array,
      id: taskId,
      completed: false,
    });
    setshowLoading(false);
    settitle("");
    setarray([]);

    setshowModal(false);
    setshowMessage(true);

    setTimeout(() => {
      setshowMessage(false);
    }, 4000);
  };

  // TODO: error to AIP for firebase
  if (error) {
    return <h1>Error : {error.message}</h1>;
  }

  // TODO: Loading to uesr for firebase
  if (loading) {
    return <Loading />;
  }

  // TODO: not sign-in to uesr
  if (!user) {
    return (
      <>
        {/* Helmet CEO To Browser */}
        <Helmet>
          <title>HOME Page</title>
          <style type="text/css">{`.Light main h1 span{color: #222}`}</style>
        </Helmet>
        {/*== Helmet CEO To Browser ==*/}

        {/* Header components */}
        <Header />
        {/*== Header components ==*/}

        {/* main content */}
        <main>
          <p className="pls">
            {" "}
            {i18n.language === "en" && "Please"}
            {i18n.language === "ar" && "من فضلك"}
            {i18n.language === "fr" && "Veuillez vous "}{" "}
            <Link style={{ fontSize: "30px" }} to="/signin">
              {" "}
              {i18n.language === "en" && "Sign in"}
              {i18n.language === "ar" && "تسجيل الدخول"}
              {i18n.language === "fr" && "connecter"}{" "}
            </Link>{" "}
            {i18n.language === "en" && "to continue..."}
            {i18n.language === "ar" && " للمتابعة"}
            {i18n.language === "fr" && "pour continuer"}{" "}
            <span>
              <i className="fa-solid fa-heart"></i>
            </span>
          </p>
        </main>
        {/*== main content ==*/}

        {/* Footer component */}
        <Footer />
        {/*== Footer component ==*/}
      </>
    );
  }

  // TODO: sign-in to uesr || user ont verified email
  if (user) {
    if (!user.emailVerified) {
      return (
        <>
          <Helmet>
            <title>HOME Page</title>
            <meta name="description" content="HOMEEEEEEEEEEEE" />
          </Helmet>

          {/* Header components */}
          <Header />
          {/*== Header components ==*/}

          {/* main content */}
          <main>
            <p>
              {" "}
              {i18n.language === "en" && "Welcome :"}
              {i18n.language === "ar" && "مرحبًا"}
              {i18n.language === "fr" && "Bienvenue :"} {user.displayName}{" "}
              <span>
                <i className="fa-solid fa-heart"></i>{" "}
              </span>
            </p>

            <p>
              {i18n.language === "en" && "Please verify your email to continue"}
              {i18n.language === "ar" &&
                "يرجى التحقق من بريدك الإلكتروني للمتابعة"}
              {i18n.language === "fr" &&
                " Veuillez vérifier votre email pour continuer"}{" "}
              <span>✋</span>
            </p>
            <button
              onClick={() => {
                sendAgain();
              }}
              className="delete"
            >
              {" "}
              {i18n.language === "en" && "Send email"}
              {i18n.language === "ar" && "إرسال بريد إلكتروني"}
              {i18n.language === "fr" && "Envoyer un email"}{" "}
            </button>
          </main>
          {/*== main content ==*/}

          {/* Footer component */}
          <Footer />
          {/*== Footer component ==*/}
        </>
      );
    }

    // TODO: sign-in to uesr || user to verified email
    if (user.emailVerified) {
      return (
        <>
          <Helmet>
            <title>HOME Page</title>
          </Helmet>

          {/* Header components */}
          <Header />
          {/*== Header components ==*/}

          {/* main content */}
          <main className="home">
            {/* FIXME: SHOW all tasks */}
            <AllTasksSection user={user} />

            {/* FIXME: Add new task BTN */}
            <section className="mt">
              <button
                dir="auto"
                onClick={() => {
                  setshowModal(true);
                }}
                className="add-task-btn"
              >
                {i18n.language === "en" && "Add new task"}
                {i18n.language === "ar" && "أضف مهمة جديدة"}
                {i18n.language === "fr" && "Ajouter une nouvelle tâche"}

                <i className="fa-solid fa-plus"></i>
              </button>
            </section>

            {showModal /* FIXME: if condition to showModal */ && (
              <HomeModal
                // TODO: function to modal and variables || propes
                {...{
                  closeModal,
                  titleInput,
                  detailsInput,
                  addBTN,
                  submitBTN,
                  taskTitle,
                  subTask,
                  array,
                  showLoading,
                }}
              />
            )}

            <Snackbar
              // FIXME: shared snackbar messages to shared
              showMessage={showMessage}
            />
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

export default Home;
