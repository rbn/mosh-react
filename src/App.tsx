import { useState } from "react";
import AlertDismissable from "./components/AlertDismissable";
import Button from "./components/Button";
import StateLearner from "./components/StateLearner";
import Iconerator from "./components/Iconerator";
import ExpenseTracker from "./components/ExpenseTracker";

function App() {
  const [alertVis, setAlertVis] = useState(false);
  const closeAlert = (event) => {
    console.log(event);
  };

  return (
    <div className="container">
      <div id="header" className="p-5 border-indigo-600 border-double border-4">
        <Button>
          <span>My</span> Button
        </Button>
      </div>
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
