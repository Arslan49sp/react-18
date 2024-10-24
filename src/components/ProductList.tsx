import { useEffect, useState } from "react";

interface Props {
  category: string;
}
const ProductList = ({ category }: Props) => {
  const [products, setProducts] = useState<string[]>([]);
  useEffect(() => {
    console.log("Fetching the products in " + category);
    setProducts(["chaddi", "bunyaan"]);
  }, [category]);

  return <div>ProductList</div>;
};

export default ProductList;
