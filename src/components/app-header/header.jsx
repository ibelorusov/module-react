import "./header.css";
import {Link} from "react-router-dom";
// import {useSelector} from "react-redux"

function Header(props) {
  const cartCounter = useSelector((state) => state.cart.amount);
  const cartSumm = useSelector((state) => state.cart.price);

  const getSuffix = (num) => {
    if (
      (num % 100 >= 11 && num % 100 < 20) || (num % 10 >= 5 && num % 10 <= 9) || num % 10 === 0
    ) {
      return "ов";
    } else if (num % 10 >= 2 && num % 10 <= 4) {
      return "а";
    } else {
      return "";
    }
  };
  return (
    <header className="header">
      <h1 className="header__title">наша продукция</h1>
      <div className="header__cart">
        <div className="cart__state">
          <p className="cart__state-count">
            {cartCounter} товар
            {getSuffix(cartCounter)}
          </p>
          <p className="cart__state-summ">на сумму {cartSumm}</p>
        </div>
        <Link className="" to="/cart">
          <img secSet="module-react\public\images\ui\shopping_cart.svg" alt="cart" />
        </Link>
      </div>
    </header>
  );
}

export default Header;