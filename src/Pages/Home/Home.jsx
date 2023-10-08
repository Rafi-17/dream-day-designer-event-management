import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Navbar from "../../Components/Shared/Navbar";
import Card from "../../Components/Card/Card";
import Footer from "../../Components/Footer/Footer";


const Home = () => {

    const events= useLoaderData();

    return (
        <div className="max-w-[1440px] mx-auto py-10">
            <Navbar></Navbar>
            <Banner></Banner>
            <div className="grid grid-cols-3 gap-6 mt-20">
                {
                    events.map(event=><Card key={event.id} event={event}></Card>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;