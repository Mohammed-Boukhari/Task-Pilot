import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/config";

import { arrayRemove, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

import ReactLoading from "react-loading";

import Header from "components/header";
import Footer from "components/Footer";
import Loading from "components/Loading";

import TitleSection from "./1-TitleSection";
import SubTasksSection from "./2-SubTasksSection";
import Btnssection from "./3-Btnssection";

import "./editTask.css";
const EditTask = () => {
  const [user, loading, error] = useAuthState(auth);
  const [showData, setshowData] = useState(false);

  const navigate = useNavigate();
  let { stringId } = useParams();

  // ======================
  // 1- Title Section
  // ======================
  const titleInput /* FIXME: Define an asynchronous function to handle title input updates */ =
    async (eo) => {
      await updateDoc(doc(db, user.uid, stringId), {
        // @ts-ignore
        title: eo.target.value,
      });
    };

  // ======================
  // 2- Sub-Task Section
  // ======================
  const completedCheckbox /* FIXME: Define an asynchronous function to handle the "completed" checkbox toggle */ =
    async (eo) => {
      if (eo.target.checked) {
        await updateDoc(doc(db, user.uid, stringId), {
          completed: true,
        });
      } else {
        await updateDoc(doc(db, user.uid, stringId), {
          completed: false,
        });
      }
    };

  const trashIcon /* FIXME: Define an asynchronous function to handle the removal of an item */ =
    async (item) => {
      await updateDoc(doc(db, user.uid, stringId), {
        details: arrayRemove(item),
      });
    };

  // ======================
  // 3- BTNs Section
  // ======================
  const /* FIXME: function delete to all tasks */ deleteBTN = async (eo) => {
      setshowData(true);
      await deleteDoc(doc(db, user.uid, stringId));
      // FIXME: navigate to home page for firebase
      navigate("/", { replace: true });
    };
  // TODO: error to AIP for firebase
  if (error) {
    return <h1>Error : {error.message}</h1>;
  }
  // TODO: Loading to uesr for firebase
  if (loading) {
    return <Loading />;
  }
  // TODO: sign-in to uesr for firebase
  if (user) {
    return (
      <div>
        {/* Helmet CEO To Browser */}
        <Helmet>
          <title>edit task Page</title>
        </Helmet>
        {/*== Helmet CEO To Browser ==*/}

        {/* Header components */}
        <Header />
        {/*== Header components ==*/}

        {showData /* FIXME: if conditional to showData */ ? (
          <main>
            <ReactLoading
              type={"spin"}
              color={"white"}
              height={77}
              width={77}
            />
          </main>
        ) : (
          <div className="edit-task">
            {/* TODO: Title */}
            <TitleSection
              {...{ user, stringId, titleInput }}
              // user={user}
              // stringId={stringId}
              // titleInput={titleInput}
            />

            {/* TODO: Sub-tasks section */}
            <SubTasksSection
              {...{ user, stringId, completedCheckbox, trashIcon }}
              // user={user}
              // stringId={stringId}
              // completedCheckbox={completedCheckbox}
              // trashIcon={trashIcon}
            />

            {/* TODO: Add-more BTN && Delete BTN */}

            <Btnssection user={user} deleteBTN={deleteBTN} />
          </div>
        )}

        {/* Footer component */}
        <Footer />
        {/*== Footer component ==*/}
      </div>
    );
  }
};

export default EditTask;
