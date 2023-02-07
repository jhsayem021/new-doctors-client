import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
// import  { AuthContext } from '../../Context/AuthProvider';
// import useToken from '../../Hooks/useToken';
const AddDoctor = () => {
    const formData = new FormData();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {data: specialities = [],isLoading} = useQuery({
        queryKey: ['speciality'],
        queryFn: async()=>{
            const res = await fetch('https://new-doctors-server-jhsayem021.vercel.app/appointmentSpeciality')
            const data = await res.json();
            return data;
        }
    })

    const handleAddDoctor = (data) => {
       console.log(data)
            
    }

    if(isLoading){
        return <Loading></Loading>
    }
    

    return (
        <div className='w-96'>
            <h1 className="text-3xl">Add Doctor</h1>
            
            <form onSubmit={handleSubmit(handleAddDoctor)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type="text" {...register("name", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {/* {errors.name && <p className='text-red-500'>{errors.name.message}</p>} */}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email" {...register("email", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs" />
                        {/* {errors.email && <p className='text-red-500'>{errors.email.message}</p>} */}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Speciality</span></label>
                        <select 
                       {...register('speciality')} 
                        className="select select-bordered w-full max-w-xs">
  
  {
    specialities.map(speciality =><option
    key={speciality._id}
    value = {speciality.name}
    >{speciality.name}</option>)
  }
  
  
</select>  
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Photo</span></label>
                        <input type="file" {...register("img", {
                            required: "Photo is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {/* {errors.name && <p className='text-red-500'>{errors.name.message}</p>} */}
                    </div>


                    <input className='btn btn-accent w-full mt-4' value="Add Doctor" type="submit" />
                    
                </form>
        </div>
    );
};

export default AddDoctor;