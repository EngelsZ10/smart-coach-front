import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate here
import Validation from "./LoginValidation";
import axios from "axios";
import "./Login.css";
import "./data/variables";

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
    categoria: "",
  });
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categorias] = useState([
    "Baby",
    "Falcons",
    "Flag",
    "Hornets",
    "Intermedia",
    "Irons",
    "Juvenil",
    "Master",
    "Ponys",
    "Rabbits",
    "Tauros",
    "Admin",
  ]);

  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    if (event.target.name === "categorias") {
      setSelectedCategory(event.target.value);
    } else {
      setValues((prev) => ({
        ...prev,
        [event.target.name]: event.target.value,
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = Validation(values);
    setErrors(validationErrors);
    //navigate("/home"); //borrar después

    if (validationErrors.email === "" && validationErrors.password === "") {
      axios
        .get(backlink + "/login", {
          params: {
            email: values.email,
            pass: values.password,
            equipo: selectedCategory,
          },
        })
        .then((res) => {
          if (res.data.response === true) {
            localStorage.setItem("credenciales", {
              email: values.email,
              pass: values.password,
              equipo: selectedCategory,
            });
            localStorage.setItem("adminStatus", res.data.Admin);
            navigate("/home");
          } else {
            alert("Datos incorrectos y/o registro inexistente");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="background-image">
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="bg-white p-3 rounded w-25">
          <h2>Ingresar a Smart Coach</h2>
          <form action="" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email">
                <strong>Email</strong>
              </label>
              <input
                type="email"
                placeholder="Ingrese Email"
                name="email"
                onChange={handleInput}
                className="form-control rounded-0"
              />
              {errors.email && (
                <span className="text-danger">{errors.email}</span>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="password">
                <strong>Password</strong>
              </label>
              <input
                type="password"
                placeholder="Ingrese password"
                name="password"
                onChange={handleInput}
                className="form-control rounded-0"
              />
              {errors.password && (
                <span className="text-danger">{errors.password}</span>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="categorias">
                <strong>Categorías de Smart Coach</strong>
              </label>
              <select
                name="categorias"
                className="form-control mb-3"
                onChange={handleInput}
                value={selectedCategory}
              >
                <option value="">Selecciona una categoría</option>
                {categorias.map((elemento, index) => (
                  <option key={index} value={elemento}>
                    {elemento}
                  </option>
                ))}
              </select>
              {errors.categorias && (
                <span className="text-danger">{errors.categorias}</span>
              )}
            </div>

            <button type="submit" className="btn btn-success w-100 rounded-0">
              {" "}
              <strong>Ingresar</strong>
            </button>
            <p>De acuerdo con nuestros terminos y condiciones</p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
