import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
// import  { AuthContext } from '../../Context/AuthProvider';
// import useToken from '../../Hooks/useToken';
const AddDoctor = () => {
    const navigate = useNavigate()
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { data: specialities = [], isLoading } = useQuery({
        queryKey: ['speciality'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/appointmentSpeciality')
            const data = await res.json();
            return data;
        }
    })

    const handleAddDoctor = (data) => {
        const formData = new FormData();
        console.log(data.image[0])
        const image = data.image[0];
        formData.append('image',image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
fetch(url , {
    method: 'POST',
    body: formData
})
.then(res => res.json())
.then(imageData => {
    console.log(imageData);
    if(imageData.success){
        console.log(imageData.data.url);
        const doctor = {
            name: data.name,
            email: data.email,
            speciality: data.speciality,
            image: imageData.data.url
        }

        // post doctor 

        fetch('http://localhost:5000/doctors', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(doctor)

        })
        .then(res => res.json())
        .then(result=>{
            console.log(result)
            toast.success(`${data.name} added successful`);
            navigate('/dashboard/managedoctors')
            
        })


    }
})

    }

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div className=' w-80  '>
            <h1 className="text-3xl mb-5">Add Doctor</h1>

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
                            specialities.map(speciality => <option
                                key={speciality._id}
                                value={speciality.name}
                            >{speciality.name}</option>)
                        }


                    </select>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Photo</span></label>
                    <input type="file" {...register("image", {
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