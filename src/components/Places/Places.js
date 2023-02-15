import { Link } from "react-router-dom";

import "./places.css";

const places = [
  {
    name: "Parana",
    image: "/images/parana.jpg",
  },
  {
    name: "Salta",
    image: "/images/salta.jpg",
  },
  {
    name: "Colon",
    image: "/images/colon.jpg",
  },
  {
    name: "Corrientes",
    image: "/images/Corrientes.jpg",
  },
];

export const Places = () => {
  return (
    <section className="place container">
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
    </section>
  );
};
