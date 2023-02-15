import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);
    const closeModal = ()=>{
        setDeletingDoctor(null);
    }
    const {data: doctors=[], isLoading , refetch} = useQuery({
        queryKey: ['doctors'],
        queryFn: async () =>{
            try{
            const res = await fetch('http://localhost:5000/doctors', {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json();
            return data;
            }
            catch(er){

            }
        }
    })

const handleDoctorDelete = (doctor) =>{
console.log(doctor)
fetch(`http://localhost:5000/doctors/${doctor._id}`,{
    method:'DELETE',
    headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}`
    }
})
.then(res=>res.json())
.then(data =>{
    console.log(data)
    if(data.deleteCount>0){

        refetch();
        toast.success(`${doctor.name} delete successfully`)
    }
    
})

}

    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-3xl '>Manage Doctors</h1>
        
            <div className="overflow-x-auto my-10">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th></th>
        <td></td>
        <th>Name</th>
        <th>Email</th>
        <th>Speciality</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      
      {
        doctors.map((doctor,i)=><tr
        key={doctor._id}
        >
        <th>{i+1}</th>
        <td><div className="avatar">
  <div className="rounded-full w-20">
    <img src={doctor.image} alt="" />
  </div>
</div></td>
        <td>{doctor.name}</td>
        <td>{doctor.email}</td>
        <td>{doctor.speciality}</td>
        <td>
        <label onClick={()=>setDeletingDoctor(doctor)} htmlFor="Confirmation-modal" className="btn btn-xs btn-error ">Delete</label>
            {/* <button   className=''></button> */}
        </td>
      </tr>)
      }
      
    </tbody>
  </table>
</div>
{
    deletingDoctor && <ConfirmationModal
    title={`Are you sure want to Delete`}
    message={`If you delete, ${deletingDoctor?.name} it can't be undone`}
    successAction = {handleDoctorDelete}
    modalData = {deletingDoctor}
    closeModal = {closeModal}
    ></ConfirmationModal>
}
        
        </div>
    );
};

export default ManageDoctors;