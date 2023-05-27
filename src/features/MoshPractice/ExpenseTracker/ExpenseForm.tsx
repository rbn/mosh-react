import React from "react";
import categories from "./categories";
import Button from "../../../components/ui/Button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

interface Props {
  onSubmit: (data: ExpenseFormData) => void;
}

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description should be at least 3 characters" })
    .max(50),
  amount: z
    .number({ invalid_type_error: "number is required" })
    .min(0.01)
    .max(100_000),
  category: z.enum(categories, {
    errorMap: () => ({
      message: "Category is required",
    }),
  }),
});

type ExpenseFormData = z.infer<typeof schema>;

const ExpenseForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
    >
      <div className="">
        <label htmlFor="description">Description</label>
        <input
          {...register("description")}
          type="text"
          id="description"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.description && (
          <p className="text-red-600">{errors.description.message}</p>
        )}
      </div>
      <div className="">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          id="amount"
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.amount && (
          <p className="text-red-600">{errors.amount.message}</p>
        )}
      </div>
      <div className="">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <br />
        <select
          {...register("category")}
          name="category"
          id=""
          className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value=""></option>
          {categories.map((val) => (
            <option key={val} value={val}>
              {val}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-red-600">{errors.category.message}</p>
        )}
      </div>
      <Button>Submit</Button>
    </form>
  );
};

export default ExpenseForm;
