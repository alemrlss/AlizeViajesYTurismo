import React from "react";
import "./Carrousel.scss";

const data = [
  {
    image:
      "https://www.flechabus.com.ar/wp-content/uploads/2022/06/cabal-52px-alto.jpg",
  },
  {
    image:
      "https://www.flechabus.com.ar/wp-content/uploads/2022/06/credicoop-52px-alto.jpg",
  },
  {
    image:
      "https://www.flechabus.com.ar/wp-content/uploads/2022/06/icbc-52px-alto.jpg",
  },
  {
    image:
      "https://www.flechabus.com.ar/wp-content/uploads/2022/06/mastercard-52px-alto.jpg",
  },
  {
    image:
      "https://www.flechabus.com.ar/wp-content/uploads/2022/06/mercadopago-52px-alto.jpg",
  },
  {
    image:
      "https://www.flechabus.com.ar/wp-content/uploads/2022/06/naranja-52px-alto.jpg",
  },
  {
    image:
      "https://www.flechabus.com.ar/wp-content/uploads/2022/06/pagofacil-52px-alto.jpg",
  },
  {
    image:
      "https://www.flechabus.com.ar/wp-content/uploads/2022/06/provincia-52px-alto.jpg",
  },
  {
    image:
      "https://www.flechabus.com.ar/wp-content/uploads/2022/06/visa-52px-alto.jpg",
  },
  {
    image:
      "https://www.flechabus.com.ar/wp-content/uploads/2022/06/consumax_696pxX318px.jpg",
  },
];
export const Carrousel = () => {
  return (
    <div id="infinite" className="highway-slider">
      <div className="container highway-barrier">
        <ul className="highway-lane">
          {data.map((props, i) => {
            return <CarrouselItem image={props.image} key={i} />;
          })}
          {data.map((props, i) => {
            return <CarrouselItem image={props.image} key={i} />;
          })}
        </ul>
      </div>
    </div>
  );
};

const CarrouselItem = ({ image }) => {
  return (
    <li className="highway-car">
      <img className="corrousel__image" src={image} alt="" />
    </li>
  );
};
