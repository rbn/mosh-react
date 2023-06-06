import React from "react";
import { useState } from "react";
import EventCalendar from "../../features/Events/EventCalendar";
import EventSideBar from "../../features/Events/EventsSideBar";
import { Outlet, Route, Routes } from "react-router-dom";
import EventList from "../../features/Events/EventList";

const EventsPage = () => {
  const [automaticTimezoneEnabled, setAutomaticTimezoneEnabled] =
    useState(true);
  return (
    <main>
      <div>
        <h1 className="font-bold py-6">I am the Events page</h1>
      </div>

      <Outlet />
    </main>
  );
};

export default EventsPage;
