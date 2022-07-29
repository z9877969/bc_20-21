import { Component } from "react";
import PropTypes from "prop-types";
import Filter from "../Filter/Filter";
import ProductsList from "../ProductsList/ProductsList";
import products from "../../data/products.json";
import filterOptions from "../../data/filterOptions.json";

const mainStyles = { display: "flex", justifyContent: "center" };

class Main extends Component {
  state = {
    filter: {
      apple: true,
      samsung: false,
      xiaomi: false,
      zte: false,
      huawei: false,
    },
    // qwe: {
    //   applenew: true,
    //   samsungnew: false,
    //   xiaominew: false,
    //   ztenew: false,
    //   huaweinew: false,
    // },
  };

  handleChange = (e) => {
    console.log(e.target.name);
    console.dir(e.target);
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      this.setState((prev) => ({
        [name]: { ...prev[name], [value]: checked },
      }));
      return;
    }
    this.setState({ [name]: value });
  };

  filterProductsByModel = () => {
    const { filter } = this.state;
    const filerValuesArr = Object.values(filter);
    // if(!filerValuesArr.includes(true)) return products;
    // if (filerValuesArr.every((el) => !el)) return products;
    // return products.filter((el) => filter[el.type] === true);
    return filerValuesArr.every((el) => !el)
      ? products
      : products.filter((el) => filter[el.type]);
  };

  render() {
    const { handleAddProductToCart } = this.props;
    // const { filter } = this.state;

    const filterdProducts = this.filterProductsByModel();
    return (
      <main style={mainStyles}>
        <Filter
          options={filterOptions}
          // filter={filter}
          form={this.state}
          handleChange={this.handleChange}
        />
        <ProductsList
          products={filterdProducts}
          handleAddProductToCart={handleAddProductToCart}
        />
      </main>
    );
  }
}

Main.propTypes = {
  handleAddProductToCart: PropTypes.func.isRequired,
};

export default Main;
