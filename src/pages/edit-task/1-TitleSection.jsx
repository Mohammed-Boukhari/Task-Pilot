import { useRef } from "react";
import { useDocument } from "react-firebase-hooks/firestore";
import { doc } from "firebase/firestore";
import { db } from "../../firebase/config";

const TitleSection = ({ user, stringId, titleInput }) => {
  // FIXME: Creating a reference to a DOM element.
  const [value] = useDocument(doc(db, user.uid, stringId));
  const inputElement = useRef(null);

  if (value) {
    return (
      <section className="title center">
        <h1>
          <input
            style={{
              textDecoration: value.data().completed ? "line-through" : null,
            }}
            ref={inputElement}
            onChange={async (eo) => {
              titleInput(eo);
            }}
            defaultValue={value.data().title}
            className="title-input center"
            type="text"
          />
          <i
            // FIXME: When the button is clicked, we focus on the input field.
            onClick={() => {
              inputElement.current.focus();
            }}
            className="fa-regular fa-pen-to-square"
          ></i>
        </h1>
      </section>
    );
  }
};

export default TitleSection;
