import categories from "../categories";
interface Props {
  onSelect: (category: string) => void;
}
const ExpenseFilter = ({ onSelect }: Props) => {
  return (
    <select
      className="form-select w-50"
      onChange={(event) => onSelect(event.target.value)}
    >
      <option value="">All Categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
