import style from "./Card.module.css"
const Card = (props)=>{
    return(
        <div className={style.card}>
            <p><img className={style.img} src={props.image}></img></p>
            <p>Nombre: {props.name}</p>
            <p>Temperamentos: {props.temperament}</p>
            {/* <p>Altura: {props.height}</p> */}
            <p>Peso: {props.weight}</p>
            {/* <p>Años de vida: {props.life_span}</p> */}
        </div>
    )
}
export default Card;