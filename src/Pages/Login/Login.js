import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
const Login = () => {

    const { register, handleSubmit } = useForm();
    const handleLogin = logData =>{
        console.log(logData);
    }

    return (
        <div className='h-[800]  flex justify-center items-center my-16 mt-24'>
        
        <div className='w-96 p-7' >
        <h1 className='text-3xl text-center text-primary font-bold font-serif ' >Login</h1>
            <form onSubmit={handleSubmit(handleLogin)} className="grid gap-4 grid-cols-1" >

                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Email</span></label>
                    <input type="email" {...register("email")}  className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Password</span></label>
                    <input type="password" {...register("password")}  className="input input-bordered w-full max-w-xs" />
                </div>
                
                    <input type="submit" value="Login"   className="btn btn-primary text-white w-full max-w-xs" />
               
            </form>
            <p className='text-center my-4'>New to Doctors Portal <Link to="/signup" className='text-secondary' >create new account</Link> </p>

            <div className="divider">OR</div>
            <button className='btn btn-outline  w-full'>Continue with Google</button>
        </div>
        
        </div>
    );
};

export default Login;