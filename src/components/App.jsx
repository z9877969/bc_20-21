import { Component } from "react";
import SearchForm from "../components/SearchForm/SearchForm";
import NewsPage from "./NewsPage/NewsPage";
import Modal from "../components/Modal/Modal";

class App extends Component {
  state = {
    searchInput: "", // cat -> ""
    isModal: false,
  };

  updateSearchInput = (searchInput) => {
    this.setState({ searchInput: searchInput });
  };

  render() {
    const { searchInput, isModal } = this.state;
    return (
      <div className="App">
        <SearchForm updateSearchInput={this.updateSearchInput} />
        <NewsPage searchInput={searchInput} />
        {isModal && <Modal />}
      </div>
    );
  }
}

export default App;

// class ErrorTest extends Component {
//   state = {
//     a: 0, // stateLink-1 -> stateLink-2 -. stateLink-3
//     hasError: false,
//   };

//   componentDidMount() {
//     this.setState({ a: 25 });
//   }

//   shouldComponentUpdate(nextProps, nextState) {
//     this.setState();
//   }

//   componentDidUpdate(prevProps, prevState) {
//     this.setState({ a: 25 });
//   }

//   componentDidCatch(error, info) {
//     // Якщо метод був викликаний, отже, є помилка!
//     // Встановлюємо стан
//     this.setState({ hasError: true });
//     // Також можна надіслати звіт про помилку вашому аналітичному сервісу
//     // logErrorToMyService(error, info);
//   }

//   render() {
//     const { hasError } = this.state;
//     if (hasError) {
//       return <h1>Error</h1>;
//     } else {
//       return this.props.children;
//     }
//   }
// }

// const TestComponent = () => {
//   return (
//     <ErrorTest>
//       <ul>
//         <li>Item-1</li>
//         <li>Item-2</li>
//         <li>Item-3</li>
//       </ul>
//     </ErrorTest>
//   );
// };
