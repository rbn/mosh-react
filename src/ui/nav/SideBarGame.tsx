import React, { useState } from "react";
import {
  BellIcon,
  CreditCardIcon,
  CubeIcon,
  FingerPrintIcon,
  UserCircleIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import GenreList from "../../features/Games/GenreList";
import { Genre } from "../../hooks/useGenres";

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

interface Props {
  onSelectGenre: (genre) => void;
  selectedGenre?: Genre | null;
}

const SideBarGame = ({ selectedGenre, onSelectGenre }: Props) => {
  return (
    <aside className="sidebar-aside">
      <GenreList
        selectedGenre={selectedGenre}
        onSelectGenre={(genre) => {
          onSelectGenre(genre);
        }}
      />
    </aside>
  );
};

export default SideBarGame;
