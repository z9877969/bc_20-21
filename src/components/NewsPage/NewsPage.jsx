import { Component } from "react";
import SearchForm from "../SearchForm/SearchForm";
import NewsGallery from "../NewsGallery/NewsGallery";
import Modal from "../Modal/Modal";

class NewsPage extends Component {
  state = {
    searchInput: "",
    modalInfo: null,
  };

  updateSearchInput = (searchInput) => {
    this.setState({ searchInput: searchInput });
  };

  setModalInfo = (modalInfo = null) => {
    this.setState({ modalInfo });
  };

  render() {
    const { searchInput, modalInfo } = this.state;
    return (
      <div className="App">
        <SearchForm updateSearchInput={this.updateSearchInput} />
        <NewsGallery
          searchInput={searchInput}
          setModalInfo={this.setModalInfo}
        />
        {modalInfo && (
          <Modal modalInfo={modalInfo} setModalInfo={this.setModalInfo} />
        )}
      </div>
    );
  }
}

export default NewsPage;
