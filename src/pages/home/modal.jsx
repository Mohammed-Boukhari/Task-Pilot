import ReactLoading from "react-loading";

import Modal from "shared/Modal";

const HomeModal = ({
  // TODO: function to props the Home component
  closeModal,
  titleInput,
  detailsInput,
  addBTN,
  submitBTN,
  taskTitle,
  subTask,
  array,
  showLoading,
}) => {
  return (
    <Modal closeModal={closeModal}>
      <div className="model-content">
        <input
          value={taskTitle}
          onChange={(eo) => {
            titleInput(eo);
          }}
          required
          placeholder=" Add title : "
          type="text"
        />

        <div>
          <input
            onChange={(eo) => {
              detailsInput(eo);
            }}
            placeholder=" details "
            type="text"
            value={subTask}
          />

          <button
            onClick={(eo) => {
              addBTN(eo);
            }}
          >
            Add
          </button>
        </div>

        <ul>
          {/* FIXME: array of tasks to function mapping */}
          {array.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <button
          style={{ marginBottom: "33px" }}
          onClick={async (eo) => {
            submitBTN(eo);
          }}
        >
          {showLoading /* FIXME: if condition to showLoading || library for ReactLoading */ ? (
            <ReactLoading
              type={"spin"}
              color={"white"}
              height={20}
              width={20}
            />
          ) : (
            "Submit"
          )}
        </button>
      </div>
    </Modal>
  );
};

export default HomeModal;
