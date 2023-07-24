function Validation(values){
    let error= {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{5,}$/
    
    if(values.name === ""){
        error.name = "El usuario no puede estar vacío"
    }
    else{
        error.name = ""
    }

    if(values.email === ""){
        error.email = "El email no puede estar vacío"

    }
    else if(!email_pattern.test(values.email)){
        error.email = "El email no puede estar vacío"
    }else{
        error.email = ""
    }
    
    if(values.password === ""){
        error.password = "La contraseña no debe estar vacía"
    
    }else{
        error.password = ""
    }
    return error;

}

export default Validation;