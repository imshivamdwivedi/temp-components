import React, { useState } from "react";
// for Slot adding by mentor
import ModelBox2 from "./ModalBox2";
const SearchBarRow2 = ({ handleModelOpen }) => {
  return (
    <>
      <div className={"row"}>
        <div className={"col text-center"}>
          <button
            onClick={handleModelOpen}
            type="button"
            className="btn btn-dark btn-rounded text-center"
          >
            Book Slot
          </button>
        </div>
      </div>
    </>
  );
};

const PUP2 = () => {
  const [modelOpen, setModelOpen] = useState(false);

  const handleModelClose = () => {
    setModelOpen(false);
  };

  const handleModelOpen = () => {
    setModelOpen(true);
  };

  return (
    <div>
      <ModelBox2 isOpen={modelOpen} handleClose={handleModelClose} />
      <SearchBarRow2 handleModelOpen={handleModelOpen} />
    </div>
  );
};
export default PUP2;
