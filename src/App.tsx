import React from "react";
import MoshPage from "./features/MoshPractice/pages/MoshPage";
import Home from "./pages/Home";
import { Route, Routes } from "react-router";
import ErrorPage from "./pages/ErrorPage";
import SideBar from "./features/nav/SideBar";
import TopNav from "./features/nav/TopNav";
import EventWizardHome from "./features/Events/EventWizardHome";
import EventCalendar from "./features/Events/EventCalendar";
import EventWizard1 from "./features/Events/EventWizard1";
import EventWizard2 from "./features/Events/EventWizard2";
import EventWizard3 from "./features/Events/EventWizard3";
import EventWizard4 from "./features/Events/EventWizard4";
import Store from "./pages/Store";
import Membership from "./pages/Membership";
import TailwindSample from "./pages/TailwindSample";
import ApplicationShell from "./pages/ApplicationShell";
import ApplicationShell2 from "./pages/ApplicationShell2";
import Events from "./pages/Events";

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
