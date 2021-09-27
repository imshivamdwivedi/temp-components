import React from "react";
import ReactDOM from "react-dom";
import APP from "./App";

import PUP from "./PUP.js";
import PUP2 from "./Slot-Booking/PUP2";

ReactDOM.render(
  <React.StrictMode>
    <PUP />
    <PUP2 />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
