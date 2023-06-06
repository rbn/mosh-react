import React from "react";
import { useState } from "react";
import EventCalendar from "../../features/Events/EventCalendar";
import EventSideBar from "../../features/Events/EventsSideBar";
import { Outlet, Route, Routes } from "react-router-dom";
import EventList from "../../features/Events/EventList";
import EventWizard2 from "../../features/Events/EventWizard2";
import EventWizard3 from "../../features/Events/EventWizard3";
import EventWizard4 from "../../features/Events/EventWizard4";

const EventsPage = () => {
  const [automaticTimezoneEnabled, setAutomaticTimezoneEnabled] =
    useState(true);
  return (
    <>
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 flex">
        <aside className="invisible">{/* <EventSideBar /> */}</aside>
        <main className="px-4 py-16 sm:px-6 lg:flex-auto lg:px-0 lg:py-20 h-screen w-screen">
          <div>
            <h1 className="font-bold py-6">I am the Events page</h1>
          </div>

          <Outlet />
        </main>
      </div>
    </>
  );
};

export default EventsPage;
