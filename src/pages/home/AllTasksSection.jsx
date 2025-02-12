import { useState } from "react";
import { Link } from "react-router-dom";

import { useCollection } from "react-firebase-hooks/firestore";
import { collection, orderBy, query, where } from "firebase/firestore";

import { db } from "../../firebase/config";

import { useTranslation } from "react-i18next";

import ReactLoading from "react-loading";
import Moment from "react-moment";

const AllTasksSection = ({ user }) => {
  const { i18n } = useTranslation();
  // FIXME: variable to IPA and firebase
  const allTasks = query(collection(db, user.uid), orderBy("id"));
  const completedTasks = query(
    collection(db, user.uid),
    where("completed", "==", true)
  );
  const notCompleted = query(
    collection(db, user.uid),
    where("completed", "==", false)
  );

  const [initialData, setinitialData] = useState(allTasks);
  const [value, loading, error] = useCollection(initialData);

  const [isFullOpacity, setisFullOpacity] = useState(false);

  const [selectValue, setselectValue] = useState("aaa");

  // TODO: error to AIP for firebase
  if (error) {
    return <h1>ERROR: {error.message}</h1>;
  }

  // TODO: Loading to uesr for firebase
  if (loading) {
    return (
      <section className="mttt">
        <ReactLoading type={"spin"} color={"white"} height={77} width={77} />
      </section>
    );
  }

  // TODO: sign-in to uesr for firebase
  if (value) {
    return (
      <div>
        {/* OPIONS (filtered data) */}
        <section
          style={{ justifyContent: "center" }}
          className="parent-of-btns flex mtt"
        >
          {selectValue === "aaa" /* FIXME: if conditional to selectValue */ && (
            <div>
              <button
                style={{ opacity: isFullOpacity ? "1" : "0.3" }}
                onClick={() => {
                  setisFullOpacity(true);
                  setinitialData(
                    query(collection(db, user.uid), orderBy("id", "desc"))
                  );
                }}
              >
                {i18n.language === "fr" && "Le plus récent"}
                {i18n.language === "en" && "Newest first"}
                {i18n.language === "ar" && "الأحدث أولاً"}
              </button>

              <button
                style={{ opacity: isFullOpacity ? "0.3" : "1" }}
                onClick={(params) => {
                  setisFullOpacity(false);
                  setinitialData(
                    query(collection(db, user.uid), orderBy("id", "asc"))
                  );
                }}
              >
                {i18n.language === "en" && "Oldest first"}
                {i18n.language === "ar" && "الأقدم أولاً"}
                {i18n.language === "fr" && "Le plus ancien"}
              </button>
            </div>
          )}

          <select
            // FIXME: select to task [ all tasks || completed || not completed ]
            style={{ alignSelf: "flex-end" }}
            value={selectValue}
            onChange={(eo) => {
              if (eo.target.value === "aaa") {
                setisFullOpacity(false);
                setselectValue("aaa");
                setinitialData(allTasks);
              } else if (eo.target.value === "bbb") {
                setselectValue("bbb");
                setinitialData(completedTasks);
              } else if (eo.target.value === "ccc") {
                setselectValue("ccc");
                setinitialData(notCompleted);
              }
            }}
          >
            <option value="aaa">
              {" "}
              {i18n.language === "ar" && "جميع المهام"}
              {i18n.language === "en" && "All Tasks "}
              {i18n.language === "fr" && "Toutes les tâches"}{" "}
            </option>
            <option value="bbb">
              {" "}
              {i18n.language === "ar" && "المهام المكتملة"}
              {i18n.language === "en" && "Completed Tasks"}
              {i18n.language === "fr" && "Tâches terminées"}{" "}
            </option>
            <option value="ccc">
              {" "}
              {i18n.language === "en" && "Not Completed Tasks"}
              {i18n.language === "ar" && "المهام غير المكتملة"}
              {i18n.language === "fr" && "Tâches non terminées"}{" "}
            </option>
          </select>
        </section>

        <section className="flex all-tasks mt">
          {/* FIXME: if condition to array [] to firebase data */}
          {value.docs.length === 0 && (
            <h1>
              {" "}
              {i18n.language === "en" &&
                "Congratulations! You have Completed your tasks"}
              {i18n.language === "ar" && " تهانينا! لقد أكملت مهامك"}
              {i18n.language === "fr" &&
                "Félicitations ! Vous avez terminé vos tâches"}{" "}
              <span>❤️</span>{" "}
            </h1>
          )}
          {/* FIXME: loop to array [] to firebase data and function mapping */}
          {value.docs.map((item) => {
            return (
              <article key={item.data().id} dir="auto" className="one-task">
                <Link className="task-link" to={`/edit-task/${item.data().id}`}>
                  <h2> {item.data().title} </h2>
                  <ul>
                    {item.data().details.map((item, index) => {
                      if (index < 2) {
                        return <li key={item}> {item} </li>;
                      } else {
                        return false;
                      }
                    })}
                  </ul>

                  <p className="time">
                    {/* FIXME: library time for react */}
                    <Moment fromNow date={item.data().id} />
                  </p>
                </Link>
              </article>
            );
          })}
        </section>
      </div>
    );
  }
};

export default AllTasksSection;
