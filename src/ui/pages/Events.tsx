import React from "react";
import { useState } from "react";

import EventCalendar from "../../features/Events/EventCalendar";
import Header from "../nav/Header";
import EventsSideBar from "../nav/SideBarEvents";

const Events = () => {
  const [automaticTimezoneEnabled, setAutomaticTimezoneEnabled] =
    useState(true);
  return (
    <>
      <Header />
      <EventsSideBar />
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
