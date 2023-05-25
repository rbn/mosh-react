import { Outlet, Link } from "react-router-dom";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import Calendar from "../components/Tailwind-Comps/Calendar";
import StateLearner from "../components/StateLearner";
import Stats from "../components/Tailwind-Comps/Stats";
import SignIn from "../components/Tailwind-Comps/SignIn";
import Modal from "../components/Tailwind-Comps/Modal";
import ProductList from "../components/Tailwind-Comps/ProductList";
import ShoppingCartPage from "../components/Tailwind-Comps/ShoppingCartPage";

export default function Root() {
  return (
    <div className="flex">
      <div className="flex-col pl-16">
        {/* <SideBar></SideBar> */}
        <TopBar></TopBar>
        <div className="py-10">

          <main>
            <div className="flex-column mx-auto max-w-7xl sm:px-6 lg:px-8">
                {/* <Calendar></Calendar>
                <Stats></Stats>
                <SignIn></SignIn>
                <Modal></Modal>
                <ProductList></ProductList> */}
                <ShoppingCartPage></ShoppingCartPage>
            </div>
          </main>
        </div>


      </div>
    </div>
  );
}