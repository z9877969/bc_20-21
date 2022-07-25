import ProductsListItem from "../ProductsListItem/ProductsListItem";
import "./ProductsList.css";
import products from "../../data/products.json";

// const arr = ["321 ", "321 ", "321 ", "321 "];

console.log(products);

const ProductsList = () => {
  return (
    <section>
      <ul className="products">
        {products.map((el) => {
          return (
              <ProductsListItem
                key={el.id}
                url={el.url}
                model={el.model}
                price={el.price}
                currency={el.currency}
              />
          );
        })}
      </ul>
    </section>
  );
};

export default ProductsList;
