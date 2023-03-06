import "./item.css";

function Item(props) {
  return (
    <>
    <img className="card__image" srcSet={props.image} alt={props.name} />
    <h2 className="card__header">{props.name}</h2>
    {props.description ? (
      <p className="card__description">{props.description}</p>
    ) : (
      ""
    )}

    <p className="card__info">
      <span className="card__price">{props.price}₽</span>
      {props.weight ? (
        <span className="card__weight"> / {props.weight}</span>
      ) : (
      )}
    </p>
    <button onClick={props.clickFunction} className="card__button-add">
      <img alt="" srcset={props.buttonImage} />
    </button>
    </>
  );
}
export default Item;