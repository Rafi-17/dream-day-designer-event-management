import { useState } from "react";
import Navbar from "../../Components/Shared/Navbar";
import { Link } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";


const Login = () => {

    const [show,setShow]=useState(false);
    const [typed,setTyped]= useState('');
    
    const handleLogin=e=>{
        const email=e.target.email.value;
        const password= e.target.password.value;
        console.log(email,password);
    }
    const handlePassword=e=>{
        setTyped(e.target.value);
    }


    return (
        <div>
            <div className="bg-teal-200">
                <Navbar></Navbar>
            </div>
            <div   className="">
            <div className=" space-y-6 w-ful px-4 pt-3 pb-24 rounded-md shadow-xl min-h-[85vh] mx-auto bg-gradient-to-r from-cyan-700 to-cyan-400 flex flex-col">
                <h2 className="text-4xl font-bold mb-8 text-center text-white">Please Login</h2>
                <form className="" onSubmit={handleLogin}>
                    <div className="text-center">
                        <input className="bg-cyan-300 p-4 w-2/5 rounded-md mb-6 text-black" type="email" name="email" id=""  placeholder="Email" required/>
                    </div>
                    <br />
                    <div className="relative mx-auto w-2/5">
                        <input className="bg-cyan-300 p-4 w-full rounded-md text-black mb-1" 
                        type={show ? 'text' : 'password'}
                        onChange={handlePassword}
                        name="password" id="" placeholder="Password" required />
                        {
                            typed && <span className="absolute top-5 right-3 text-lg" onClick={()=>setShow(!show)}>{show? <AiFillEye></AiFillEye> : <AiFillEyeInvisible></AiFillEyeInvisible>}</span>
                        }
                        
                    </div>
                    <br />
                    <div className=" w-2/5 mx-auto"><Link className="text-red-800 underline">Forgot password</Link></div>
                    <br />
                    <div className="text-center">
                        <input className="bg-blue-800 p-4 w-2/5 rounded-md mt-2 text-white font-semibold text-xl cursor-pointer" type="submit" value="Login" />
                    </div>
                    <div className="w-2/5 mx-auto text-white mt-4">
                        <p>New here? Please <Link className="text-blue-800 font-bold underline" to='/register'>Register</Link></p>
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
};

export default Login;