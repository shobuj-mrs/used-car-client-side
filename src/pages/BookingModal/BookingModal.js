import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const BookingModal = ({ name, price }) => {
    const { user } = useContext(AuthContext);



    return (
        <div>
            <input type="checkbox" id="car-book" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <form >
                        <label htmlFor="car-book" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="text-lg font-bold mb-3">Car Name: {name}</h3>
                        <h3 className="text-lg font-bold mb-3">Price: {price}</h3>
                        <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="mb-3 input w-full input-bordered" />
                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="mb-3 input w-full input-bordered" />
                        <input name="phone" type="text" placeholder="Phone Number" className="input mb-3 w-full input-bordered" />
                        <input name="phone" type="text" placeholder="Location" className="input mb-3 w-full input-bordered" />
                        <input className='btn w-full' type="submit" value="Submit" />

                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;