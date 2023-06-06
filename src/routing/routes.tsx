import { createBrowserRouter } from "react-router-dom";
import HomePage from "../ui/pages/HomePage";
import React from "react";
import GamePage from "../ui/pages/GamePage";
import EventsPage from "../ui/pages/EventsPage";
import BasicLayout from "../ui/layouts/BasicLayout";
import StorePage from "../ui/pages/StorePage";
import MembershipPage from "../ui/pages/MembershipPage";
import EventTestingLinks from "../features/Events/EventTestingLinks";
import EventList from "../features/Events/EventList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BasicLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/events",
        element: <EventsPage />,
        children: [
          {
            index: true,
            element: <EventTestingLinks />,
          },
          {
            path: "list",
            element: <EventList />,
          },
        ],
      },
      {
        path: "/store",
        element: <StorePage />,
      },
      {
        path: "/membership",
        element: <MembershipPage />,
      },
      {
        path: "/games",
        element: <GamePage />,
      },
    ],
  },
]);

export default router;
