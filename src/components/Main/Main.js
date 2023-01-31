import React from "react";

import { Carrousel } from "../Carrousel/Carrousel";
import { BsFillPersonFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { DatePicker } from "../DatePicker/DatePicker";
import { Places } from "../Places/Places";
import { Regions } from "../Regions";


import "./main.css";

export const Main = () => {
  return (
    <section className="main">
      <div className="main__bck"></div>

      <section className="main__bp container">
        <div className="main__bp-wp">
          <h1 className="main__bp-t">Comprá tus pasajes acá</h1>
        </div>
        <div className="main__bp-card">
          <div className="main__bp-1">
            <p className="main__bp-p">Ciudad de origen</p>
            <input
              className="main__bp-i"
              type="text"
              placeholder="¿Desde dónde viajas?"
              onChange={(e) => console.log(e.target.value)}
            />
            <p className="main__bp-p">Ciudad de destino</p>
            <input
              className="main__bp-i"
              type="text"
              placeholder="¿Hasta dónde viajas?"
            />
          </div>
          <div className="main__bp-2">
            <p className="main__bp-p">Salida</p>
            <input className="main__bp-i" type="text" />
            <p className="main__bp-p">Regreso</p>
            <input className="main__bp-i" type="text" />
          </div>
          <div className="main__bp-3">
            <div className="main__bp-g">
              <BsFillPersonFill className="main__bp-icon" />
              <p className="main__bp-p">Pasajeros</p>
            </div>
            <select className="main__bp-pasajeros">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <button className="main__bp-btn">Buscar</button>
          </div>
        </div>
        <div className="main__bp-check">
          <div className="main__bp-in">
            <label className="main__bp-l">
              <input className="main__bp-regreso" type="radio" />
              Sólo Ida
            </label>
          </div>
          <div>
            <label className="main__bp-l">
              <input className="main__bp-regreso" type="radio" />
              Ida y Vuelta
            </label>
          </div>
        </div>
      </section>

      <div className="main__card">
        <h2 className="main__search-t">Comprá tus pasajes acá</h2>
        <div className="main__form">
          <div className="main__selector">
            <div className="flex">
              <div className="main__input-wrapper">
                <p className="main__p">Ciudad de origen</p>
                <input
                  placeholder="¿Desde dónde viajas?"
                  className="main__origen"
                  name="lucas"
                  type="text"
                />
              </div>
              <div className="main__input-wrapper">
                <p className="main__p">Ciudad de destino</p>
                <input
                  placeholder="¿Hasta dónde viajas?"
                  className="main__destino"
                  type="text"
                />
              </div>
              <div className="main__input-wrapper">
                <p className="main__p">Salida</p>
                <DatePicker className="main__salida" />
              </div>
            </div>

            <DatePicker className="main__salida" />

            <p className="main__p">Regreso</p>
            <input className="main__regreso" type="text" name="" />
            <div className="main__w">
              <BsFillPersonFill className="main__icon" />
              <p className="main__p">Pasajeros</p>
            </div>
            <select className="main__pasajeros">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <div className="main__btn-w">
              <button className="main__btn">
                Buscar
                <BsSearch className="main__icon-search" />
              </button>
            </div>

            <ul className="main__radios">
              <li className="main__li">
                <div className="main__radio">
                  <label className="main__input">
                    <input
                      className="main__checked"
                      name="TipoViaje"
                      type="radio"
                    />
                    Sólo Ida
                  </label>
                </div>
              </li>
              <li>
                <div className="main__radio">
                  <label className="main__input">
                    <input
                      className="main__checked"
                      name="TipoViaje"
                      type="radio"
                    />
                    Ida y Vuelta
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <section className="sponsor">
        <div className="sponsor__w">
          <h2 className="sponsor__t">
            "¡Comprá en cuotas"
            <br />y empezá a viajar!
          </h2>
        </div>
        <Carrousel />
        {/* <div className="sponsor__carrusel">
          <img className="sponsor__img" alt="" />
        </div> */}
        <h2 className="sponsor__t">
          Te invitamos a conocer algunos <br />
          de nuestros destinos
        </h2>
        <Places />
        <h2 className="sponsor__t">Viaja sin limites</h2>
        <Regions />

        {/* <section className="outside">
          <h2 className="outside__p">Viajá sin límites</h2>
          <div className="outside__w">
            <div className="outside__card-norte">
              <div className="outside__wrapper-p">
                <p className="ouside__p">Norte</p>
              </div>
            </div>
            <div className="outside__card-litoral">
              <div className="outside__wrapper-p">
                <p className="ouside__p">Litoral</p>
              </div>
            </div>
            <div className="outside__card-bs">
              <div className="outside__wrapper-p">
                <p className="+">Buenos Aires</p>
              </div>
            </div>
            <div className="outside__card-cordoba">
              <div className="outside__wrapper-p">
                <p className="ouside__p">Cordoba</p>
              </div>
            </div>
            <div className="outside__card-brasil">
              <div className="outside__wrapper-p">
                <p className="ouside__p">Brasil</p>
              </div>
            </div>
          </div>
        </section> */}

        <section className="download">
          <video
            className="download__video"
            src="https://carontestudio.com/img/f4.mp4"
            autoplay="true"
            muted="true"
            loop="true"
            poster="https://carontestudio.com/img/contacto.jpg"
          ></video>
          <div className="download__wrapper-video">
            <div className="download__g">
              <h2 className="download__t">
                Te acompañamos con la mejor <br /> app para comprar tus pasajes
                <br /> o visitar desde tu sofa la mejor opcion para tu viaje
              </h2>
              <div className="download__w">
                <a href=""></a>
                <a className="download__a">
                  <img className="download__img-as" />
                </a>
                <a className="download__a">
                  <img className="download__img-gp" />
                </a>
              </div>
            </div>
            <div className="download__g">
              <p className="download__p">
                Descubre la app que todo el mundo usa
              </p>
              <img className="download__img" />
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};
