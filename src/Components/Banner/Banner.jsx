import banner from '../../assets/banner.jpg'

const Banner = () => {
  return (
    <div className='mt-5'>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            `url(${banner})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-10 text-3xl md:text-6xl font-bold">Your Social Event Experts</h1>
            <p className="mb-5 text-lg md:text-xl font-semibold">
            Crafting Unforgettable Moments for Every Occasion, from Stunning Weddings and Lavish Corporate Galas to Intimate Celebrations and Vibrant Community Events.
            </p>
            <button className="btn btn-primary bg-cyan-600">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
