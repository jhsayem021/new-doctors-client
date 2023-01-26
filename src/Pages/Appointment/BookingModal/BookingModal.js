import { format } from 'date-fns/esm';
import React from 'react';

const BookingModal = ({ treatment, selectedDate , setTreatment }) => {
    const { name, slots } = treatment;
    const date = format(selectedDate, 'PP')

    const handleForm = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const slot = form.slot.value;
        const email = form.email.value;
        const phone = form.phone.value;
        console.log( date,slot,name, email, phone);

        const booking = {
            treatment: treatment.name,
            appointmentDate : date,
            patient: name,
            slot,
            email,
            phone,
            
        }
        console.log(booking);
        setTreatment(null);
    }

    return (
        <>
            <input type="checkbox" id="Booking-Modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="Booking-Modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-10">{name}</h3>
                    <form onSubmit={handleForm} className='grid gap-4 grid-cols-1' >
                        <input type="text" value={date} disabled className="input input-bordered w-full" />
                        <select name= "slot" className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, i) =><option
                                key={i}
                                >{slot}</option> )
                            }
                            
                            
                        </select>
                        <input name="name" type="text" placeholder="name" className="input input-bordered w-full" />
                        <input name="email" type="email" placeholder="email" className="input input-bordered w-full" />
                        <input name="phone" type="text" placeholder="phone" className="input input-bordered w-full" />
                        <input type="submit" value="Submit" className="btn btn-accent text-white w-full" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;