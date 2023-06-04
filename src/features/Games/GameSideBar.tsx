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
import GenreList from "./GenreList";
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

const GameSideBar = ({ selectedGenre, onSelectGenre }: Props) => {
  return (
    <GenreList
      selectedGenre={selectedGenre || null}
      onSelectGenre={(genre) => {
        onSelectGenre(genre);
      }}
    />
  );
};

export default GameSideBar;
