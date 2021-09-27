import React, { useState } from "react";
// for Slot adding by mentor
import ModelBox from "./ModalBox";
const SearchBarRow = ({ handleModelOpen }) => {
  return (
    <>
      <div className={"row"}>
        <div className={"col text-center"}>
          <button
            onClick={handleModelOpen}
            type="button"
            className="btn btn-dark btn-rounded text-center"
          >
            Add Slot
          </button>
        </div>
      </div>
    </>
  );
};

const PUP = () => {
  const [modelOpen, setModelOpen] = useState(false);

  const handleModelClose = () => {
    setModelOpen(false);
  };

  const handleModelOpen = () => {
    setModelOpen(true);
  };

  return (
    <div>
      <ModelBox isOpen={modelOpen} handleClose={handleModelClose} />
      <SearchBarRow handleModelOpen={handleModelOpen} />
    </div>
  );
};
export default PUP;
