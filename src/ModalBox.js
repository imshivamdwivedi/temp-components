import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
// for Slot adding by mentor
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

function ModelBox({ isOpen, handleClose }) {
  const classes = useStyles();
  return (
    <div
      className={
        "model-box-container position-fixed p-3 border border-1 border-dark p-md-4 m-3 bg-white rounded-5 " +
        (isOpen ? " d-block " : " d-none ")
      }
      style={{ width: "50%", maxHeight: "75%" }}
    >
      <div>
        <div className={"d-flex justify-content-between pb-3"}>
          <div className={"model-head fw-bolder fs-4"}>Filter</div>
          <div
            className={
              "close-button pe-3 fs-8 d-flex align-items-center justify-content-center"
            }
          >
            <button
              onClick={handleClose}
              type="button"
              className="btn-close"
            ></button>
          </div>
        </div>
        <div className={"content"}>
          <div className="row">
            <div className="col-4">
              <form className={classes.container} noValidate>
                <TextField
                  id="date"
                  label="Select Date"
                  type="date"
                  defaultValue="2017-05-24"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </form>
            </div>
            <div className="col-4">
              <form className={classes.container} noValidate>
                <TextField
                  id="time-from"
                  label="From"
                  type="time"
                  defaultValue="07:30"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    step: 300, // 5 min
                  }}
                />
              </form>
            </div>
            <div className="col-4">
              <form className={classes.container} noValidate>
                <TextField
                  id="time-to"
                  label="To"
                  type="time"
                  defaultValue="07:30"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    step: 300, // 5 min
                  }}
                />
              </form>
            </div>
          </div>
          <div className="row mt-2">
            <button
              onClick=""
              type="button"
              className="btn btn-dark btn-md"
              data-mdb-ripple-color="dark"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModelBox;
