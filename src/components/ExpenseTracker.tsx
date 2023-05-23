import React, { FormEvent, useRef } from "react";
import Button from "./Button";

const ExpenseTracker = () => {
  const descripRef = useRef<HTMLInputElement>(null);
  const amtRef = useRef<HTMLInputElement>(null);
  const expense = { description: "", amount: "", category: "" };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (descripRef.current !== null)
      expense.description = descripRef.current.value;
    if (amtRef.current !== null) expense.amount = amtRef.current.value;
    console.log(expense);
  };

  return (
    <>
      <div className="block max-w-2xl rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 border-double border-4 border-sky-500">
        <form className="max-w-md">
          <h3 className="mb-6 text-2xl font-bold w-full">
            Expense Tracker - useRef
          </h3>
          <div className="bg-transparent">
            <p>
              <label htmlFor="description">Description</label>
              <input
                type="text"
                ref={descripRef}
                className="w-full rounded border-2 border-indigo-200 bg-transparent px-3"
                id="description"
                placeholder="Enter description"
              />
            </p>
            <p
              id="descriptionError"
              className=" w-full text-neutral-500 dark:text-neutral-200 text-rose-500 text-sm"
              data-te-input-helper-ref
            >
              An error message could go here
            </p>
          </div>
          <div className="bg-transparent">
            <p>
              <label htmlFor="amount">Amount</label>
              <input
                type="number"
                ref={amtRef}
                className="w-full rounded border-2 border-indigo-200 bg-transparent px-3"
                id="amount"
                placeholder="Enter amount"
              />
            </p>
            <p
              id="amountError"
              className=" w-full text-neutral-500 dark:text-neutral-200 text-rose-500 text-sm"
              data-te-input-helper-ref
            >
              An error message could go here
            </p>
          </div>
          <div className="bg-transparent">
            <p>
              <label htmlFor="category">Category</label>
              <select
                className="w-full rounded border-2 border-indigo-200 bg-transparent px-3"
                id="category"
              >
                <option value="">Please select an option</option>
                <option value="groceries">Groceries</option>
                <option value="utilities">Utilities</option>
                <option value="entertainment">Entertainment</option>
              </select>
            </p>
            <p
              id="selectError"
              className=" w-full text-neutral-500 dark:text-neutral-200 text-rose-500 text-sm"
              data-te-input-helper-ref
            >
              An error message could go here
            </p>
            <p>
              <Button onClick={handleSubmit}>submit</Button>
            </p>
          </div>
        </form>
        <hr className="my-10 max-w-md"></hr>
        <div className="max-w-xl">
          <select
            className="w-full rounded border-2 border-indigo-200 bg-transparent px-3 max-w-md mb-10"
            id="category"
          >
            <option value="">Please select an option</option>
            <option value="groceries">Groceries</option>
            <option value="utilities">Utilities</option>
            <option value="entertainment">Entertainment</option>
          </select>
          <table className="table-auto min-w-full text-left text-sm font-light">
            <thead className="border-b font-medium dark:border-neutral-500">
              <tr>
                <th scope="col" className="px-6 py-4">
                  Song
                </th>
                <th scope="col" className="px-6 py-4">
                  Artist
                </th>
                <th scope="col" className="px-6 py-4">
                  Year
                </th>
                <th scope="col" className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="whitespace-nowrap px-6 py-4">
                  The Sliding Mr. Bones (Next Stop, Pottersville)
                </td>

                <td className="whitespace-nowrap px-6 py-4">Malcolm Lockyer</td>

                <td className="whitespace-nowrap px-6 py-4">1961</td>

                <td className="whitespace-nowrap px-6 py-4">Delete</td>
              </tr>
              <tr>
                <td className="whitespace-nowrap px-6 py-4">Witchy Woman</td>

                <td className="whitespace-nowrap px-6 py-4">The Eagles</td>

                <td className="whitespace-nowrap px-6 py-4">1961</td>

                <td className="whitespace-nowrap px-6 py-4">Delete</td>
              </tr>
              <tr>
                <td className="whitespace-nowrap px-6 py-4">Shining Star</td>

                <td className="whitespace-nowrap px-6 py-4">
                  Earth, Wind, and Fire
                </td>

                <td className="whitespace-nowrap px-6 py-4">1961</td>

                <td className="whitespace-nowrap px-6 py-4">Delete</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ExpenseTracker;
