import React from "react";
// import { Link } from "react-router-dom";

import "./alquiler.css";

export const Alquiler = () => {
  return (
    <div>
      <h1>Alquiler de Buses</h1>
      <p>
        Si estás pensando en viajar en grupo, con amigos o en familia, podés
        contratar nuestro servicio de alquiler de buses. <br />
        Contamos con una amplia variedad de vehículos que se destacan por su
        confort y seguridad. <br />
        Desde vans y minibuses, hasta micros de un piso y de dos pisos para que
        puedas elegir el que mejor se adapte a tus necesidades. <br />
        Nuestra flota es una de las más modernas del mercado y cada bus cuenta
        con todo el equipamiento necesario para que tengas la mejor experiencia
        de viaje.
      </p>

      <ul>
        <li>Turismo</li>
        <li>Empresas</li>
        <li>Clubes</li>
        <li>Instituciones Educativas</li>
      </ul>

      <span>
        No dudes en contactarte, te ofrecemos un servicio personalizado y la
        mejor atencion.
      </span>

      <div>
        <a href="https://www.flechabus.com.ar/cotizacion-alquiler/">
          Solicitá tu cotización
        </a>
      </div>

      <div>
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
    </div>
  );
};
