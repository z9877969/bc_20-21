const Header = () => {
  return (
    <header>
      <a href="#">Logo</a>
      <div className="user-info">
        <p className="user-item">
          <span>Bill</span>
          <span>user@mail.com</span>
        </p>
      </div>
      <div className="cart-info">
        <button type="button">Cart</button>
        <p className="cart-descr">ProdNum: 0</p>
      </div>
    </header>
  );
};

export default Header;
