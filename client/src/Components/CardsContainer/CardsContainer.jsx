import { useSelector } from "react-redux"
import Card from "../Card/Card"
import style from "./CardsContainer.module.css"
import { getTemperaments } from "../../redux/actions"
import { useDispatch } from "react-redux"

const CardsContainer = ()=>{
    const users = useSelector(state=>state.filter)
    const temperaments = useSelector(state=>state.temperaments)
    const dispatch = useDispatch();
    //const filt = 
    

    return(
        <>
        <label>Temperamentos</label>
            <select>
                <option>Todos</option>
                {temperaments?.map((temp) => {
                    return (<option value={temp.name} key={temp.id}>{temp.name}</option>)
                })}
            </select>
           <button onClick={()=>{
            dispatch(getTemperaments())
            }}>Filtrar</button>

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