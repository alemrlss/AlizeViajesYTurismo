import React from "react";

import {} from "./Destino.css";

export const Destino = () => {
  return (
    <>
      <div className="container">
        <div className="destino">
          <img className="destino__img" src="/images/norte.jpg" alt="" />
        </div>
        <p className="destino__p">
          Con alize podes viajar en micro por argentina y paises limitrofes,
          como Brasil, Uruguay y bolivia
        </p>
        <p className="destino__p">
          ¡Contamos con la red de rutas mas extensa del transporte terrestre de
          larga distancia!
        </p>
        <p className="destino__p">
          Descubri todos nuestros destinos en cada region:
        </p>
        <div className="destino__card">
          <div className="destino__card-w">
            <span className="destino__card-centro">Centro</span>
            <span className="destino__card-go">¿Vamos?</span>
            <span className="destino__card-more">Ver mas</span>
          </div>
          <div className="destino__card-w">
            <span className="destino__card-norte">Norte</span>
            <span className="destino__card-go">¿Vamos?</span>
            <span className="destino__card-more">Ver mas</span>
          </div>
          <div className="destino__card-w">
            <span className="destino__card-centro">Litoral</span>
            <span className="destino__card-go">¿Vamos?</span>
            <span className="destino__card-more">Ver mas</span>
          </div>
          <div className="destino__card-w">
            <span className="destino__card-centro">Noreste</span>
            <span className="destino__card-go">¿Vamos?</span>
            <span className="destino__card-more">Ver mas</span>
          </div>
          <div className="destino__card-w">
            <span className="destino__card-centro">Brasil</span>
            <span className="destino__card-go">¿Vamos?</span>
            <span className="destino__card-more">Ver mas</span>
          </div>
          <div className="destino__card-w">
            <span className="destino__card-centro">Uruguay</span>
            <span className="destino__card-go">¿Vamos?</span>
            <span className="destino__card-more">Ver mas</span>
          </div>
          <div className="destino__card-w">
            <span className="destino__card-centro">Bolivia</span>
            <span className="destino__card-go">¿Vamos?</span>
            <span className="destino__card-more">Ver mas</span>
          </div>
          <div className="destino__card-w">
            <span className="destino__card-centro">Cuyo</span>
            <span className="destino__card-go">¿Vamos?</span>
            <span className="destino__card-more">Ver mas</span>
          </div>
          <div className="destino__card-w">
            <span className="destino__card-centro">Patagonia</span>
            <span className="destino__card-go">¿Vamos?</span>
            <span className="destino__card-more">Ver mas</span>
          </div>

          <div className="destino__card-w">
            <span className="destino__card-centro">Mapa de rutas</span>
            <span className="destino__card-go">¿Vamos?</span>
            <span className="destino__card-more">Ver mas</span>
          </div>
        </div>

        <p className="destino__card-text">
          Descubri los lugares para viajar en micro por Argentina, Brasil,
          Uruguay y Bolivia con Alize
        </p>
        <p className="destino__card-text">
          Recorda que algunos servicios estaran suspendidos debido a las medidas
          de prevencion dispuestas por el
          <strong className="destino__card-strong">
            <a
              className="destino__card-a"
              href="href:https://www.argentina.gob.ar/salud/coronavirus-COVID-19"
            >
              Gobierno de la nacion
            </a>
          </strong>
        </p>
      </div>
    </>
  );
};
