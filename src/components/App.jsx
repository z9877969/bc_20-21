import SearchForm from "../components/SearchForm/SearchForm";
import NewsPage from "./NewsPage/NewsPage";
// import Modal from "../components/Modal/Modal";

const App = () => {
  return (
    <div className="App">
      <SearchForm />
      <NewsPage />
      {/* <Modal /> */}
    </div>
  );
};

export default App;
