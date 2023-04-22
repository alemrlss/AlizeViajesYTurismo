import React from "react";
import { Link } from "react-router-dom";
import { TabsComponent } from "../../components/Tabs";

import "./beneficios.css";

export const Beneficios = () => {
  return (
    <>
      <section className="estudiante">
        <div className="beneficios container">
          <img
            className="beneficios__img"
            src="/images/soyestudiante.jpg"
            alt=""
          />
          <button className="beneficios__btn btn">
            <a className="benficios__a" href="/">
              Registrate
            </a>
          </button>
          <h2 className="beneficios__h2">
            ¡Nos sumamos a Soy Estudiante para que accedas fácilmente a tu
            descuento universitario!
          </h2>
          <p className="beneficios__p">
            Para registrarte seguí los siguientes pasos:
          </p>
          <p className="beneficios__p">
            1- Completá tus datos y subí tu Certificado de Alumno Regular.
          </p>
          <p className="beneficios__p">2- Confirmá tu dirección email.</p>
          <p className="beneficios__p">
            3- Aguardá que Soy Estudiante te confirme la validación de tus datos
            a tu email.
          </p>
          <strong className="beneficios__strong">
            ¡Listo! Ya podés acceder a los descuentos
          </strong>
          <button className="beneficios__btn btn">
            <a className="benficios__a" href="/">
              Comprar
            </a>
          </button>
          <div className="beneficios__wrapper">
            <strong className="beneficios__strong">
              Para tener en cuenta:
            </strong>
            <p className="beneficios__p">
              - "El descuento para los usuarios registrados en Soy Estudiante
              será del 20%."
            </p>
            <p className="beneficios__p">
              - No es acumulable con otras promociones.
            </p>
            <p className="beneficios__p">
              - Canal de venta habilitado para este descuento: Sitio Web
              (www.flechabus.com.ar)
            </p>
            <p className="beneficios__p">
              - "Este descuento solo aplica al usuario registrado en Soy
              Estudiante. En caso de realizar una compra que incluya varios
              pasajeros, el descuento solo aplicará a usuarios registrados y
              validados en Soy Estudiante, es decir que el descuento no aplicará
              a toda la compra."
            </p>
            <p className="beneficios__p">
              Soy Estudiante no está asociado a la resolución MOYSP Nº 103/72,
              es un sistema para validar información.
            </p>
            <p className="beneficios__p">
              - Soy estudiante validará los datos de quienes se registren y a
              fin de cumplir con sus T&C y la Ley de protección de datos
              personales, no brindará ningún dato de los usuarios a las
              empresas, a excepción de la condición del alumno.
            </p>
            <p className="beneficios__p">
              Si tenés alguna consulta comunicate con hola@soyestudiante.com.ar
            </p>
          </div>
        </div>
      </section>

      <div className="partingline">
        <img
          className="partingline__img"
          src="https://www.gifsanimados.org/data/media/134/linea-divisoria-imagen-animada-0132.gif"
          border="0"
          alt="linea-divisoria-imagen-animada-0132"
        />
      </div>

      <section className="clarin365">
        <div className="clarin365 container">
          <img
            className="clarin365__img"
            src="/images/Clarin-365_header.jpg"
            alt=""
          />

          <h1 className="clarin365__h1">
            Clarín 365 descuento del 20% en tus pasajes
          </h1>
          <p className="clarin365__p">
            Si estás adherido a la tarjeta podes acceder a un descuento del 20%
            en tus pasajes desde web y app. Ahora con flecha bus tus pasajes son
            más baratos.
          </p>
          <span className="clarin365__span">
            Para solicitar la tuya podes realizarlo a través de
            <a
              className="clarin365__a"
              href="https://suscripcion.365.clarin.com/suscripcion/planes/clarin/planes"
            >
              Clarin 365.
            </a>
          </span>
          <span className="clarin365__span">Para tener en cuenta:</span>
          <p className="clarin365__p">
            - El descuento es para usuarios registrados en
            <strong className="clarin365__strong">365.</strong> El porcentaje de
            descuento es del <strong className="365__strong">20%</strong>
          </p>
          <p className="clarin365__p">
            - Válido sólo para destinos Nacionales. No aplica para destinos
            Internacionales.
          </p>
          <p className="clarin365__p">
            - Aplica para destinos Nacionales seleccionados.
          </p>
          <p className="clarin365__p">
            - No es acumulable con otras promociones.
          </p>
          <p className="clarin365__p">
            - Canal de venta habilitado para este descuento: Web y App.
          </p>
          <p className="clarin365__p">
            {" "}
            - Este descuento solo aplica al usuario registrado en 365. En caso
            de realizar una compra que incluya varios pasajeros, el descuento
            solo aplicará a usuarios registrados y validados en 365, es decir
            que el descuento no aplicará a toda la compra.
          </p>
        </div>
      </section>

      <div className="partingline">
        <img
          className="partingline__img"
          src="https://www.gifsanimados.org/data/media/134/linea-divisoria-imagen-animada-0132.gif"
          border="0"
          alt="linea-divisoria-imagen-animada-0132"
        />
      </div>

      <section className="tigre">
        <div className="tigre container">
          <img className="tigre__img" src="/images/soytigre.jpg" alt="" />

          <h1 className="tigre__h1">
            Nuevo Beneficio: 10% de descuento en pasajes con tarjeta “Soy Tigre”
          </h1>
          <span className="tigre__span">
            ¡Seguimos sumando beneficios para vos!
          </span>

          <p className="tigre__p">
            Si vivís en Tigre ahora podés aprovechar un 10% de descuento en
            pasajes todos los días.
          </p>
          <p className="tigre__p">
            Soy Tigre es la tarjeta de beneficios y servicios de los vecinos de
            Tigre con la que podés acceder un montón de beneficios en diferentes
            comercios.
          </p>
          <p className="tigre__p">
            El beneficio estará disponible comprando a nuestras boleterías N° 30
            a 33 de la Terminal de Ómnibus de El Talar (Hipólito Irigoyen 2338)
          </p>
          <span className="tigre__span">
            Conocé más sobre “Soy Tigre”
            <a
              className="tigre__a"
              href="https://www.tigre.gob.ar/tramites/soy_tigre"
            >
              ACA.
            </a>
          </span>
          <div className="tigre__wrapper">
            <iframe
              className="tigre__iframe"
              src="https://www.youtube.com/embed/VLQolthKdI8"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
             >
              <video
                className="tigre__video"
                controls
                autoPlay
                src="https://www.youtube.com/embed/VLQolthKdI8?feature=oembed"
              >
                <div className="tigre__background-video"></div>
              </video>
            </iframe>
            <p className="tigre__t">
              Beneficio del 10% de descuento disponible todos los días para
              viajar en servicios de empresa Flecha Bus. Válido únicamente para
              compras presenciales en boleterías N° 30 a 33 de la Terminal de
              Ómnibus de El Talar. No incluye servicios hacia y desde Mar del
              Plata, Tucumán, Santiago del Estero, Termas de Río Hondo y La
              Banda. El beneficio está disponible solo para el titular de la
              tarjeta. Para acceder al beneficio los socios deberán presentar su
              tarjeta “Soy Tigre” y dejar una fotocopia de la misma en la
              boletería.
            </p>
          </div>
        </div>
      </section>

      <div className="partingline">
        <img
          className="partingline__img"
          src="https://www.gifsanimados.org/data/media/134/linea-divisoria-imagen-animada-0132.gif"
          border="0"
          alt="linea-divisoria-imagen-animada-0132"
        />
      </div>

      <section className="entrerriano">
        <div className="entrerriano container">
          <img
            className="entrerriano__img"
            src="../Images/SoyEntrerriano.jpg"
            alt=""
          />

          <div className="entrerriano__wrapper">
            <h2 className="entrerriano__h2">
              ¡Bienvenidos a Soy Entrerriano!
              <span className="entrerriano__span">
                La comunidad de beneficios exclusiva para nuestros viajeros
                residentes de la provincia de Entre Ríos.
              </span>
            </h2>
            <p className="entrerriano__p">
              ¡Si! Queremos agradecerte la confianza de tantos años,
              eligiéndonos como tu empresa de transporte, por eso creamos esta
              comunidad, como una forma de devolverte todo el acompañamiento que
              nos brindas en cada viaje.
            </p>
            <p className="entrerriano__p-1">
              ¡Mirá todos los beneficios que tenemos para vos!
            </p>
          </div>
          <div className="entrerriano__wrapper">
            <h2 className="entrerriano__descuentos">Descuentos en pasajes</h2>
            <span className="entrerriano__20">20% en pasajes</span>
          </div>
          <p className="entrerriano__viajar">
            Viajá con este descuento y disfrutá de los mejores destinos de
            Argentina!
          </p>
          <div className="entrerriano__wrapper">
            <p className="entrerriano__p-1">
              ¿Cómo usar mi descuento? (con DNI)
            </p>
            <p className="entrerriano__p">
              ¡Es fácil! Solo tenés que seguir estos pasos:
            </p>
            <p className="entrerriano__p">
              1. Ingresá origen, destino, fecha y cantidad de pasajeros en el
              buscador de servicios.
            </p>
            <p className="entrerriano__p">
              2. Ingresá origen, destino, fecha y cantidad de pasajeros en el
              buscador de servicios.
            </p>
            <p className="entrerriano__p">
              3. Elegí el servicio al que querés viajar.
            </p>
            <p className="entrerriano__p">4. Seleccioná tu asiento.</p>
            <p className="entrerriano__p">5. Completá tu datos personales.</p>
            <p className="entrerriano__p">
              6. Antes de pagar seleccioná el nombre de tu comunidad: “SOY
              ENTRERRIANO”
            </p>
            <p className="entrerriano__p">7. Realiza el pago y ¡listo!</p>
            <Link
              className="entrerriano__link"
              to={
                "https://drive.google.com/file/d/1jWMy1BYiKqHA9EFktjmDke3Qa_eXRydX/view?usp=sharing"
              }
            >
              ¡Si tenes dudas mirá acá!
            </Link>
          </div>
          <h2 className="entrerriano__descuentos-termas">
            Descuentos en termas
          </h2>
          <div className="entrerriano__wrapper-img">
            <img
              className="entrerriano__img-termas-1"
              src="../images/termas-1.jpg"
              alt=""
            />
            <img
              className="entrerriano__img-termas-2"
              src="../images/termas-2.jpg"
              alt=""
            />
            <img
              className="entrerriano__img-termas-3"
              src="../images/termas-3.jpg"
              alt=""
            />
            <img
              className="entrerriano__img-termas-4"
              src="../images/termas-4.jpg"
              alt=""
            />
          </div>
          <p className="entrerriano__p-1">
            ¿Todavía no te registraste en la comunidad?
          </p>
          <p className="entrerriano__p">
            Completá el formulario con tus datos. Ahí deberás acreditar
            domicilio dentro de la provincia de Entre Ríos, para eso te vamos a
            pedir que subas una foto de tu DNI que acredite tu lugar de
            residencia.
          </p>

          <div className="entrerriano__form">
            <p className="entrerriano__text">Nombre Completo</p>
            <input className="entrerriano__i" type="text" />
            <p className="entrerriano__text">DNI</p>
            <input className="entrerriano__i" type="text" />
            <p className="entrerriano__text">Mail</p>
            <input className="entrerriano__i" type="text" />
            <p className="entrerriano__text">Localidad</p>
            <input className="entrerriano__i" type="text" />
            <p className="entrerriano__p">Adjuntar foto del DNI</p>
            <p className="entrerriano__p">
              (Solo se admiten los formatos "jpeg" y "jpg")
            </p>
            <div className="entrerriano__wrapper-archivo">
              <button className="entrerriano__btn-select">
                Seleccionar archivo
              </button>
              <p className="entrerriano__p">Sin archivos seleccionados</p>
            </div>
            <button className="entrerriano__btn-enviar btn">Enviar</button>
          </div>

          <p className="entrerriano__descuento-pasajes">
            Descuentos en pasaje: Beneficio del 20% de descuento disponible para
            residentes de la provincia de Entre Ríos. Válido para comprar y
            viajar hasta el 30/6/2023. Para obtener el descuento deberá
            registrarse mediante el formulario web, completando sus datos y
            cargando una imagen de su DNI que acredite dirección de residencia
            dentro de la provincia de Entre Ríos. El descuento aplica los días
            martes, jueves y viernes en servicios seleccionados que pasen o
            inicien en Entre Ríos (solo nacionales). No incluye servicios
            provinciales.Cantidad de butacas por servicio: 10. Sujeto a
            disponibilidad. No acumulable con otras promociones vigentes.
            Canales de venta disponibles: Web, App, Call center y puntos de
            venta. Para más información ingresá en{" "}
            <a
              className="entrerriano__a"
              href="https://alize-viajes-y-turismo.vercel.app/"
            >
              www.alize.com.ar
            </a>
          </p>
        </div>
      </section>
      <div className="partingline">
        <img
          className="partingline__img"
          src="https://www.gifsanimados.org/data/media/134/linea-divisoria-imagen-animada-0132.gif"
          border="0"
          alt="linea-divisoria-imagen-animada-0132"
        />
      </div>

      <section className="hotel">
        <div className="hotel__container container">
          <img
            className="hotel__banner"
            src="images/descuento-hoteles.jpg"
            alt=""
          />
          <h1 className="hotel__h1">
            ¡Encontrá acá la estadía perfecta para tu próximo viaje!
          </h1>
          <TabsComponent />
          <div className="hotel__wrapper-img">
            <img
              className="hotel__ic"
              src="images/hotel-costaneras.png"
              alt=""
            />
            <img
              className="hotel__ic"
              src="images/hotel-torre-sol.png"
              alt=""
            />
            <img className="hotel__ic" src="images/hotel-copahue.png" alt="" />
            <img
              className="hotel__ic"
              src="images/hotel-arrayanes.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};
