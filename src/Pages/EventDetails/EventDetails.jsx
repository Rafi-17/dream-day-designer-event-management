import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../Components/Shared/Navbar";
import Footer from "../../Components/Footer/Footer";

const EventDetails = () => {

    const events= useLoaderData();
    const { id } = useParams();
    console.log(id, events);
    const event= events.find(event=>event.id == id);
    const {name, image, price, detailed_description} = event;
    return (
        <div className="">
            <div className="max-w-[1440px] mx-auto py-6">
                <Navbar></Navbar>
            </div>
            <div className="max-w-[1440px] mx-auto py-6 px-4mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                <img className="w-[900px] h-[300px] md:h-[500px]" src={image} alt="" />
                <div className="flex flex-col px-2 lg:px-0">
                    <h1 className="text-3xl md:text-5xl font-extrabold text-cyan-600 mb-3">{name}</h1>
                    <div className="w-full border-black border-2"></div>
                    <p className="font-bold text-xl mt-6 text-indigo-500">Price: {price}</p>
                    <p className="mb-6 flex-grow font-medium mt-3 text-gray-500">{detailed_description}</p>
                    <div className="w-full py-4 bg-cyan-600 text-center lg:rounded-md text-white text-lg font-semibold">
                        <button className="text-center">Confirm Event Arangement</button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default EventDetails;