import c1 from "../../assets/customer1.jpeg";
import c2 from "../../assets/customer2.jpeg";
import c3 from "../../assets/customer3.jpeg";

const Review = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold text-center mt-20 mb-10">What Customer Say About Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-16">
        <div className="border-2 border-indigo-400 rounded-md p-3 max-w-sm">
          <h2 className="text-center text-2xl font-bold mb-5 text-cyan-600">Client Review</h2>
          <img className="rounded-full mx-auto mb-4" src={c1} alt="" />
          <div className="text-center">
            <div className="rating">
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
              <input type="radio" name="rating-2"className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
            </div>
            <p className="mb-5">Exceptional service! The event was organized flawlessly, and the attention to detail was outstanding. Highly recommended!</p>
            <h2 className="font-bold text-xl">Kevin De Bruyne</h2>
          </div>
        </div>
        <div className="border-2 border-indigo-400 rounded-md p-3 max-w-sm">
          <h2 className="text-center text-2xl font-bold mb-5 text-cyan-600">Client Review</h2>
          <img className="rounded-full mx-auto mb-4 w-56" src={c2} alt="" />
          <div className="text-center">
            <div className="rating">
              <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400"/>
              <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400"/>
              <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400"/>
              <input type="radio" name="rating-3"className="mask mask-star-2 bg-orange-400" checked/>
              <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400"/>
            </div>
            <p className="mb-5">Great experience working with this team. The event turned out beautifully. A point deducted for a slight delay, but overall, very satisfied.</p>
            <h2 className="font-bold text-xl">Eva Martinez</h2>
          </div>
        </div>
        <div className="border-2 border-indigo-400 rounded-md p-3 max-w-sm">
          <h2 className="text-center text-2xl font-bold mb-5 text-cyan-600">Client Review</h2>
          <img className="rounded-full mx-auto mb-4 w-56" src={c3} alt="" />
          <div className="text-center">
            <div className="rating">
              <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400"/>
              <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400"/>
              <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400"/>
              <input type="radio" name="rating-4"className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400"checked/>
            </div>
            <p className="mb-5">Absolutely awesome! From planning to execution, everything was perfect. The team was professional and creative. Couldnt have asked for better!</p>
            <h2 className="font-bold text-xl">David Lee</h2>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Review;
