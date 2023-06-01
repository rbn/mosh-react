import React from "react";
import {
  BellIcon,
  CreditCardIcon,
  CubeIcon,
  FingerPrintIcon,
  UserCircleIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import GenreList from "../../features/MoshPractice/Games/GenreList";
import Spinner from "../spinners/Spinner";

const secondaryNavigation = [
  {
    name: "Wizard Stage 1",
    href: "/events/1",
    icon: UserCircleIcon,
    current: false,
  },
  {
    name: "Wizard Stage 2",
    href: "/events/2",
    icon: FingerPrintIcon,
    current: false,
  },
  { name: "Wizard Stage 3", href: "/events/3", icon: BellIcon, current: false },
  { name: "Wizard Stage 4", href: "/events/4", icon: CubeIcon, current: false },
];

// copied from PageLayout - put this in a central location
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const SideBarGames = () => {
  return (
    <aside className="sidebar-aside">
      <div className="m-6">
        <Spinner />
      </div>
      <GenreList />
    </aside>
  );
};

export default SideBarGames;
