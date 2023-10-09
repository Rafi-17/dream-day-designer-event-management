import { useContext, useState } from "react";
import Navbar from "../../Components/Shared/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { AuthContext } from "../../Providers/AuthProvider";
import swal from "sweetalert";
import { FcGoogle } from "react-icons/fc";
import Footer from "../../Components/Footer/Footer";

const Login = () => {
  const { login, setLoading, googleLogin } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const [typed, setTyped] = useState("");
  const navigate=useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    //sign in
    login(email, password)
      .then((result) => {
        console.log(result.user);
        swal("Great!", "Logged in successfully", "success");
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        swal("", error.message, "error");
      });
  };
  const handleGoogleSign=()=>{
    googleLogin()
    .then(()=>{
        swal("Great!", "Successfully signed in with google", "success");
    })
    .catch(error=>{
        setLoading(false);
        swal("", error.message, "error");
    })
  }
  const handlePassword = (e) => {
    setTyped(e.target.value);
  };

  return (
    <div>
      <div className="bg-teal-200">
        <Navbar></Navbar>
      </div>
        <hr />          
      <div className="">
        <div className=" space-y-6 w-ful px-4 pt-3 pb-24 rounded-md shadow-xl min-h-[40vh] mx-auto bg-gradient-to-r from-cyan-700 to-cyan-400 flex flex-col">
          <h2 className="text-4xl font-bold mb-8 text-center text-white">
            Please Login
          </h2>
          <form className="" onSubmit={handleLogin}>
            <div className="text-center">
              <input
                className="bg-cyan-300 p-4 w-3/4 md:w-1/2 lg:w-2/5 rounded-md mb-6 text-black"
                type="email"
                name="email"
                id=""
                placeholder="Email"
                required
              />
            </div>

            <div className="relative mx-auto w-3/4 md:w-1/2 lg:w-2/5">
              <input
                className="bg-cyan-300 p-4 w-full rounded-md text-black mb-1"
                type={show ? "text" : "password"}
                onChange={handlePassword}
                name="password"
                id=""
                placeholder="Password"
                required
              />
              {typed && (
                <span
                  className="absolute top-5 right-3 text-lg"
                  onClick={() => setShow(!show)}
                >
                  {show ? (
                    <AiFillEye></AiFillEye>
                  ) : (
                    <AiFillEyeInvisible></AiFillEyeInvisible>
                  )}
                </span>
              )}
            </div>

            <div className=" w-3/4 md:w-1/2 lg:w-2/5 mx-auto mt-1">
              <Link className="text-red-800 underline">Forgot password</Link>
            </div>

            <div className="text-center mt-6">
              <input
                className="bg-blue-800 p-4 w-3/4 md:w-1/2 lg:w-2/5 rounded-md  text-white font-semibold text-xl cursor-pointer"
                type="submit"
                value="Login"
              />
            </div>
            
            <p className="w-3/4 md:w-1/2 lg:w-2/5 mx-auto text-center my-2 font-semibold">
              or Continue With
            </p>
            <div className="w-3/4 md:w-1/2 lg:w-2/5 mx-auto">
              <button onClick={handleGoogleSign} className="btn btn-outline w-full ">
                <FcGoogle className="text-xl"></FcGoogle>
                <span className="font-bold text-lg hover:text-white">
                  Google
                </span>
              </button>
            </div>
            <div className="w-3/4 md:w-1/2 lg:w-2/5 mx-auto text-white mt-4">
              <p>
                New here? Please{" "}
                <Link
                  className="text-blue-800 font-bold underline"
                  to="/register"
                >
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      <hr />
      <Footer></Footer>
    </div>
  );
};

export default Login;
