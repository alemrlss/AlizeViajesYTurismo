import React from "react";
import { Heading, Box, Text } from '@chakra-ui/react'

import "./info.css";

export const Info = () => {
  return <> <>


    <section className="compra">
      <div className="compra container">
        <Heading fontSize='50px' color={"#706a6f"} as='h1' size='lg' noOfLines={1}><h1 className="compra__h1">Como comprar tus pasajes en flechabus.com.ar</h1></Heading>

        <p className="compra__p">En este video, te mostramos el paso a paso para que puedas comprar online tus pasajes en micro de forma ágil y segura.</p>
        <p className="compra__p">Encontrá los mejores precios, elegí tu asiento y pagá tu viaje en cuotas sin interés.??</p>
        <iframe className="compra__iframe" src="https://www.youtube.com/embed/YcTFLFin8dk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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

    <section className="equipaje">
      <div className="equipaje container">
        <img className="equipaje__img" src="/images/equipaje.jpg" alt="" />
        <h2 className="equipaje__h2">Equipaje:</h2>
        <strong className="equipaje__strong">Equipaje de mano:
          <p className="equipaje__p"> Apto para ser llevado debajo de las butacas hasta 5kg. o en el portaequipaje, no debe obstaculizar los pasillos y/o escaleras.</p>
        </strong>
        <strong className="equipaje__strong">Equipaje de baulera:
          <p className="equipaje__p"> Cada boleto da derecho a transportar hasta 15 kg. de equipaje sin cargo. Se le entregará un ticket con el cual la empresa se responsabiliza de su óptimo traslado.</p>
          <p className="equipaje__p">La empresa no asume responsabilidad por el equipaje que no esté etiquetado con los comprobantes propios de la empresa.</p>
        </strong>
        <h2 className="equipaje__h2">Artículos deportivos e instrumentos musicales </h2>
        <p className="equipaje__p">Los equipajes de difícil acomodación, independientemente de que cumplan con las disposiciones vigentes, se transportarán según la disponibilidad de lugar en la bodega y/o deberán ser despachados como encomienda abonando la tasa correspondiente. </p>
        <strong className="equipaje__strong">Se considera equipaje especial a: <br />Cañas de pescar, tablas de surf, bicicletas, TV, artículos del hogar varios. alimentos, pinturas y/o solventes, muebles, etc.</strong>
        <h2 className="equipaje__h2">Viajes Internacionales</h2>
        <strong className="equipaje__strong">Equipaje de mano</strong> <br />
        <p className="equipaje__p-brasil">Brasil</p>
        <p className="equipaje__p">Por disposición de las autoridades de transporte Brasileros (ANTT), que en las unidades que circulen por Brasil los equipajes de mano lleven ticket. </p>
        <p className="equipaje__p">Para evitar multas y fraudes es obligatorio:</p>
        <p className="equipaje__p">1-  Se colocará en cada equipaje de mano el cuerpo del ticket/pasaje más grande.</p>
        <p className="equipaje__p">2- No se entregará comprobante por equipaje que viaje a bordo de la unidad en su compañía, el pasajero sólo tendrá derecho a los tickets de los equipajes despachados en bodega.</p>
        <p className="equipaje__p">Aquellos <strong className="equipaje__strong">equipajes especiales</strong> que no se ajusten a la normativa deberán ser despachados por encomienda, a través de las empresas que realizan envíos internacionales. </p>
        <p className="equipaje__p">Cada boleto da derecho a transportar hasta 15kg de equipaje sin cargo.</p>
        <p className="equipaje__p">El despacho del exceso de equipaje y/o la declaración del mismo podrá realizarse en los lugares destinados a tal fin según tarifario vigente.</p>
        <p className="equipaje__p">La empresa no asume responsabilidad alguna por el equipaje de mano o elementos que transporte consigo el pasajero y que no esté etiquetado con los comprobantes propios de la empresa. </p>
        <div className="equipaje__wrapper-img">
          <img className="equipaje__img-p" src="Images/equipaje-permitido.png" alt="" /><img className="equipaje__img-p" src="Images/equipaje-no-permitido.png" alt="" />
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

    <section className="documentacion">
      <div className="documentacion container">
        <img className="documentacion__img" src="./Images/documentacion.jpg" alt="" />
        <h2 className="documentacion__h2">Acreditación de identidad</h2>
        <strong className="documentacion__strong">Por disposición del Ministerio de Transporte, todos los pasajeros deberán acreditar su identidad antes de subir al servicio. Será responsabilidad del conductor solicitar la misma.</strong>
        <p className="documentacion__p">Discordancias entre los datos consignados en el pasaje y los presentes en el documento del pasajero, éste deberá acercarse a boletería para realizar la validación.</p>
        <p className="documentacion__p">En el caso que el pax no cuente con su DNI en formato físico, puede presentar el DNI digital mediante la app “MI ARGENTINA”. </p>
        <h2 className="documentacion__h2">Viajar con menores de edad </h2>
        <p className="documentacion__p">Los menores deben presentar siempre DNI o pasaporte. Hasta 4 años inclusive podrán viajar con un seguro sin derecho a ocupar la butaca. En todos los casos deben cumplir con ciertos requisitos:</p>
        <p className="documentacion__p">Los niños entre 0 y 12 años podrán viajar únicamente acompañados por un Representante Legal o Tercero Autorizado. </p>
        <p className="documentacion__p">Los que tienen entre 13 y 17 años  podrán viajar acompañados o solos, contando con las autorizaciones requeridas. </p>
        <strong className="documentacion__strong" >El vínculo filiatorio del acompañante debe ser siempre acreditado de forma presencial (con un formulario en la boletería)  o previa (ante escribano o juez de paz).</strong>
        <p className="documentacion__p">Podes conocer<a href="https://www.argentina.gob.ar/viajar-con-menores-de-edad-en-micros-de-larga-distancia">Aqui</a>  cuál es la documentación necesaria. Siempre debes contar con original y fotocopia.</p>
        <p className="documentacion__p">Si el menor viaja solo, requiere autorización de los padres ante Escribano público o Juez de Paz, aclarando país de destino y datos de la persona que lo recibirá (nombre, apellido, nro. de documento y domicilio).</p>
        <h2 className="documentacion__h2">Pasajes</h2>
        <p className="documentacion__p">El boleto es personal e intransferible, sólo para el día y hora indicados en el mismo. Según Resolución vigente, se aceptarán devoluciones y/o canjes de pasajes con las retenciones que se indican:</p>
        <p className="documentacion__p">– Desde las 24hs. anteriores y hasta la hora de salida del servicio: 30%.</p>
        <p className="documentacion__p">– Desde las 48 hs y hasta las 24 hs. anteriores a la salida del servicio: 20% . </p>
        <p className="documentacion__p">– Más de 48 hs. antes de la salida del servicio: 10% . </p>
        <p className="documentacion__p">No se aceptará reclamo alguno por la presentación posterior a la hora de salida o a la partida del servicio.</p>
        <p className="documentacion__p">La pérdida, extravío o robo del pasaje no genera derecho a reclamación, devolución o reintegro alguno.</p>
        <h2 className="documentacion__h2">Viajes internacionales</h2>
        <strong className="documentacion__strong">Argentinos:</strong>
        <p className="documentacion__p">Los mayores de 18 años deben presentar DNI o pasaporte. Menores de 18 años deben presentar cierta documentación dependiendo el caso.</p>
        <p className="documentacion__p">No es válido el DNI sin actualización de 8 años. El menor que cumplió 16 años, tiene un plazo de 180 días para la actualización.</p>
        <strong className="documentacion__strong">Extranjeros:</strong>
        <strong className="documentacion__strong">Brasil, Uruguay, Chile, Paraguay: </strong>
        <p className="documentacion__p"> Cédulas o Pasaportes actualizados, VISA turística y certificado de vacunación contra la Fiebre Amarilla si estuvieron los últimos 90 días en dichos países.</p>
        <strong className="documentacion__strong">EEUU, Canada, Mexico: </strong>
        <p className="documentacion__p"> Pasaporte actualizado, VISA turística y VISA consular de Brasil.</p>
        <strong className="documentacion__strong">Europa: </strong>
        <p className="documentacion__p"> Pasaporte actualizado, VISA turística</p>
        <p className="documentacion__p">No se aceptará reclamo alguno por la presentación posterior a la hora de salida o a la partida del servicio.</p>
        <p className="documentacion__p">La pérdida, extravío o robo del pasaje no genera derecho a reclamación, devolución o reintegro alguno.</p>
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

    <section className="ticket">
      <div className="ticket container">
        <img className="ticket__img" src="Images/e-ticket.jpg" alt="" />
        <div className="ticket__wrapper">

          <iframe className="ticket__iframe" src="https://www.youtube.com/embed/Uoae3TlRCQM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <img className="ticket__img-online" src="Images/compra-online.jpg" alt="" />
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

    <section className="discapacidad">
      <div className="discapacidad container">
        <Heading marginBottom='20px' fontSize='30px' color={"#706a6f"} as='h1' size='lg' noOfLines={1}>
          <h1 className="discapacidad__h1">ASISTENCIA A PERSONAS CON PASES DE DISCAPACIDAD CUD/INCUCAI</h1>
        </Heading>

        <Box marginBottom='20px' maxW='1000px'>
          <Heading fontSize='30px' mb={4}>¿Cómo solicito un pasaje?</Heading>
          <Text fontSize=''>
            <p className="discapacidad__p">Desde CNRT se lanzó una nueva modalidad para la gestión de pasajes con Pase de Discapacidad y Transplantados, y se realiza a través de <a href="href=https://reservapasajes.cnrt.gob.ar/web/ingresar">su pagina web</a></p>
            <p className="discapacidad__p">Una vez allí, seleccioná la opción SOLICITAR PASAJES y seguí las indicaciones del sistema.</p>
            <p className="discapacidad__p">Si necesitás más información <a className="discapacidad__a" href="http://www.argentina.gob.ar/servicio/reservar-pasajes-con-certificado-de-discapacidad-o-credencial-incucai">ingresa aca.</a></p>
          </Text>

        </Box>

        <Box marginBottom='20px' maxW='1000px'>
          <Heading fontSize='30px' mb={4}>¿Cómo cancelo una solicitud? </Heading>
          <Text fontSize=''>
            <p className="discapacidad__p">Si decidís no viajar, te solicitamos ingresar al sistema y realizar la cancelación de la solicitud a tiempo, para que otra persona tenga la posibilidad de utilizar esa reserva. </p>
            <p className="discapacidad__p">Para cancelar tu solicitud ingresá en: <a href="https://reservapasajes.cnrt.gob.ar/web/ingresar">Reservar pasajes.</a> Una vez allí, seleccioná la opción MIS SOLICITUDES, buscá el viaje que querés cancelar y hacé click en el botón ANULAR SOLICITUD.</p>

          </Text>

        </Box>

        <Box marginBottom='20px' maxW='1000px'>
          <Heading fontSize='30px' mb={4}>¿Cómo cancelo un pasaje? </Heading>
          <Text fontSize=''>
            <p className="discapacidad__p">Si decidís no viajar, te solicitamos ingresar al sistema y realizar la cancelación de la solicitud a tiempo, para que otra persona tenga la posibilidad de utilizar esa reserva.</p>
            <p className="discapacidad__p">Para cancelar tu solicitud ingresá en: <a href="https://reservapasajes.cnrt.gob.ar/web/ingresar">Reservar Pasajes.</a>Una vez allí vas a la opción MIS SOLICITUDES, buscás el viaje que querés cancelar y hacés click en el botón ANULAR PASAJE.</p>

          </Text>

        </Box>

        <Box marginBottom='20px' maxW='1000px'>
          <Heading fontSize='30px' mb={4}>¿Puedo elegir la ubicación de mi butaca? </Heading>
          <Text fontSize=''>
            <p className="discapacidad__p">Ahora podés indicar en tu solicitud si preferís viajar en planta baja o planta alta, y el motivo.</p>
            <p className="discapacidad__p">Recordá que la preferencia solicitada queda sujeta a disponibilidad del lugar en la unidad, sirviendo a fines informativos y orientativos del prestador del servicio.</p>
            <div className="discapacidad__wrapper">
              <p className="discapacidad__p">Mi pasaje aún no llega:</p> <br />
              <p className="discapacidad__p">Quedate tranquilo, en este caso debés aguardar a que la transportista emita tu pasaje. El envío puede realizarse hasta 48hs antes de la partida del servicio y tiene la obligación de otorgar el pasaje reservado.</p>
            </div>
            <p className="discapacidad__p">Si tenés alguna duda podés obtener más información en <a href="https://www.argentina.gob.ar/transporte/cnrt/derechos-de-los-usuarios/derechos-de-las-personas-con-discapacidad">Derechos de las personas con discapacidad.</a></p>
          </Text>

        </Box>

      </div>
    </section>

    <section className="venta">
      <div className="venta container">
        <div className="venta__wrapper">

          <iframe title="hola" src="https://www.google.com/maps/d/embed?mid=1BMtDbiqHYFxdbEqs-R71-G_ewnjCqyI&ehbc=2E312F" width="640" height="480"></iframe>
        </div>
        <p> Consultá los puntos de venta en tu provincia:</p>
        <a href="/">CORRIENTES</a>
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

    <section className="buses">
      <div className="buses container">
        <img className="buses__img" src="/Images/nuestra-flota.jpg" alt="" />
        <p>Flecha Bus cuenta con  la flota más grande del país en constante mantenimiento para asegurar el cumplimiento de los estándares de calidad y seguridad.  Por eso, nuestros buses se ajustan a las necesidades de cada destino, ya sea nacional o internacional.</p>
        <p>Desde hace 60 años Flecha Bus mantiene el compromiso de llevarte a tu destino con una de las flotas más modernas del país.</p>
        <p>Cerca de la mitad de la flota de Flechabus está equipada con carrocería Marcopolo G7, uno de los ómnibus de larga distancia más modernos del mercado que cuenta con la última tecnología, que ofrece un alto grado de seguridad y confort.</p>
        <p>La compañía también cuenta dentro de su parque móvil con carrocerías Metalsur, empresa líder de Argentina.</p>
        <strong>Parte de nuestra flota de buses está equipada con chasis  Mercedes Benz y  Scania, que cuentan con sistemas de gestión de cambios Powershift y Opticruise, respectivamente, que permiten pasar los cambios de modo manual a modo automático, otorgándole mayor autonomía al conductor.                  </strong>
        <strong>El sistema Retarder presente en estas unidades brinda asistencia al frenado en pendientes pronunciadas o en ocasione de frenado constante,  dando más seguridad y estabilidad a la unidad.</strong>
        <strong>Desde 2016, sumamos a  nuestra flota tecnología Euro V, que ayuda reducir la emisión de gases nocivos para el medio ambiente.</strong>
        <h1>Nuestros Servicios</h1>

        <div className="buses__wrapper-img">
          <img className="buses__img" src="/Images/colectivo-1.jpg" alt="" /><img className="buses__img" src="/Images/colectivo-2.jpg" alt="" /><img className="buses__img" src="/Images/colectivo-3.jpg" alt="" /><img className="buses__img" src="/Images/colectivo-4.jpg" alt="" />
        </div>

      </div>
    </section>
  </>

  </>;
};
