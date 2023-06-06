import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { EllipsisHorizontalIcon } from "@heroicons/react/20/solid";
import { useNavigate } from "react-router-dom";
import { BsCalendar3EventFill } from "react-icons/bs";

const statuses = {
  EarlyBird: "text-green-700 bg-green-50 ring-green-600/20",
  Upcoming: "text-white bg-indigo-500 ring-gray-500/10",
  LateRegistration: "text-red-700 bg-red-50 ring-red-600/10",
};
const meetings = [
  {
    id: 1,
    name: "Annual Conference 2023",
    imageUrl: "https://tailwindui.com/img/logos/48x48/tuple.svg",
    icon: BsCalendar3EventFill,
    lastInvoice: {
      date: "December 13, 2022",
      dateTime: "2022-12-13",
      amount: "$2,000.00",
      status: "LateRegistration",
    },
  },
  {
    id: 2,
    name: "April Board Meeting",
    imageUrl: "https://tailwindui.com/img/logos/48x48/savvycal.svg",
    icon: BsCalendar3EventFill,
    lastInvoice: {
      date: "January 22, 2023",
      dateTime: "2023-01-22",
      amount: "$14,000.00",
      status: "EarlyBird",
    },
  },
  {
    id: 3,
    name: "Dues Review",
    imageUrl: "https://tailwindui.com/img/logos/48x48/reform.svg",
    icon: BsCalendar3EventFill,
    lastInvoice: {
      date: "January 23, 2023",
      dateTime: "2023-01-23",
      amount: "$7,600.00",
      status: "EarlyBird",
    },
  },
  {
    id: 4,
    name: "Office Closure",
    imageUrl: "https://tailwindui.com/img/logos/48x48/reform.svg",
    icon: BsCalendar3EventFill,
    lastInvoice: {
      date: "January 23, 2023",
      dateTime: "2023-01-23",
      amount: "$7,600.00",
      status: "Upcoming",
    },
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function UpcomingMeetings() {
  const navigate = useNavigate();

  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-2 xl:gap-x-8"
    >
      {meetings.map((client) => (
        <li
          key={client.id}
          className="overflow-hidden rounded-xl border border-gray-200"
        >
          <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
            <client.icon className="text-indigo-500 h-8 w-8" />
            {/* <img
              src={client.imageUrl}
              alt={client.name}
              className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10"
            /> */}
            <div className="text-sm font-medium leading-6 text-gray-900">
              {client.name}
            </div>
            <Menu as="div" className="relative ml-auto">
              <Menu.Button className="-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500">
                <span className="sr-only">Open options</span>
                <EllipsisHorizontalIcon
                  className="h-5 w-5"
                  aria-hidden="true"
                />
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="/auth/events/1"
                        className={classNames(
                          active ? "bg-gray-50" : "",
                          "block px-3 py-1 text-sm leading-6 text-gray-900"
                        )}
                      >
                        View<span className="sr-only">, {client.name}</span>
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? "bg-gray-50" : "",
                          "block px-3 py-1 text-sm leading-6 text-gray-900"
                        )}
                      >
                        Edit<span className="sr-only">, {client.name}</span>
                      </a>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
          <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
            <div className="flex justify-between gap-x-4 py-3">
              <dt className="text-gray-500">Meeting date</dt>
              <dd className="text-gray-700">
                <time dateTime={client.lastInvoice.dateTime}>
                  {client.lastInvoice.date}
                </time>
              </dd>
            </div>
            <div className="flex justify-between gap-x-4 py-3">
              <dt className="text-gray-500">Amount</dt>
              <dd className="flex items-start gap-x-2">
                <div className="font-medium text-gray-900">
                  {client.lastInvoice.amount}
                </div>
                <div
                  className={classNames(
                    statuses[client.lastInvoice.status],
                    "rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset"
                  )}
                >
                  {client.lastInvoice.status}
                </div>
              </dd>
            </div>
          </dl>
        </li>
      ))}
    </ul>
  );
}
