import React from "react";
import { useState } from "react";
import EventCalendar from "../../features/Events/EventCalendar";
import EventSideBar from "../../features/Events/EventsSideBar";
import { Outlet, Route, Routes } from "react-router-dom";
import EventList from "../../features/Events/EventList";
import UpcomingMeetings from "../../features/Events/UpcomingMeetings";

const EventsPage = () => {
  const [automaticTimezoneEnabled, setAutomaticTimezoneEnabled] =
    useState(true);
  return (
    <main>
      <Outlet />
    </main>
  );
};

export default EventsPage;
