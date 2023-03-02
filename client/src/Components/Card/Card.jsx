import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getOneDog } from "../../redux/actions";
import style from "./Card.module.css";

const Card = (props) => {
  const dispatch = useDispatch();
  return (
    <div className={style.card}>
      <p>
        <img className={style.img} src={props.image}></img>
      </p>
      <p>Nombre: {props.name}</p>
      {props.temperament ? <p>Temperamentos: {props.temperament}</p> : null}
      <p>Altura: {props.height}</p>
      <p>Peso: {props.weight}</p>
      <p>Años de vida: {props.life_span}</p>
      { props.temperament ? <Link to={"/detail/" + props.id}>
        <button>
          Detalle
        </button>
      </Link> : null}
      
    </div>
  );
};
export default Card;
