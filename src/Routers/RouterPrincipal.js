import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { Inicio } from "../Componentes/Inicio";
import { NuevoElemento } from "../Componentes/NuevoElemento";
import {Container} from "react-bootstrap";

export const RouterPrincipal = () =>{
    return (
        <BrowserRouter>
        <Container>
            <h1 className="text-center">Menú Principal</h1>
            <hr/>
            <div className="row">
                 <NavLink to="/" className="col btn btn-primary btn-lg">Inicio</NavLink>
                 <NavLink to="/NuevoElemento" className=" col btn btn-secondary btn-lg" >Agregar Actividad</NavLink>
            </div>
            <hr/>
            <section>
            <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/NuevoElemento" element={<NuevoElemento />} />
            </Routes>
            </section>

            </Container>           
        </BrowserRouter>
    );
}