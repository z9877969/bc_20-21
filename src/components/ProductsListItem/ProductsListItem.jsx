import {
  StyledItem,
  StyledDescr,
  StyledBtnBye,
} from "./ProductsListItem.styled";

const ProductsListItem = ({
  url,
  model,
  price,
  currency,
  id,
  handleAddProductToCart,
}) => {
  return (
    <StyledItem>
      <img className="image" src={url} alt={model} />
      <div>
        <StyledDescr>
          <h3 className="model">{model}</h3>
          <>
            <span className="price">{price ? price : 0}</span>
            <span className="currency">{currency}</span>
          </>
        </StyledDescr>
        <StyledBtnBye
          type="button"
          price={price}
          onClick={() =>
            handleAddProductToCart({ id, url, model, price, currency })
          }
        >
          {price ? "Купити" : "Продано"}
        </StyledBtnBye>
      </div>
    </StyledItem>
  );
};

export default ProductsListItem;
