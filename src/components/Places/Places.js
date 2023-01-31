import { places } from "../../Data/Places";
import "./places.css";

export const Places = () => {
  return (
    <section className="place container">
      {places.map(({ name, image }, i) => (
        <div key={i} className="place__border">
          <div className="place__card">
            <img src={image} className="place__image" />
            <p className="place__p">{name}</p>
            <a className="place__btn">Comprar</a>
          </div>
        </div>
      ))}
    </section>
  );
};
