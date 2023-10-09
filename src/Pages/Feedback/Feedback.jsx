import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Shared/Navbar";


const Feedback = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <div className="max-w-[1440px] min-h-[52vh] mx-auto px-3 lg:px-1">
                <h2 className="text-2xl md:text-4xl font-bold mt-4 mb-6">Give your feedback here:</h2>
                <textarea placeholder="Your feedback" rows={4} className=" textarea textarea-bordered textarea-lg w-[300px] md:w-[500px]" ></textarea>
                <br />
                <input className="bg-cyan-600 px-4 py-2 rounded-md mt-2 text-white" type="submit" value="Submit" />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Feedback;