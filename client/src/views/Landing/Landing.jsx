import styles from "./Landing.module.css";
import { Link } from "react-router-dom";

const Landing = (props)=>{
    return(
        <div class={styles.div_screen}>
        <Link to="/home">
                <button className={styles.button} onClick={() => props.getDogs()} >HOME</button>
            </Link>
        </div>
    )
}

export default Landing;