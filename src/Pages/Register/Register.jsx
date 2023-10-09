import { useContext, useState } from "react";
import Navbar from "../../Components/Shared/Navbar";
import { Link } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { AuthContext } from "../../Providers/AuthProvider";
import swal from "sweetalert";
import { FcGoogle } from "react-icons/fc";
import Footer from "../../Components/Footer/Footer";

const Register = () => {
  const { register, profileUpdate, setLoading, googleLogin } = useContext(AuthContext);

  const [show, setShow] = useState(false);
  const [typed, setTyped] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const imageURL = e.target.imageURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, imageURL, email, password);
    //error detection
    if (password.length < 6) {
      return swal(
        "Error!",
        "Password must be six characters or longer",
        "error"
      );
    } else if (!/[A-Z]/.test(password)) {
      return swal(
        "Error!",
        "Password must have at least one capital letter",
        "error"
      );
    }
    if (!/[\W_]/.test(password)) {
      return swal(
        "Error!",
        "Password must have at least one special character",
        "error"
      );
    }
    //creating user
    register(email, password)
      .then((result) => {
        swal("Great!", "User created successfully", "success");
        //update profile
        profileUpdate(name, imageURL).then(() => {
          setLoading(false);
        });
        console.log(result.user);
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
        <div className=" space-y-6 w-ful px-4 pt-3 pb-24 rounded-md shadow-xl min-h-[85vh] mx-auto bg-gradient-to-r from-cyan-700 to-cyan-400 flex flex-col">
          <h2 className="text-4xl font-bold mb-8 text-center text-white">
            Please Register
          </h2>
          <form className="" onSubmit={handleRegister}>
            <div className="text-center">
              <input
                className="bg-cyan-300 p-4 w-3/4 md:w-1/2 lg:w-2/5 rounded-md mb-6 text-black"
                type="text"
                name="name"
                placeholder="Name"
                required
              />
            </div>

            <div className="text-center">
              <input
                className="bg-cyan-300 p-4 w-3/4 md:w-1/2 lg:w-2/5 rounded-md mb-6 text-black"
                type="text"
                name="imageURL"
                placeholder="ImageURL"
                required
              />
            </div>

            <div className="text-center">
              <input
                className="bg-cyan-300 p-4 w-3/4 md:w-1/2 lg:w-2/5 rounded-md mb-6 text-black"
                type="email"
                name="email"
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

            <div className="text-center">
              <input
                className="bg-blue-800 p-4 w-3/4 md:w-1/2 lg:w-2/5 rounded-md mt-8 text-white font-semibold text-xl cursor-pointer"
                type="submit"
                value="Register"
              />
            </div>
            <p className="w-3/4 md:w-1/2 lg:w-2/5 mx-auto text-center my-2 font-semibold">or Continue With</p>
            <div className="w-3/4 md:w-1/2 lg:w-2/5 mx-auto">
                <button onClick={handleGoogleSign} className="btn btn-outline w-full ">
                <FcGoogle className="text-xl"></FcGoogle>
                <span className="font-bold text-lg hover:text-white">Google</span>
                </button>
            </div>
            <div className="w-3/4 md:w-1/2 lg:w-2/5 mx-auto text-white mt-4">
              <p>
                Already have account? Please{" "}
                <Link className="text-blue-800 font-bold underline" to="/login">
                  Login
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

export default Register;
