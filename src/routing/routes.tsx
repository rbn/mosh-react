import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../ui/pages/LoginPage";
import React from "react";
import GamePage from "../ui/pages/GamePage";
import EventsPage from "../ui/pages/EventsPage";
import BasicLayout from "../ui/layouts/BasicLayout";
import StorePage from "../ui/pages/StorePage";
import MembershipPage from "../ui/pages/MembershipPage";
import EventList from "../features/Events/EventList";
import ApplicationShell from "../ui/layouts/ApplicationShell";
import BlankLayout from "../ui/layouts/BlankLayout";
import HomePage from "../ui/pages/HomePage";
import UpcomingMeetings from "../features/Events/UpcomingMeetings";
import Login2Page from "../ui/pages/LoginAltPage";
import ConferenceDetails from "../features/Events/ConferenceDetails";
import ConferenceRegistration from "../features/Events/ConferenceRegistration";
import ProfilePage from "../ui/pages/ProfilePage";

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
        path: "profile",
        element: <ProfilePage />,
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
            element: <ConferenceDetails />,
          },
          {
            path: "list",
            element: <EventList />,
          },
          {
            path: "register",
            element: <ConferenceRegistration />,
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
