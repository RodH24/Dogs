import { useSelector } from "react-redux"
import Card from "../Card/Card"
import style from "./CardsContainer.module.css"

const CardsContainer = ()=>{
    const users = useSelector(state=>state.filter)
        

    return(
        <>
        <div className={style.container}>
            {users.map(user=>{
                return <Card 
                    id={user.id}
                    image={user.image}
                    name={user.name}
                    height={user.height}
                    weight={user.weight}
                    life_span={user.life_span}
                    temperament={user.temperament}
                />
            })}
        </div>
        </>
    )
}

export default CardsContainer