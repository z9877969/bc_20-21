import ProductsListItem from "../ProductsListItem/ProductsListItem";
import { ProductsListStyled } from "./ProductsList.styled";
// import "./Products.css";

const ProductsList = (props) => {
  const { products } = props;
  return (
    <section>
      <ProductsListStyled>
        {products.map((el) => (
          <ProductsListItem key={el.id} {...el} />
        ))}
      </ProductsListStyled>
    </section>
  );
};

export default ProductsList;
