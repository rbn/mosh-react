import { useState } from "react";
import AlertDismissable from "./components/AlertDismissable";
import Button from "./components/Button";
import StateLearner from "./components/StateLearner";
import Iconerator from "./components/Iconerator";
import ExpenseTracker from "./components/ExpenseTracker";
import ExpenseTracker2 from "./components/ExpenseTracker2";
import SideBar from "./components/SideBar";

function App() {
  const [alertVis, setAlertVis] = useState(false);
  const closeAlert = (event) => {
    console.log(event);
  };

  return (
    <div className="flex">
      <SideBar></SideBar>

      <ExpenseTracker2></ExpenseTracker2>

      <div
        id="midPanel2"
        className="divide-y divide-dashed p-20  border-sky-600 border-double border-4"
      >
        <ExpenseTracker></ExpenseTracker>
      </div>
      <div
        id="upperPanel"
        className="divide-y divide-dashed p-20  border-indigo-600 border-double border-4"
      >
        <div>01</div>
        <div>02</div>
        <div>03</div>
      </div>
      <div
        id="midPanel"
        className="divide-y divide-dashed p-20  border-sky-600 border-double border-4"
      >
        <StateLearner></StateLearner>
      </div>
    </div>
  );
}

export default App;
