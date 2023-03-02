import { useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "./CardsContainer.module.css";
import { getFiltT, getSort } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";

const CardsContainer = () => {
  const users = useSelector((state) => state.paginated);
  const temperaments = useSelector((state) => state.temperaments);
  const dispatch = useDispatch();
  const [filt, setfilt] = useState("Todos");
  const [sort, setsort] = useState("asc"); 

  return (
    <>
      <label>Temperamentos</label>
      <select
        onChange={(event) => {
          setfilt(event.target.value);
        }}
      >
        <option>Todos</option>
        {temperaments?.map((temp) => {
          return (
            <option value={temp.name} key={temp.id}>
              {temp.name}
            </option>
          );
        })}
      </select>
      <button
        onClick={() => {
          dispatch(getFiltT(filt));
        }}
      >
        Filtrar
      </button>

      <label>Ordenar Por: </label>
      <select
        onChange={(event) => {
        const auxsort = event.target.value;
          setsort(event.target.value);
          dispatch(
            getSort({
              isAsc: auxsort === "asc" || auxsort === "bylw",
              isByName: auxsort === "asc" || auxsort === "desc",
            })
          );
        }}
      >
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
        <option value="bylw">Menor Peso</option>
        <option value="bymw">Mayor Peso</option>
      </select>

      <div className={style.container}>
        {users.map((user) => {
          return (
            <Card
              id={user.id}
              image={user.image}
              name={user.name}
              height={user.height}
              weight={user.weight}
              life_span={user.life_span}
              temperament={user.temperament}
            />
          );
        })}
      </div>
    </>
  );
};

export default CardsContainer;
