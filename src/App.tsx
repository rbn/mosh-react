import { useState } from "react";
import AlertDismissable from "./components/AlertDismissable";
import Button from "./components/Button";
import StateLearner from "./components/StateLearner";
import Iconerator from "./components/Iconerator";
import ExpenseTracker from "./components/ExpenseTracker";
import ExpenseTracker2 from "./components/ExpenseTracker2";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import TWsample from "./components/TWsample";
import ContactCardList from "./components/ContactCardList";

function App() {
  const [alertVis, setAlertVis] = useState(false);
  const closeAlert = (event) => {
    console.log(event);
  };

  return (
    <div className="flex">
      <div className="flex-col pl-16">
        <SideBar></SideBar>
        <TopBar></TopBar>
        <ExpenseTracker2></ExpenseTracker2>

        <ExpenseTracker></ExpenseTracker>

        {/* <StateLearner></StateLearner> */}

        {/* <ContactCardList /> */}
      </div>
    </div>
  );
}

export default App;
