import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const CreateProject = forwardRef(({ newProject }, ref) => {
  const dialog = useRef();
  const title = useRef();
  const description = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
        title.current.value = "";
        description.current.value = "";
      },
      createTitle() {
        return title.current.value;
      },
      createDescription() {
        return description.current.value;
      },
      close() {
        dialog.current.close();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className="create-project-modal">
      <h2>Your project:</h2>
      <div>
        <input ref={title} type="text" placeholder="Title" />
        <input ref={description} type="text" placeholder="Description" />
        <form action="dialog">
          <button type="button" onClick={() => newProject()}>
            Create
          </button>
        </form>
      </div>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default CreateProject;
