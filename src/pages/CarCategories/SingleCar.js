import React from 'react';

const SingleCar = ({ carDetails }) => {
    const { carName, carCondition, carImg, mobileNumber, email, originalPrice, salePrice, sellerLocation, usesTime } = carDetails;

    return (
        <div>
            <div className='flex py-5 lg:mx-48 rounded-2xl backdrop-blur-sm shadow-2xl bg-white/30 justify-center items-center'>
                <img src={carImg} className='w-1/2 rounded-2xl ' alt="" />
                <div className='font-semibold ml-10 w-1/3'>
                    <h1 className='text-xl font-bold'> Car Model: {carName}</h1>
                    <h3 className='text-2xl font-bold'> Sale Price : {salePrice}</h3>
                    <h3 className='text-sm'>Original Price: {originalPrice}</h3>
                    <h3 className='text-sm'>Condition: {carCondition}</h3>
                    <h2 className='text-sm'>Location: {sellerLocation}</h2>
                    <h3>Used time period: {usesTime}</h3>
                    <h3>Posted time: { }</h3>
                    <h3>Seller Email: {email}</h3>
                    <h3>Mobile No : {mobileNumber}</h3>
                    <label htmlFor="my-modal-3" className="btn">Book Now</label>


                </div>
            </div>
            {/* <BookingModal bookDetails={bookDetails} key={bookDetails._id} ></BookingModal> */}
        </div>
    );
};

export default SingleCar;