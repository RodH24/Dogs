import CardsContainer from "../../Components/CardsContainer/CardsContainer";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getDogs, getTemperaments } from "../../redux/actions";
import { useSelector } from "react-redux";
import SearchBar from "../../Components/SearchBar/SearchBar";
import Paginate from "../Paginate/Paginate";


const Home = ()=>{

    const dispatch = useDispatch();
    const allCharacters = useSelector ((state) => state.dogs)
    const [currentPage, setCurrentPage] = useState(1)
    const [charactersPerPage, setCharactersPerPage]= useState(10)
    const indexOfLastCharacter = currentPage * charactersPerPage
    const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage
    const currentCharacters = allCharacters.slice(indexOfFirstCharacter, indexOfLastCharacter)

    const paginate = (pageNumber) =>{
        setCurrentPage(pageNumber)
    }

    useEffect(()=>{
        dispatch(getDogs())
    },[])

    const dispatch2 = useDispatch();
    useEffect(()=> {
        dispatch2(getTemperaments())
    },[])
    
    function handleClick(e){
        e.preventDefault();
        dispatch(getDogs());
    }
    
    
    return(
        <>
            <SearchBar />
            <Paginate 
            charactersPerPage={charactersPerPage}
            allCharacters={allCharacters.length}
            paginate = {paginate}
            />
            <CardsContainer />
        </>
    )
}

export default Home;