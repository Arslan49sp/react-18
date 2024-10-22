import categories from "../categories";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description  should be atleast 3 chrachters" })
    .max(100),
  amount: z
    .number({ invalid_type_error: "Enter the amount" })
    .min(0.01)
    .max(1000),
  categories: z.enum(categories, {
    errorMap: () => ({ message: "Category is required" }),
  }),
});

type ExpenseFormData = z.infer<typeof schema>;
const ExpenseForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });
  return (
    <form onSubmit={handleSubmit((data) => console.log(data))} className="w-50">
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          id="description"
          type="text"
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          id="amount"
          type="number"
          className="form-control"
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="categories" className="form-label">
          Category
        </label>
        <select
          {...register("categories")}
          name=""
          id="categories"
          className="form-select"
        >
          <option value="">Choose</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.categories && (
          <p className="text-danger">{errors.categories.message}</p>
        )}
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default ExpenseForm;
