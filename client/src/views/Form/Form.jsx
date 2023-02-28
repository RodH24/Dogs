import axios from "axios";
import { useState } from "react";

const Form = ()=>{


    const [form,setForm] = useState({
        Name:"",
        min_Height:"",
        max_Height:"",
        min_Weight:"",
        max_Weight:"",
        min_Life_Span:"",
        max_Life_Span:""
    })

    const [errors, setErrors] = useState({
        Name:"",
        min_Height:"",
        max_Height:"",
        min_Weight:"",
        max_Weight:"",
        min_Life_Span:"",
        max_Life_Span:""
    })


    const changeHandler = (event) => {        
        const property = event.target.name;
        const value = event.target.value;

        validate({...form, [property]:value})
        setForm({...form,[property]:value})
    }

    const validate = (form) => {
        if (form.name==="") setErrors({...errors,name:"Agregue un nombre"})
        else{
            setErrors({...errors,name:""})
        }

    }

    const submitHandler = (event) =>{
        event.preventDefault()
        axios.post("http://localhost:3001/pi/dogs", form)
        .then(res=>alert(res))
        .catch(err=>alert(err))
    }

    return(
        <form onSubmit={submitHandler}>
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