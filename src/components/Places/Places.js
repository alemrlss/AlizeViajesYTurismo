import { Link } from "react-router-dom";

import "./places.css";

const places = [
  {
    name: "Parana",
    image: "/Images/parana.jpg",
  },
  {
    name: "Salta",
    image: "/Images/salta.jpg",
  },
  {
    name: "Colon",
    image: "/Images/colon.jpg",
  },
  {
    name: "Corrientes",
    image: "/Images/corrientes.jpg",
  },
];

export const Places = () => {
  return (
    <section className="place container">
      <div className="place__wrapper container">

      {places.map(({ name, image }, i) => (
        <div key={i} className="place__border">
          <div className="place__card">
            <img src={image} className="place__image" alt="" />
            <p className="place__p">{name}</p>
            <Link className="place__btn" href="#">
              Comprar
            </Link>
          </div>
        </div>
      ))}
      </div>
    </section>
  );
};
