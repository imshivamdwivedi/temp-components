import React from "react";
import { Paper } from "@material-ui/core";

import { MDBBtn } from "mdb-react-ui-kit";

const Slot = () => {
  return (
    <Paper
      elevation="1"
      style={{ borderRadius: "20px", verticalAlign: "middle", width: "80%" }}
      className="m-auto"
    >
      <div class="d-flex flex-row justify-content-between p-2 align-item-center">
        <div className="ps-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            class="bi bi-camera-video-fill"
            viewBox="0 0 16 16"
            className="mt-1"
          >
            <path
              fill-rule="evenodd"
              d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5z"
            />
          </svg>
        </div>
        <div className="mt-1">1 October</div>
        <div className="mt-1">21:00 - 21:30</div>
        <div className="pe-2">
          <button type="button" className=" btn btn-primary rounded-pill ">
            Join Now
          </button>
        </div>
      </div>
    </Paper>
  );
};

export default Slot;
