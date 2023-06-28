import React, { useState } from "react";
import "../styles/AgregarTarea.css";
import { v4 as uuidv4 } from "uuid";

function AgregarTarea(props) {

    const [input, setInput] = useState("");

    const manejarCambio = e => {
        setInput(e.target.value);
    };

    const manejarEnvio = e => {
        e.preventDefault();

        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        };

        props.onSubmit(tareaNueva);
    };

    return (
        <form 
        className="agregar-tarea"
        onSubmit={manejarEnvio}>
            <input 
            className="agregar-input"
            type="text"
            placeholder="Escribe una tarea"
            name="texto"
            onChange={manejarCambio} />
            <button className="agregar-btn">Agregar Tarea</button>
        </form>
    );
}

export default AgregarTarea;