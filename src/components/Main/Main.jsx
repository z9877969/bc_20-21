import Filter from "../Filter/Filter";
import ProductsList from "../ProductsList/ProductsList";
import products from "../../data/products.json";
import filterOptions from "../../data/filterOptions.json";

const Main = () => {
  return (
    <main>
      <Filter options={filterOptions} />
      <ProductsList products={products} />
      {/* {ProductsList({ a: 21, b: "qwe", c: true })} */}
    </main>
  );
};

export default Main;
