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

const SideBar = () => {
  return (
    <aside className="flex overflow-x-auto border-b border-gray-900/5 py-4 lg:block lg:w-64 lg:flex-none lg:border-0 lg:py-20 sm:mt-20">
      <nav className="flex-none px-4 sm:px-6 lg:px-0">
        <ul
          role="list"
          className="flex gap-x-3 gap-y-1 whitespace-nowrap lg:flex-col"
        >
          {secondaryNavigation.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={classNames(
                  item.current
                    ? "bg-gray-50 text-indigo-600"
                    : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
                  "group flex gap-x-3 rounded-md py-2 pl-2 pr-3 text-sm leading-6 font-semibold"
                )}
              >
                <item.icon
                  className={classNames(
                    item.current
                      ? "text-indigo-600"
                      : "text-gray-400 group-hover:text-indigo-600",
                    "h-6 w-6 shrink-0"
                  )}
                  aria-hidden="true"
                />
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
