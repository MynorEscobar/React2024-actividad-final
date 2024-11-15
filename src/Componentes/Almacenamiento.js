import React, { useEffect, useState } from "react";

export const Almacenamiento = () =>{
    const [actividad, setActividad] = useState("")
    const [listaActividad, setListaActividad] = useState([])


    useEffect(() =>{
        
        const actividadesGuardado = localStorage.getItem("actividades")
        if (actividadesGuardado){
            setListaActividad(JSON.parse(actividadesGuardado))
        }
    },[])

    const handleChange = (e) =>{
        setActividad(e.target.value)
    }

    const guardarActividad = () =>{
        
        if(actividad.trim() == "") return

        const nuevaLista = [...listaActividad, actividad]
        setListaActividad(nuevaLista)
        localStorage.setItem("actividades", JSON.stringify(nuevaLista))
        setActividad("")

    }

    return(
        <div>
            <h1>Guardar en localStorage</h1>
            <input type="text" value={actividad} onChange={handleChange} placeholder="ingresa una actividad"></input>
            <button onClick={guardarActividad}>Guardar</button>
            <br></br>
            <h2>Lista de actividades</h2>
            <ul>
                {listaActividad.map((nom, index) =>(
                    <li key={index}>{nom}</li>
                ))}
            </ul>
        </div>
    )
}