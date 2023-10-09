import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Navbar from "../../Components/Shared/Navbar";
import Card from "../../Components/Card/Card";
import Footer from "../../Components/Footer/Footer";
import Review from "../../Components/Review/Review";
import EventPlanning from "../../Components/EventPlanning/EventPlanning";


const Home = () => {

    const events= useLoaderData();

    return (
        <div>
            <div className="max-w-[1440px] mx-auto py-10">
                <Navbar></Navbar>
                <Banner></Banner>
                <h2 data-aos='flip-left' className="text-center text-5xl mt-20 mb-10 text-cyan-600 font-bold">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        events.map(event=><Card key={event.id} event={event}></Card>)
                    }
                </div>
                <EventPlanning></EventPlanning>
                <Review></Review>
            </div>
            <div className="mt-20">
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;