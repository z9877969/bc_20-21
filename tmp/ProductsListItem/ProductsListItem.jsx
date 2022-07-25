import PropTypes from "prop-types";
import "./ProductsListItem.css";

const ProductsListItem = (props) => {
  const { url, model, price, currency } = props;
  //    model, price, currency
  return (
    <li className="product">
      <img className="image" src={url} alt="" />
      <div className="descr">
        <h3 className="model">{model}</h3>

        {price ? (
          <>
            <span className="price">{price}</span>
            <span className="currency">{currency}</span>
          </>
        ) : (
          <span>Price is waiting</span>
        )}
      </div>
      <button className="btn-bye" type="button">
        Купить
      </button>
    </li>
  );
};

ProductsListItem.propTypes = {
  url: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

ProductsListItem.defaultProps = {
  price: "no price",
};

export default ProductsListItem;
