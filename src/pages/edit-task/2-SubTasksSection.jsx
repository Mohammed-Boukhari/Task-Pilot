import { useState } from "react";

import { useDocument } from "react-firebase-hooks/firestore";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

import { db } from "../../firebase/config";

import Moment from "react-moment";
import ReactLoading from "react-loading";

import { useTranslation } from "react-i18next";
const SubTasksSection = ({ user, stringId, completedCheckbox, trashIcon }) => {
  const { i18n } = useTranslation();
  const [value, loading, error] = useDocument(doc(db, user.uid, stringId));
  const [showAddNewTask, setshowAddNewTask] = useState(false);
  const [subTitle, setsubTitle] = useState("");
  // TODO: Error the document to uesr
  if (error) {
    console.error("Error fetching document:", error);
    return <p>Error fetching document</p>;
  }

  // TODO: Loading the document to uesr
  if (loading) {
    return (
      <main>
        <section className="sub-task mtt">
          <ReactLoading type={"spin"} color={"white"} height={77} width={77} />
        </section>
      </main>
    );
  }
  // TODO: value the document to uesr
  if (value) {
    return (
      <section className="sub-task mtt">
        <div className="parent-time">
          <p className="time">
            {" "}
            {i18n.language === "en" && "Created:"}
            {i18n.language === "ar" && "تم الإنشاء"}
            {i18n.language === "fr" && "Créé:"}{" "}
            <Moment fromNow date={value.data().id} />
          </p>
          <div>
            <input
              onChange={async (eo) => {
                completedCheckbox(eo);
              }}
              checked={value.data().completed}
              id="checkbox"
              type="checkbox"
            />
            <label htmlFor="checkbox">
              {" "}
              {i18n.language === "en" && "Completed"}
              {i18n.language === "ar" && "مكتمل "}
              {i18n.language === "fr" && "Terminé"}{" "}
            </label>
          </div>
        </div>

        <ul>
          {
            // FIXME: Fetching from the database.
          }
          {value.data().details.map((item) => {
            return (
              <li key={item} className="card-task flex">
                <p> {item} </p>
                <i
                  onClick={() => {
                    trashIcon(item);
                  }}
                  className="fa-solid fa-trash"
                ></i>
              </li>
            );
          })}
        </ul>

        {showAddNewTask /* FIXME: if conditional to showAddNewTask */ && (
          <form style={{ flexDirection: "row" }} className="add-new-task flex">
            <input
              value={subTitle}
              onChange={(eo) => {
                // @ts-ignore
                setsubTitle(eo.target.value);
              }}
              // FIXME: if conditional to onclick to Enter
              onKeyDown={async (event) => {
                if (event.key === "Enter") {
                  setsubTitle("");
                  await updateDoc(doc(db, user.uid, stringId), {
                    details: arrayUnion(subTitle),
                  });
                }
              }}
              className="add-task"
              type="text"
            />

            <button
              // FIXME: add items to array to database
              onClick={async (eo) => {
                eo.preventDefault();
                setsubTitle("");
                await updateDoc(doc(db, user.uid, stringId), {
                  details: arrayUnion(subTitle),
                });
              }}
              className="add"
            >
              {" "}
              {i18n.language === "en" && "Add"}
              {i18n.language === "ar" && "إضافة "}
              {i18n.language === "fr" && "plus"}{" "}
            </button>

            <button
              // FIXME: click cancel to model
              onClick={(eo) => {
                eo.preventDefault();
                setshowAddNewTask(false);
              }}
              className="cancel"
            >
              {i18n.language === "en" && "Cancel"}
              {i18n.language === "ar" && "إلغاء"}
              {i18n.language === "fr" && "Annuler"}{" "}
            </button>
          </form>
        )}

        <div className="center mttt">
          <button
            onClick={() => {
              setshowAddNewTask(true);
            }}
            className="add-more-btn"
          >
            {" "}
            {i18n.language === "en" && "Add more"}
            {i18n.language === "ar" && "إضافة المزيد"}
            {i18n.language === "fr" && "Ajouter plus"}{" "}
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
      </section>
    );
  }
};

export default SubTasksSection;
