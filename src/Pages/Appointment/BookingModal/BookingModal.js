import { format } from 'date-fns/esm';
import React from 'react';
import { toast } from 'react-hot-toast';

const BookingModal = ({ treatment, selectedDate , setTreatment ,user , refetch }) => {
    const { name, slots , price } = treatment;
    const date = format(selectedDate, 'PP')

    const handleForm = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const slot = form.slot.value;
        const email = form.email.value;
        const phone = form.phone.value;
        console.log( date,slot,name, email, phone, price);

        const booking = {
            treatment: treatment.name,
            appointmentDate : date,
            patient: name,
            slot,
            email,
            phone,
            price
            
        }

        fetch('https://new-doctors-server-jhsayem021.vercel.app/bookings',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                console.log(data);
                toast('Booking Successfully Confirmed')
                refetch();
        setTreatment(null);
        
            }
            else{
                toast(data.message)
            }
            
        })
        
    }

    return (
        <>
            <input type="checkbox" id="Booking-Modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="Booking-Modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-10">{name} <span className='ml-8 '>Price: <span className='text-primary'>${price}</span></span> </h3>
                    
                    <form onSubmit={handleForm} className='grid gap-4 grid-cols-1' >
                        <input type="text" value={date} disabled className="input input-bordered w-full" />
                        <select name= "slot" className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, i) =><option
                                key={i}
                                >{slot}</option> )
                            }
                            
                            
                        </select>
                        <input name="name"  value={user?.displayName} disabled type="text" placeholder="name" className="input input-bordered w-full" />
                        <input name="email" value={user?.email} disabled type="email" placeholder="email" className="input input-bordered w-full" />
                        <input name="phone" type="text" placeholder="phone" className="input input-bordered w-full" />
                        <input type="submit" value="Submit" className="btn btn-accent text-white w-full" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;