import CardsContainer from "../../Components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDogs, getTemperaments } from "../../redux/actions";
import { useSelector } from "react-redux";


const Home = ()=>{

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getDogs())
    },[])

    const dispatch2 = useDispatch();
    useEffect(()=> {
        dispatch2(getTemperaments())
    },[])
    console.log(getDogs);
    const temperaments = useSelector(state=>state.temperaments)
    
    
    return(
        <>
            <CardsContainer />
        </>
    )
}

export default Home;