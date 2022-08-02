import { Component } from "react";
import s from "./SearchForm.module.scss";

class SearchForm extends Component {
  state = {
    input: "",
  };

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { input } = this.state;
    this.props.updateSearchInput(input);
  };

  render() {
    const { input } = this.state;
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <input
          className={s.input}
          type="text"
          value={input}
          placeholder="Search..."
          onChange={this.handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default SearchForm;
