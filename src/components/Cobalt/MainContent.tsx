import React from "react";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import { Route, Routes } from "react-router";
import Home from "./Home";
import Profile from "./Profile";
import BankAccount from "./BankAccount";
import Integrations from "./Integrations";
import StoreLayout from "../Testing/Store/StoreLayout";
import Store from "../Testing/Store/Store";
import NewStoreItem from "../Testing/Store/NewStoreItem";
import ErrorPage from "./ErrorPage";
import EventWizardHome from "./Events/EventWizardHome";
import EventWizard1 from "./Events/EventWizard1";
import EventWizard2 from "./Events/EventWizard2";
import EventWizard3 from "./Events/EventWizard3";
import EventWizard4 from "./Events/EventWizard4";
import EventCalendar from "./Events/EventCalendar";

// copied from PageLayout - put this in a central location
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Main = () => {
  const [automaticTimezoneEnabled, setAutomaticTimezoneEnabled] =
    useState(true);
  return (
    <main className="px-4 py-16 sm:px-6 lg:flex-auto lg:px-0 lg:py-20 h-screen">
      <div className="mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/* <Route path="/profile" element={<Profile />}></Route>
          <Route path="/bank" element={<BankAccount />}></Route> */}
          <Route path="/events" element={<EventWizardHome />}>
            <Route index element={<EventCalendar />}></Route>
            <Route path="1" element={<EventWizard1 />}></Route>
            <Route path="2" element={<EventWizard2 />}></Route>
            <Route path="3" element={<EventWizard3 />}></Route>
            <Route path="4" element={<EventWizard4 />}></Route>
          </Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </div>
    </main>
  );
};

export default Main;
