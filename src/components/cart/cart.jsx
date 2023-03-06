import {Link} from "react-router-dom"; 
import "./cart.css";
import Item from "../card-item/item";
// import {useDispatch, useSelector} from "react-redux";

function Cart() {
  const product = useSelector ((state) => {
    return state.cart.position;
  });
  const dispatch = useDispatch();
  const handleClick = (index, price) => {
    dispatch ({
      type: "DELETE_TO_CART",
      payload: { price: price, index: index },
    });
  };

  const cartSumm = useSelector((state) => state.cart.price);
  return (
    <div className="cart">
      <div className="cart-header">
        <Link className="cart-header__link" to="/">
          <img
          alt=""
          className="cart-header__button"
          srcSet="module-react\public\images\ui\button_back.svg"
          />
        </Link>
        <h1>Корзина с выбранными товарами</h1>
      </div>
      <div className="cart-cards">
        {products.map((item, index) => {
          return (
            <div className="cart-cards__item" key={index}>
              <Item
              image={"module-react\public\images\cards" + item.image}
              name={item.title}
              price={item.price}
              buttonImage="module-react\public\images\ui\button_cancel.svg"
              clickFunction={(e) => {
                handleClick(index, item.price);
              }}
              />
            </div>
          );
        })}
      </div>
      <div className="cart-footer">
        <p className="cart-footer__text">
          Заказ на сумму:{" "}
          <span className="cart-footer__text-summ">{cartSumm} ₽</span>
        </p>
        <button className="cart-footer__button">Оформить заказ</button>
      </div>
    </div>
  );
}

export default Cart;