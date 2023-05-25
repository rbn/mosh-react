import { useState } from "react";
import AlertDismissable from "./components/AlertDismissable";
import Button from "./components/Button";
import StateLearner from "./components/StateLearner";
import Iconerator from "./components/Iconerator";
import ExpenseTracker from "./components/ExpenseTracker";
import ExpenseTracker2 from "./components/ExpenseTracker2";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import TWsample from "./components/TWsample";
import ContactCardList from "./components/ContactCardList";
import Example from "./components/Tailwind-Comps/Calendar";
import Footer from "./Pages/Footer";
import { Route, Routes } from "react-router";
import Home from "./components/pages/Home";
import Store from "./components/pages/Store";
import { Link } from "react-router-dom";
import NewStoreItem from "./components/pages/NewStoreItem";
import ErrorPage from "./components/pages/error-page";
import StoreLayout from "./StoreLayout";
import React from "react";

function App() {
  return (
    <>
      <nav className="p-6">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Store">Store</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/store" element={<StoreLayout />}>
          <Route index element={<Store />}></Route>
          <Route path=":id" element={<Store />}></Route>
          <Route path="new" element={<NewStoreItem />}></Route>
        </Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </>
  );
  // (
  //   <div className="flex">
  //     <div className="flex-col pl-16">
  //       <SideBar></SideBar>
  //       <TopBar></TopBar>
  //       <div className="py-10">
  //         <header>
  //           <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
  //             <h1 className="text-3xl font-bold leading-tight tracking-tight p-4 text-gray-900">
  //               Header Area
  //             </h1>
  //           </div>
  //         </header>
  //         <main>
  //           <div className="flex-column mx-auto max-w-7xl sm:px-6 lg:px-8">
  //             {/* <ExpenseTracker2></ExpenseTracker2>

  //               <ExpenseTracker></ExpenseTracker> */}

  //             <Example></Example>
  //           </div>
  //         </main>
  //       </div>

  //       {/* <StateLearner></StateLearner> */}

  //       {/* <ContactCardList /> */}
  //     </div>
  //   </div>
  // );
}

export default App;
