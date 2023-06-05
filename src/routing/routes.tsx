import { createBrowserRouter } from "react-router-dom";
import HomePage from "../ui/pages/HomePage";
import React from "react";
import GamePage from "../ui/pages/GamePage";
import EventsPage from "../ui/pages/EventsPage";
import BasicLayout from "../ui/layouts/BasicLayout";
import StorePage from "../ui/pages/StorePage";
import MembershipPage from "../ui/pages/MembershipPage";

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
        path: "/games",
        element: <GamePage />,
      },
      {
        path: "/events",
        element: <EventsPage />,
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
