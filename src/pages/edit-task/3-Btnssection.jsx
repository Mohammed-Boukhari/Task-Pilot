import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";

import { db } from "../../firebase/config";
import { useTranslation } from "react-i18next";

const Btnssection = ({ user, deleteBTN }) => {
  const [value] = useCollection(collection(db, user.uid));

  const { i18n } = useTranslation();
  // TODO: value the document to uesr
  if (value) {
    return (
      <section className="center mt">
        <div>
          <button
            // FIXME: remove ell task
            onClick={() => {
              deleteBTN();
            }}
            style={{ marginBottom: "20px" }}
            className="delete"
          >
            {" "}
            {i18n.language === "en" && "Delete task"}
            {i18n.language === "ar" && "حذف المهمة"}
            {i18n.language === "fr" && " À propos de la page"}{" "}
          </button>
        </div>
      </section>
    );
  }
};

export default Btnssection;
