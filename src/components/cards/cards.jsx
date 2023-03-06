import "./cards.css";
import Item from "../card-item/item";
// import {useDispatch, useSelector} from "react-redux";

function Cards () {
  const products = useSelector((state) => {
    return state.products;
  })

  const dispath = useDispatch();

  const handleClick = (id, image, title, price) => {
    dispath ({
      type:"ADD_TO_CART",
      payload: {
        price:price,
        product: {id: id, image: image, title: title, price: price},
      },
    });
  };
  return (
    <section className="cards">
      {products.map((item) => (
        <div key={item.id} className="cards">
          <Item
          image={"./images\cards" + item.img}
          name={item.name}
          description={item.description}
          price={item.price}
          weight={item.weight}
          buttonImage="./image/ui/button_add.svg"
          clickFunction={(e) =>
          handleClick(item.id, item.img, item.name, item.price)
        }
        />
        </div>
      ))}
    </section>
  );
}

export default Cards;