import Filter from "../Filter/Filter";
import ProductsList from "../ProductsList/ProductsList";
import products from "../../data/products.json";
import filterOptions from "../../data/filterOptions.json";

const mainStyles = { display: "flex", justifyContent: "center" };

const Main = () => {
  return (
    <main style={mainStyles}>
      <Filter options={filterOptions} />
      <ProductsList products={products} />
    </main>
  );
};

export default Main;
