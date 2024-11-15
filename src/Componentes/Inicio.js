import React, { useEffect, useState } from "react";
import { Container, Card, ListGroup, Button} from "react-bootstrap";

export const Inicio =() =>{
    const [nombre, setNombre] = useState("")
    const [listaNombre, setListaNombre] = useState([])

    useEffect(() =>{
        const actividadesGuardado = localStorage.getItem("actividades")
        if (actividadesGuardado){
            setListaNombre(JSON.parse(actividadesGuardado))
        }
    },[])

    const handleChange = (e) =>{
        setNombre(e.target.value)
    }

    const limpiarStorage = () =>{
        localStorage.removeItem("actividades");
        setListaNombre([])
    }
    
    return (
        <Container>
            <h2>Lista de Actividades</h2>
               
            <ListGroup>
                {listaNombre.map((nom, index) => (
                <ListGroup.Item key={index}>
                {nom}
            </ListGroup.Item>
            ))}
            
            </ListGroup>
                <Button 
                    className="w-30" 
                    variant="secondary" 
                    onClick={limpiarStorage}
                >
                Eliminar lista
            </Button>
           
        </Container>
    );
}