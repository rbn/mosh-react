import React from "react";

const BankAccount = () => {
  return (
    <div>
      <h2 className="text-base font-semibold leading-7 text-gray-900">
        Bank accounts
      </h2>
      <p className="mt-1 text-sm leading-6 text-gray-500">
        Connect bank accounts to your account.
      </p>

      <ul
        role="list"
        className="mt-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6"
      >
        <li className="flex justify-between gap-x-6 py-6">
          <div className="font-medium text-gray-900">TD Canada Trust</div>
          <button
            type="button"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Update
          </button>
        </li>
        <li className="flex justify-between gap-x-6 py-6">
          <div className="font-medium text-gray-900">Royal Bank of Canada</div>
          <button
            type="button"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Update
          </button>
        </li>
      </ul>

      <div className="flex border-t border-gray-100 pt-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
        >
          <span aria-hidden="true">+</span> Add another bank
        </button>
      </div>
    </div>
  );
};

export default BankAccount;
