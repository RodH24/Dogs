import axios from "axios";
import { useState } from "react";

const Form = ()=>{


    const [form,setForm] = useState({
        name:"",
        min_height:"",
        max_height:"",
        min_weight:"",
        max_weight:"",
        min_life_span:"",
        max_life_span:"",
        image: ""
    })

    const [errors, setErrors] = useState({
        name:"",
        min_height:"",
        max_height:"",
        min_weight:"",
        max_weight:"",
        min_life_span:"",
        max_life_span:"",
        image: ""
    })


    const changeHandler = (event) => {        
        const property = event.target.name;
        const value = event.target.value;

        validate({...form, [property]:value})
        setForm({...form,[property]:value})
    }

    const validate = (form) => {
        console.log(form);
        if (form.name==="") setErrors({...errors,name:"Agregue un nombre"})
        else setErrors({...errors,name:""})
        if (form.min_height==="") setErrors({...errors,min_height:"Agregue una altura minima"})
        else setErrors({...errors,min_height:""})
        if (form.max_height==="") setErrors({...errors,max_height:"Agregue una altura maxima"})
        else setErrors({...errors,max_height:""})
        if (form.min_weight==="") setErrors({...errors,min_weight:"Agregue un peso minimo"})
        else setErrors({...errors,min_weight:""})
        if (form.max_weight==="") setErrors({...errors,max_weight:"Agregue un peso maximo"})
        else setErrors({...errors,max_weight:""})
        if (form.min_life_span==="") setErrors({...errors,min_life_span:"Agregue un tiempo de vida minima"})
        else setErrors({...errors,min_life_span:""})
        if (form.max_life_span==="") setErrors({...errors,max_life_span:"Agregue un tiempo de vida maximo"})
        else setErrors({...errors,max_life_span:""})
        console.log(errors);
    }

    const submitHandler = (event) =>{
        event.preventDefault()
        axios.post("http://localhost:3001/pi/dogs", form)
        .then(res=>alert("Se creo correctamente"))
        .catch(err=>alert(err))
    }

    return(
        <form onSubmit={submitHandler}>
            <div>
                <label>Picture Url: </label>
                <input type="text" value={form.image} onChange={changeHandler} name="image"/>
                <span>{errors.image}</span>
            </div>
            <div>
                <label>Name: </label>
                <input type="text" value={form.name} onChange={changeHandler} name="name"/>
                <span>{errors.name}</span>
            </div>
            <div>
                <label>Min Height: </label>
                <input type="text" value={form.height} onChange={changeHandler} name="min_height"/>
                <span>{errors.min_height}</span>
            </div>
            <div>
                <label>Max Height: </label>
                <input type="text" value={form.height} onChange={changeHandler} name="max_height"/>
                <span>{errors.max_height}</span>
            </div>
            <div>
                <label>Min Weight: </label>
                <input type="text" value={form.weight} onChange={changeHandler} name="min_weight"/>
            </div>
            <div>
                <label>Max Weight: </label>
                <input type="text" value={form.weight} onChange={changeHandler} name="max_weight"/>
            </div>
            <div>
                <label>Min Life Span: </label>
                <input type="text" value={form.life_span} onChange={changeHandler} name="min_life_span"/>
            </div>
            <div>
                <label>Max Life Span: </label>
                <input type="text" value={form.life_span} onChange={changeHandler} name="max_life_span"/>
            </div>

            <button type="submit">CREATE</button>
        </form>
    )
}

export default Form;