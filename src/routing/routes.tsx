import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../ui/pages/LoginPage";
import React from "react";
import GamePage from "../ui/pages/GamePage";
import EventsPage from "../ui/pages/EventsPage";
import PrimaryLayout from "../ui/layouts/PrimaryLayout";
import StorePage from "../ui/pages/StorePage";
import MembershipPage from "../ui/pages/MembershipPage";
import EventList from "../features/Events/EventList";
import ApplicationShell from "../ui/layouts/ApplicationShell";
import SimpleLayout from "../ui/layouts/SimpleLayout";
import HomePage from "../ui/pages/HomePage";
import UpcomingMeetings from "../features/Events/UpcomingMeetings";
import Login2Page from "../ui/pages/LoginAltPage";
import ConferenceDetails from "../features/Events/ConferenceDetails";
import ConferenceRegistration from "../features/Events/ConferenceRegistration";
import ProfilePage from "../ui/pages/ProfilePage";
import ProductList from "../features/store/ProductList";
import ProductDetail from "../features/Store/ProductDetail";
import Cart from "../features/Store/Cart";
import Checkout from "../features/Store/Checkout";
import OrderSummary from "../features/Store/OrderSummary";
import CertificationPage from "../ui/pages/CertificationPage";
import HomeSplash from "../features/Home/HomeSplash";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SimpleLayout />,
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
    element: <PrimaryLayout />,
    children: [
      {
        path: "",
        element: <HomeSplash />,
      },
      {
        path: "home",
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
        children: [
          {
            index: true,
            element: <ProductList />,
          },
          {
            path: ":id",
            element: <ProductDetail />,
          },
          {
            path: "cart",
            element: <Cart />,
          },
          {
            path: "checkout",
            element: <Checkout />,
          },
          {
            path: "ordersummary",
            element: <OrderSummary />,
          },
        ],
      },
      {
        path: "membership",
        element: <MembershipPage />,
      },
      {
        path: "certification",
        element: <CertificationPage />,
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
