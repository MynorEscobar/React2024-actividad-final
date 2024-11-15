import React, { useEffect, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

export const NuevoElemento = () => {
    const [actividad, setActividad] = useState("")
    const [listaactividad, setListaActividad] = useState([])


    useEffect(() => {

        const actividadsGuardado = localStorage.getItem("actividades")
        if (actividadsGuardado) {
            setListaActividad(JSON.parse(actividadsGuardado))
        }
    }, [])

    const handleChange = (e) => {
        setActividad(e.target.value)
    }

    const guardaractividad = () => {
       
        if (actividad.trim() == "") return

        const nuevaLista = [...listaactividad, actividad]
        setListaActividad(nuevaLista)
        localStorage.setItem("actividades", JSON.stringify(nuevaLista))
        setActividad("")

    }



    return (
        <Container className="mt-4">
            <h2 className="text-center">Guardar Actividad</h2>
            <Form className="mt-3">
                <section className="card">
                    <div className="card-body">
                        <div className="mb-3">
                            <Form.Group controlId="actividadInput">


                                <Form.Control
                                    type="text"
                                    value={actividad}
                                    onChange={handleChange}
                                    placeholder="Ingresa una actividad"
                                />

                            </Form.Group>
                        </div>
                        <div className="mb-3">

                            <Button
                                variant="primary"
                                onClick={guardaractividad}
                            >
                                Guardar Actividad
                            </Button>
                        </div>
                    </div>
                </section>

            </Form>
        </Container>
    );
}