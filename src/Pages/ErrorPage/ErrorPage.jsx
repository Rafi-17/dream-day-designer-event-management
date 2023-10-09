import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="min-h-screen flex justify-center items-center flex-col">
                <h2 className="text-5xl text-red-600 font-extrabold mb-4">Oops!</h2>
                <p className="mb-4 text-xl font-semibold text-gray-500">No page found</p>
                <Link to='/'><button className="px-2 py-2 rounded-md bg-cyan-600 text-white">Go back Home</button></Link>
        </div>
    );
};

export default ErrorPage;