import PropTypes from "prop-types";
import ProductsListItem from "../ProductsListItem/ProductsListItem";
import { ProductsListStyled } from "./ProductsList.styled";
// import "./Products.css";

const ProductsList = (props) => {
  const { products, handleAddProductToCart } = props;
  return (
    <section>
      <ProductsListStyled>
        {products.map((el) => (
          <ProductsListItem
            key={el.id}
            {...el}
            handleAddProductToCart={handleAddProductToCart}
          />
        ))}
      </ProductsListStyled>
    </section>
  );
};

ProductsList.propTypes = {
  products: PropTypes.array.isRequired,
  handleAddProductToCart: PropTypes.func.isRequired,
};

export default ProductsList;
