import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import SingleCar from './SingleCar';

const CarCategories = () => {
    const carsInforms = useLoaderData();
    // console.log(carInformations);
    const { user } = useContext(AuthContext);

    return (
        <div className='grid grid-cols-1 gap-10 py-10 '>
            {/* <BookingModal></BookingModal> */}
            {
               carsInforms.map((carDetails) =><SingleCar 
               key={carDetails._id} 
               carDetails={carDetails} 
               ></SingleCar>)
            }
        </div>
    );
};

export default CarCategories;
