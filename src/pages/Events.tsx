import React from "react";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import { Route, Routes } from "react-router";

import ErrorPage from "./ErrorPage";
import EventWizardHome from "../features/Events/EventWizardHome";
import EventWizard1 from "../features/Events/EventWizard1";
import EventWizard2 from "../features/Events/EventWizard2";
import EventWizard3 from "../features/Events/EventWizard3";
import EventWizard4 from "../features/Events/EventWizard4";
import EventCalendar from "../features/Events/EventCalendar";
import SideBar from "../features/nav/SideBar";
import TopNav from "../features/nav/TopNav";
import GameGrid from "../features/MoshPractice/Games/GameGrid";
import Header from "../features/nav/Header";

const Events = () => {
  const [automaticTimezoneEnabled, setAutomaticTimezoneEnabled] =
    useState(true);
  return (
    <>
      <Header />
      <SideBar />
      <main className="px-4 py-16 sm:px-6 lg:flex-auto lg:px-0 lg:py-20 h-screen">
        <div className="mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none">
          <div>
            <h1 className="font-bold py-6">I am the Events page</h1>
          </div>
          <EventCalendar />
        </div>
      </main>
    </>
  );
};

export default Events;
