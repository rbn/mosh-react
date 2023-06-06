import React from "react";

const SideBar = () => {
  return (
    <aside className="bg-slate-100 rounded-2xl  text-gray-600">
      <h2 className="italic p-4 text-center">Demo notes</h2>
      <ol className="list-decimal list-inside p-2 text-sm marker:text-indigo-600 marker:font-semibold marker:text-xl">
        <li className="my-6">
          Click "sign-in" (no credentials required for demo)
        </li>
        <li className="my-6">
          You will come to the Portal home page (click the logo to go back to
          the login page)
        </li>
        <li className="my-6">Click on the "Upcoming Events" card</li>
        <li className="my-6">
          Click the ellipis (...) in the "Annual Conference 2023" and click
          "View"
        </li>
        <li className="my-6">
          You will be brought to the "Annual Conference 2023" Page. This is an
          unmodified form page from Tailwind - need to pick it back up here
        </li>
      </ol>
      <hr className="m-6" />
      <div className="m-4">
        <span className="italic font-semibold">Alternate login pages:</span>
        <ul>
          <li>
            <a href="/">login 1</a>
          </li>
          <li>
            <a href="/2">login 2</a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
