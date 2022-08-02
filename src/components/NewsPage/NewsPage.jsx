import { Component } from "react";
import Button from "../Button/Button";
import NewsList from "../NewsList/NewsList";
import { getSearchNews, getTopNews } from "../../utils/newsApi";
// import news from "../../data/news.json";

class NewsPage extends Component {
  state = {
    news: [], // 10 -> 20 -> 30 -> 37
    totalResults: 0, // 37
    page: 1,
    searchInput: "", //
    isLoading: false,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.searchInput !== prevState.searchInput) {
      return { page: 1, searchInput: nextProps.searchInput };
    }
    return null;
  }

  componentDidMount() {
    const { page } = this.state;
    this.setState({ isLoading: true });
    getTopNews(page)
      .then(({ articles, totalResults }) => {
        this.setState({ news: articles, totalResults: totalResults });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => this.setState({ isLoading: false }));
  }

  componentDidUpdate(prevProps, prevState) {
    const { page, searchInput } = this.state;
    
    if (
      this.state.page !== prevState.page &&
      searchInput
    ) {
      this.setSearchNews()
    }
    if (this.state.page !== prevState.page && !searchInput) {
      this.setState({ isLoading: true });
      getTopNews(page)
        .then(({ articles, totalResults }) =>
          this.setState((prev) => ({
            news: [...prev.news, ...articles],
          }))
        )
        .catch((err) => console.log(err))
        .finally(() => this.setState({ isLoading: false }));
    }
  }

  setSearchNews = () => {
    const { page, searchInput } = this.state;
    this.setState({ isLoading: true });
    getSearchNews(page, searchInput)
      .then(({ articles, totalResults }) => {
        this.setState((prev) => ({
          news: page === 1 ? articles : [...prev.news, ...articles],
          totalResults,
        }));
      })
      .catch((err) => console.log(err))
      .finally(() => this.setState({ isLoading: false }));
  };

  updatePage = () => {
    this.setState((prev) => ({ page: prev.page + 1 }));
  };

  render() {
    const { news, totalResults, isLoading } = this.state;
    return (
      <>
        <NewsList news={news} />

        {isLoading && <h1>Loading...</h1>}
        {news.length > 0 && news.length < totalResults && (
          <Button cbOnClick={this.updatePage} />
        )}
      </>
    );
  }
}

export default NewsPage;
