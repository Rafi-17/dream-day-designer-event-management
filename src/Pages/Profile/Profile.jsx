import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Navbar from "../../Components/Shared/Navbar";
import Footer from "../../Components/Footer/Footer";


const Profile = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <Navbar></Navbar>
            <div className="text-center mt-6 min-h-[50vh]">
                <h2 className="text-4xl font-bold text-cyan-600 mb-6">Your Profile:</h2>
                <div className=" w-32 border-8 mx-auto mb-6">
                    <img className="rounded-full" src={user.photoURL} alt="" />
                </div>
                <p className="text-xl font-semibold">Name: {user.displayName}</p>
                <p className="text-xl font-semibold">Email: {user.email}</p>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Profile;