import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../ui/pages/LoginPage";
import React from "react";
import GamePage from "../ui/pages/GamePage";
import EventsPage from "../ui/pages/EventsPage";
import BasicLayout from "../ui/layouts/BasicLayout";
import StorePage from "../ui/pages/StorePage";
import MembershipPage from "../ui/pages/MembershipPage";
import EventTestingLinks from "../features/Events/EventTestingLinks";
import EventList from "../features/Events/EventList";
import ApplicationShell from "../ui/layouts/ApplicationShell";
import BlankLayout from "../ui/layouts/BlankLayout";
import HomePage from "../ui/pages/HomePage";
import UpcomingMeetings from "../features/Events/UpcomingMeetings";
import AnnualConference from "../features/Events/AnnualConference";
import Login2Page from "../ui/pages/LoginAltPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BlankLayout />,
    children: [
      {
        path: "",
        element: <LoginPage />,
      },
      {
        path: ":id",
        element: <Login2Page />,
      },
    ],
  },
  {
    path: "/auth/*",
    element: <BasicLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "events",
        element: <EventsPage />,
        children: [
          {
            index: true,
            element: <UpcomingMeetings />,
          },
          {
            path: ":id",
            element: <AnnualConference />,
          },
          {
            path: "list",
            element: <EventList />,
          },
        ],
      },
      {
        path: "store",
        element: <StorePage />,
      },
      {
        path: "membership",
        element: <MembershipPage />,
      },
      {
        path: "games",
        element: <GamePage />,
      },
    ],
  },
  {
    path: "/shell1",
    element: <ApplicationShell />,
  },
]);

export default router;
