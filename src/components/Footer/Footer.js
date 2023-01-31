import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";

import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__w container">
        <div className="footer__menu-1">
          <h3 className="footer__t">Nosotros</h3>
          <ul className="footer__ul">
            <li className="footer__li">
              <a className="footer__a" href="">
                LA EMPRESA
              </a>
            </li>
            <li className="footer__li">
              <a className="footer__a" href="">
                HISTORIA
              </a>
            </li>
            <li className="footer__li">
              <a className="footer__a" href="">
                TRABAJA CON NOSOTROS
              </a>
            </li>
            <li className="footer__li">
              <a className="footer__a" href="">
                SEGURIDA Y TECNOLOGIA
              </a>
            </li>
            <li className="footer__li">
              <a className="footer__a" href="">
                GESTION DE CALIDAD
              </a>
            </li>
            <li className="footer__li">
              <a className="footer__a" href="">
                FUNDACION ALIZE
              </a>
            </li>
            <li className="footer__li">
              <a className="footer__a" href="">
                MANUAL DE INDENTIDAD COPORATIVA
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__menu-2">
          <h3 className="footer__t">Servicios</h3>
          <ul className="footer__ul">
            <li className="footer__li">
              <a className="footer__a" href="">
                DESTINOS
              </a>
            </li>
            <li className="footer__li">
              <a className="footer__a" href="">
                EXPERIENCIA ALIZE
              </a>
            </li>
            <li className="footer__li">
              <a className="footer__a" href="">
                ALQUILER DE BUSES
              </a>
            </li>
            <li className="footer__li">
              <a className="footer__a" href="">
                ENCOMIENDAS
              </a>
            </li>
            <li className="footer__li">
              <a className="footer__a" href="">
                PUBLICIDAD MOVIL
              </a>
            </li>
            <li className="footer__li">
              <a className="footer__a" href="">
                NUESTRA FLOTA
              </a>
            </li>
            <li className="footer__li">
              <a className="footer__a" href="">
                PUNTOS DE VENTA
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__menu-3">
          <h3 className="footer__t">Informacion</h3>
          <ul className="footer__ul">
            <li className="footer__li">
              <a className="footer__a" href="">
                INFO PARA VIAJEROS
              </a>
            </li>
            <li className="footer__li">
              <a className="footer__a" href="">
                ANTES DE VIAJAR
              </a>
            </li>
            <li className="footer__li">
              <a className="footer__a" href="">
                CONSEJOS
              </a>
            </li>
            <li className="footer__li">
              <a className="footer__a" href="">
                PRENSA
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__menu-4">
          <h3 className="footer__t">Atencion al cliente</h3>
          <p className="footer__p">
            Exclusivo venta telefonica: 0000-000-0000 <br />
            atencionalcliente@alize.com.ar <br />
            Consultas: Chat on-line E-Bus. <br />
            info@gestionalize.com.ar <br />
            Lunes a Viernes dias habiles de 9 a 21hs. <br />
            Sabados, domingos y feriados de 9 a 18hs. <br />
            Antartida Argentina y Av. Ramos Mejia <br />
            Boleterias 141 a 146. Terminal de corrientes.
          </p>
        </div>
      </div>

      <div className="footer__wh">
        <h6 className="footer__h6">© Copyright Alize</h6>
        <h6 className="footer__h6">
          ¿Ya nos seguimos?:
          <span className="footer__i">
            <a
              className="footer__a"
              href="https://www.facebook.com/Alizeviajes"
            ></a>
          </span>
          <span className="footer__s">
            <FaFacebookF className="footer__i" />
            <a
              className="footer__a"
              href="https://www.facebook.com/search/top?q=alize%20viajes%20y%20turismo"
            ></a>
          </span>
          <span className="footer__s">
            <AiFillInstagram className="footer__i" />
            <a className="footer__a" href=""></a>
          </span>
          <span className="footer__s">
            <AiOutlineTwitter className="footer__i" />
            <a className="footer__a" href=""></a>
          </span>
        </h6>
      </div>
    </footer>
  );
};
