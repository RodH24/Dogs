import { Link } from "react-router-dom"
import style from "./NavBar.module.css"

const NavBar = () =>{
    return(
        <div className={style.mainContainer}>
            <Link to="/detail">DETAIL</Link>
            <Link to="/form">NUEVO PERRO</Link>
        </div>
    )
}

export default NavBar;