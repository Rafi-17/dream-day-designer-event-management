import { Link } from "react-router-dom";

const Card = ({ event }) => {
  const { id, name, image, price, description } = event;
  return (
    <div className="border-[6px] border-cyan-700 rounded-lg">
      <div
        className="hero max-h-80"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="text-indigo-300">
            <h1 className="mb-5 text-xl md:text-3xl font-bold">{name}</h1>
            <p className="mb-5 text-lg md:text-xl font-semibold">{price}</p>
            <p className="mb-4 font-medium">{description}</p>
            <Link to={`/event/${id}`}><button className="btn btn-primary bg-cyan-700 hover:bg-sky-900 px-8">Details</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
