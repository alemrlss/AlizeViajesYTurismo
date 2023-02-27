import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const TabsComponent = () => {
  return (
    <Tabs
      marginBottom="30px"
      marginTop="50px"
      variant="soft-rounded"
      colorScheme="red"
    >
      <TabList align-items="baseline" marginBottom="20px">
        <Tab marginBottom="20px">
          <span className="hotel__span">Hotel Torresol (Camboriú, Brasil)</span>
        </Tab>
        <Tab>
          <span className="hotel__span">
            Hotel & Spa Costarenas (Colón, Entre Ríos)
          </span>
        </Tab>
        <Tab>
          <span className="hotel__span">Paquetes Carnaval 2023</span>
        </Tab>
        <Tab>
          <span>Hoteles Arrayanes y Copahue (Bariloche)</span>
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <p className="hotel__p">
            Para los amantes de la playa y el calor, Camboriú es el destino
            ideal para disfrutar durante todo el año. Y si pensás en un
            alojamiento el Hotel 3 estrellas Torresol es tu mejor opción.
          </p>
          <span className="hotel__span-brasil">
            ¿Estás buscando Paquetes para Brasil?
          </span>{" "}
          <br />
          <div className="hotel__wrapper">
            <ul className="hotel__ul">
              <strong className="hotel__strong">
                Salidas desde Retiro, Gualeguaychú, Concepción del Uruguay,
                Colón, Concordia, Chajarí, Paraná y San Francisco:
                <p className="hotel__p">Todos los Miércoles.</p>
              </strong>
              <li className="hotel__li">
                10 DÍAS/7 NOCHES de alojamiento con desayuno en el Hotel
                Torresol
              </li>
              <li className="hotel__li">
                Bus ida y vuelta, servicio Semi Cama.
              </li>
              <li className="hotel__li">
                Traslado Terminal de Bus/Hotel/Terminal de Bus.
              </li>
              <li className="hotel__li">Asistencia al Viajero.</li>
            </ul>
            <ul className="hotel__ul">
              <strong>
                Salidas desde Córdoba:
                <p className="hotel__p">Miércoles, Viernes y Domingos.</p>
              </strong>
              <li className="hotel__li">
                10 Días / 7 noches de alojamiento con desayuno en el Hotel
                Torresol.
              </li>
              <li className="hotel__li">
                Bus ida y vuelta, servicio Semi Cama.
              </li>
              <li className="hotel__li">
                Habitación disponible al momento del ingreso al hotel (early
                check-in)
              </li>
              <li className="hotel__li">
                Traslado Terminal de Bus/Hotel/Terminal de Bus.
              </li>
              <li className="hotel__li">Asistencia al Viajero.</li>
            </ul>
          </div>
          <h3 className="hotel__h3">
            ¡Hacé tu reserva!
            <li className="hotel__li">Dirección: Sáenz Peña 728, CABA</li>
            <li className="hotel__li">Teléfonos: +54-11 4044-3565</li>
            <li className="hotel__li">
              Reservas: <Link to={"mailto:reservas@buen-viaje.com.ar"}></Link>
              reservas@buen-viaje.com.ar
            </li>
            <li className="hotel__li">
              Instagram:{" "}
              <Link to={"https://www.instagram.com/turismobuenviaje/?hl=es"}>
                Turismobuenviaje
              </Link>
            </li>
          </h3>
          <div className="hotel__wrapper-img">
            <img
              className="hotel__img"
              src="images/hotel-camboriu.jpg"
              alt=""
            />
            <img
              className="hotel__img"
              src="images/hotel-camboriu1.jpg"
              alt=""
            />
          </div>
        </TabPanel>
        <TabPanel>
          <p className="hotel__p">
            "Se encuentra en la pintoresca ciudad de Colón, Provincia de Entre
            Ríos, sobre la margen del Río Uruguay, a sólo 330km de la Ciudad de
            Buenos Aires. Serás bienvenido, a una atmósfera de “su segundo
            hogar”, una sensación de conexión y trato personal para sentir la
            experiencia Costarenas."
          </p>
          <p className="hotel__p">
            "Viví una experiencia única con el mejor servicio de spa (pileta
            climatizada, ducha escocesa, baño finlandez) en un hotel super
            confortable y rodeado de un entorno natural inigualable."
          </p>
        </TabPanel>
        <TabPanel>
          <span className="hotel__span-package">Paquetes 3 noches 4 días:</span>
          <ul className="hotel__ul">
            <li className="hotel__li">
              "Promo Habitación Standard interna:  Habitación doble Standard con
              desayuno, más un día de transfer al carnaval in/out: $26.500 por
              persona en base doble."
            </li>
            <li className="hotel__li">
              Upgrade: Bus Coche cama, Retiro-Colon, Colon – Retiro: $ 11.000
              por pax.
              <strong className="hotel__strong">
                Promo Habitación Vista al Rio:
              </strong>{" "}
              Habitación doble Vista al Rio, más un día de traslado al carnaval
              in/out: $ 30.663 por persona en base doble.
            </li>
            <li className="hotel__li">
              Upgrade: Bus Coche cama, Retiro-Colon, Colon – Retiro: $ 11000 por
              pax.
            </li>
            <li className="hotel__li">
              Transfer In / Out CARNAVAL: Hotel – Gualeguaychu / Gualeguaychu –
              Hotel: $ 12000 por persona. (capacidad de la van 7 pax).
            </li>
          </ul>
          <span className="hotel__span">PROMOCIONES TEMPORADA 2023</span>
          <p className="hotel__p">
            Validas del 1 de enero al 28/2/23. Paquete de 3 noches en todas las
            habitaciones: 5% de descuento con cualquier medio de pago. No
            acumulable con otros descuentos, por ej. pago en efectivo. Paquete
            de 4 noches en todas las categorías: 8% de descuento, con cualquier
            medio de pago. No acumulable con otros descuentos, por ej. pago en
            efectivo. Paquete de 7 noches, una es sin cargo. Con cualquier{" "}
          </p>
          <strong className="hotel__strong">
            Promociones para Febrero:
            <p className="hotel__p">
              (Válido desde el 1/2/23 AL 28/2/23, validas de Domingo a viernes)
              3×2: En una estadía de 3 noches, una es sin cargo. 4×3: En una
              estadía de 4 noches, una es sin cargo.
            </p>
          </strong>
          <strong className="hotel__strong">
            Promo cena show:
            <p className="hotel__p">
              (Válido desde el 1/2/23 AL 28/2/23, validas de Domingo a viernes)
              3×2: En una estadía de 3 noches, una es sin cargo. 4×3: En una
              estadía de 4 noches, una es sin cargo.
            </p>
          </strong>
          <strong className="hotel__strong">
            Promo termas Colón:
            <p className="hotel__p">
              "Para las estadías desde el 1/1/23 al 31/3/23, 10% de descuento en
              el ingreso a las mismas, solicitando el voucher en el hotel."
            </p>
          </strong>
          <div className="hotel__wrapper-img">
            <img className="hotel__img" src="images/costanera.jpg" alt="" />
            <img className="hotel__img" src="images/costanera-1.jpg" alt="" />
          </div>
          <p className="hotel__p">¡Hacé tu reserva!</p>
          <ul className="hotel__ul">
            <li className="hotel__li">
              Dirección: Av. Quirós y 12 de Abril, Colón – Entre Ríos |
              Argentina.
            </li>
            <li className="hotel__li">
              Teléfonos: +54-3447-425050 / + 549-3447-439036.
            </li>
            <li className="hotel__li">
              Recepción: info@hotelcostarenas.com.ar
            </li>
          </ul>
        </TabPanel>
        <TabPanel>
          <div className="hotel__wrapper-img">
            <img
              className="hotel__img"
              src="images/hotel-arrayanes.jpg"
              alt=""
            />
            <img className="hotel__img" src="images/hotel-copahue.jpg" alt="" />
          </div>
          <p className="hotel__p">
            Viví una estadía memorable en la hermosa ciudad de San Carlos de
            Bariloche. <br />
            En los Hoteles Copahue y Arrayanes podés disfrutar de la mejor
            atención y de las mejores vista de la ciudad. <br /> Cercanía y
            comodidad para disfrutar Bariloche. Los Hoteles Copahue Y Arrayanes,
            están ubicado en pleno centro de la ciudad, ofrece habitaciones de
            categoría con increíbles vistas panorámicas de Bariloche.
          </p>
          <ul className="hotel__ul">
            <li className="hotel__li">
              Hotel Copahue 2 estrellas: Dirección: Parque Nacional Nahuel
              Huapi, San Martín 280, San Carlos de Bariloche, Río Negro.
            </li>
            <li className="hotel__li">Teléfono: 0294 442-6289.</li>
            <li className="hotel__li">
              Email:reservasyconsultas@speedy.com.ar
            </li>
            <li className="hotel__li">
              Hotel Arrayanes 2 estrellas: Dirección: Rolando 118, San Carlos de
              Bariloche, Río Negro.
            </li>
            <li className="hotel__li">Teléfono: 0294-442-7205</li>
          </ul>
          <div></div>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
