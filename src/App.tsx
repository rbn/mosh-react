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
import Example from "./components/Tailwind-Comps/Calendar";
import Footer from "./Pages/Footer";

function App() {
  return (
    <div className="flex">
      <div className="flex-col pl-16">
        <SideBar></SideBar>
        <TopBar></TopBar>
        <div className="py-10">
          <header>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold leading-tight tracking-tight p-4 text-gray-900">
                Header Area
              </h1>
            </div>
          </header>
          <main>
            <div className="flex-column mx-auto max-w-7xl sm:px-6 lg:px-8">
              {/* <ExpenseTracker2></ExpenseTracker2>

                <ExpenseTracker></ExpenseTracker> */}

              <Example></Example>
            </div>
          </main>
        </div>

        {/* <StateLearner></StateLearner> */}

        {/* <ContactCardList /> */}
      </div>
    </div>
  );
}

export default App;
