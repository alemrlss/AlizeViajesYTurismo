import React from "react";
import { Link } from "react-router-dom";
import { AccordionComponent } from "../../components/Accordion";

import "./destino.css";

export const Destino = () => {
  return (
    <>
      <div className="destino">
        <div className="destino__container container">
          <div className="destino__wrapper">
            <img className="destino__img" src="/images/descarga.jpg" alt="" />
          </div>
          <p className="destino__p">
            Con alize podes viajar en micro por argentina y paises limitrofes,
            como Brasil, Uruguay y Bolivia.
          </p>
          <p className="destino__p">
            ¡Contamos con la red de rutas mas extensa del transporte terrestre
            de larga distancia!
          </p>
          <p className="destino__p">
            Descubri todos nuestros destinos en cada region:
          </p>
          <div className="destino__card">
            <div className="destino__card-w">
              <div className="destino__card-image destino__card-image--centro">
                <span className="destino__card-location">Centro</span>
              </div>

              <div className="destino__card-image destino__card-image--norte">
                <span className="destino__card-location">Norte</span>
              </div>

              <div className="destino__card-image destino__card-image--litoral">
                <span className="destino__card-location">Litoral</span>
              </div>

              <div className="destino__card-image destino__card-image--noreste">
                <span className="destino__card-location">Noreste</span>
              </div>

              <div className="destino__card-image destino__card-image--brasil">
                <span className="destino__card-location">Brasil</span>
              </div>
            </div>
            <div className="destino__card-w">
              <div className="destino__card-image destino__card-image--uruguay">
                <span className="destino__card-location">Uruguay</span>
              </div>

              <div className="destino__card-image destino__card-image--bolivia">
                <span className="destino__card-location">Bolivia</span>
              </div>

              <div className="destino__card-image destino__card-image--cuyo">
                <span className="destino__card-location">Cuyo</span>
              </div>

              <div className="destino__card-image destino__card-image--patagonia">
                <span className="destino__card-location">Patagonia</span>
              </div>

              <div className="destino__card-image destino__card-image--mr">
                <span className="destino__card-location">Mapa de rutas</span>
              </div>
            </div>
          </div>

          <p className="destino__card-text">
            Descubri los lugares para viajar en micro por Argentina, Brasil,
            Uruguay y Bolivia con Alize
          </p>
          <p className="destino__card-text">
            Recorda que algunos servicios estaran suspendidos debido a las
            medidas de prevencion dispuestas por el
            <strong className="destino__card-strong">
              <Link
                className="destino__card-a"
                to={"https://www.argentina.gob.ar/salud/coronavirus-COVID-19"}
              >
                Gobierno de la nacion
              </Link>
            </strong>
          </p>
        </div>

        <div className="destino__site container">
          <AccordionComponent />

          <h2 className="destino__site-mr">MAPA DE RUTAS</h2>
          <img className="destino__image-mr" src="/images/mapa.jpg" alt="" />
          <span className="destino__site-contact">
            Para contactarte con nosotros,
            <Link className="destino__site-soporte" to={"/Soporte"}>
              ingresa aqui.
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};
