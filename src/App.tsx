import React from "react";
import Home from "./ui/Home";
import { Route, Routes } from "react-router";
import ErrorPage from "./ui/ErrorPage";
import EventCalendar from "./features/Events/EventCalendar";
import EventWizard1 from "./features/Events/EventWizard1";
import EventWizard2 from "./features/Events/EventWizard2";
import EventWizard3 from "./features/Events/EventWizard3";
import EventWizard4 from "./features/Events/EventWizard4";
import Store from "./ui/Store";
import Membership from "./ui/Membership";
import TailwindSample from "./ui/TailwindSample";
import ApplicationShell from "./ui/ApplicationShell";
import ApplicationShell2 from "./ui/ApplicationShell2";
import Events from "./ui/Events";

function App() {
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 flex">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/tw" element={<TailwindSample />}></Route>
        <Route path="/as" element={<ApplicationShell />}></Route>
        <Route path="/as2" element={<ApplicationShell2 />}></Route>
        <Route path="/events" element={<Events />}>
          <Route index element={<EventCalendar />}></Route>
          <Route path="1" element={<EventWizard1 />}></Route>
          <Route path="2" element={<EventWizard2 />}></Route>
          <Route path="3" element={<EventWizard3 />}></Route>
          <Route path="4" element={<EventWizard4 />}></Route>
        </Route>

        <Route path="/store" element={<Store />}></Route>
        <Route path="/membership" element={<Membership />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
