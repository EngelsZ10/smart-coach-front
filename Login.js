import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate here
import Validation from "./LoginValidation";
import axios from 'axios';





function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate();

    const [errors,setErrors] = useState({})

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
      }
      
      const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = Validation(values);
        setErrors(validationErrors);
    
        if (validationErrors.email === "" && validationErrors.password === "") {
            axios.post("http://localhost:8081/login", values)
                .then(res => {
                    if (res.data === "Success") {
                        navigate("/home");
                    } else {
                        alert("Datos incorrectos y/o registro inexistente");
                    }
                })
                .catch(err => console.log(err));
        }
    }
    
  return (
    <div className='d-flex justify-content-center align-items-center bg-warning vh-100'>
    <div className='bg-white p-3 rounded w-25'>
        <h2>Ingresar a Smart Coach</h2>
        <form action='' onSubmit={handleSubmit}>
            <div className='mb-3'> 
                <label htmlFor="email"><strong>Email</strong></label>
                <input type="email" placeholder='Ingrese Email' name="email"
                onChange={handleInput}  className='form-control rounded-0'/>
                {errors.email && <span className='text-danger'>{errors.email}</span>}


            </div>

            <div className='mb-3'> 
                <label htmlFor="password"><strong>Password</strong></label>
                <input type="password" placeholder='Ingrese password' name="password"
                onChange={handleInput}  className='form-control rounded-0' />
                {errors.password && <span className='text-danger'>{errors.password}</span>}

            </div>
            <button type="submit"className='btn btn-success w-100 rounded-0'  > <strong>Ingresar</strong></button>
            <p>De acuerdo con nuestros terminos y condiciones</p>
            <Link to = "/signup"className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Registrarse</Link>

        </form>
    </div>
</div>
  )
}

export default Login