import "./index.css";

const regions = [
  {
    name: "Norte",
    image:
      "https://www.flechabus.com.ar/wp-content/uploads/2020/07/viaja-micro-flecha-bus-norte-argentina.jpg",
  },
  {
    name: "Litoral",
    image:
      "https://www.flechabus.com.ar/wp-content/uploads/2020/07/viaja-micro-flecha-bus-entre-rios-argentina.jpg",
  },
  {
    name: "Buenos Aires",
    image:
      "https://www.flechabus.com.ar/wp-content/uploads/2020/07/viaja-micro-flecha-bus-capital-federal-buenos-aires-argentina.jpg",
  },
  {
    name: "Cordoba",
    image:
      "https://www.flechabus.com.ar/wp-content/uploads/2020/07/viaja-micro-flecha-bus-brasil-camboriu-argentina-florianopolis.jpg",
  },
];

export const Regions = () => {
  return (
    <section className="regions">
      <div className="regions__container container">
        {regions.map(({ name, image }, i) => {
          return <RegionCard key={i} name={name} image={image} />;
        })}
      </div>
    </section>
  );
};

const RegionCard = ({ image, name }) => {
  return (
    <div style={{ backgroundImage: `url(${image})` }} className="card">
      <div className="card__container">
        <p className="card__text">{name}</p>
      </div>
    </div>
  );
};
