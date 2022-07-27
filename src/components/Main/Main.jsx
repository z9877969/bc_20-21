import PropTypes from "prop-types";
import Filter from "../Filter/Filter";
import ProductsList from "../ProductsList/ProductsList";
import products from "../../data/products.json";
import filterOptions from "../../data/filterOptions.json";

const mainStyles = { display: "flex", justifyContent: "center" };

const Main = ({ handleAddProductToCart }) => {
  return (
    <main style={mainStyles}>
      <Filter options={filterOptions} />
      <ProductsList
        products={products}
        handleAddProductToCart={handleAddProductToCart}
      />
    </main>
  );
};

Main.propTypes = {
  handleAddProductToCart: PropTypes.func.isRequired,
};

export default Main;
