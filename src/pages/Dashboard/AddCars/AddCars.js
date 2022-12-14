import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';



const AddCars = () => {


    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useContext(AuthContext);
    const handleToCarAdd = (data) => {
        const carName = data.carName;
        const carImg = data.photoURL;
        const carDetails = data.carDetails;
        const salePrice = data.price;
        const carCategory = data.carCategory;
        const carCondition = data.condition;
        const usesTime = data.usesTime;
        const sellerLocation = data.carOwnerLocation;
        const mobileNumber = data.mobileNumber;
        const email = user.email;



        const allCars = {
            carName,
            salePrice,
            carCondition,
            mobileNumber,
            sellerLocation,
            carCategory,
            carDetails,
            usesTime,
            email,
            carImg,

        }
        console.log(allCars)
        fetch('https://assignment-12-server-side-taupe.vercel.app/allcars', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(allCars)
        })
            .then(res => res.json())
            .then(data => {

            })

        toast.success('car added successfully')


    }


    return (
        <section className='bg-gradient-to-r from-orange-50 to-red-100' >

            <form onSubmit={handleSubmit(handleToCarAdd)} className="w-full shadow-2xl p-4 flex items-center justify-center" >
                <div className="bg-white  rounded-2xl py-6 px-10 sm:max-w-md w-full backdrop-blur-sm bg-white/30 ">
                    <div className="sm:text-3xl text-2xl font-semibold text-center text-purple-600  mb-4">
                        Enter car information
                    </div>
                    <div className="">
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Car Model</span></label>
                            <input type="text" {...register("carName", {
                                required: "Name is Required"
                            })} className="input input-bordered w-full max-w-xs input-sm" />
                            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Car Photo URL</span></label>
                            <input type="text" {...register("photoURL", {
                                required: "Name is Required"
                            })} className="input input-bordered w-full max-w-xs input-sm" />
                            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Uses Time</span></label>
                            <input type="text" {...register("usesTime", {
                                required: "Name is Required"
                            })} className="input input-bordered w-full max-w-xs input-sm" />
                            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Car Details</span></label>
                            <input type="text" {...register("carDetails", {
                                required: "Name is Required"
                            })} className="input input-bordered w-full max-w-xs input-sm" />
                            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Sell Price</span></label>
                            <input defaultValue={'$'} type="text" {...register("price", {
                                required: "Name is Required"
                            })} className="input input-bordered w-full max-w-xs input-sm" />
                            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Location</span></label>
                            <input type="text" {...register("carOwnerLocation", {
                                required: "Name is Required"
                            })} className="input input-bordered w-full max-w-xs input-sm" />
                            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Phone Number</span></label>
                            <input defaultValue={'+880'} type="text" {...register("mobileNumber", {
                                required: "Name is Required"
                            })} className="input input-bordered w-full max-w-xs input-sm" />
                            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Select Your Car Condition</span></label>
                            <select
                                {...register("condition")}
                                className=" select select-bordered select-sm w-full max-w-xs">
                                <option defaultValue>Excellent</option>
                                <option>Good</option>
                                <option>Fair</option>

                            </select>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Select Car Category</span></label>
                            <select
                                {...register("carCategory")}
                                className=" select select-bordered select-sm w-full max-w-xs">
                                <option>honda</option>
                                <option>jaguar</option>
                                <option>tesla</option>

                            </select>
                        </div>

                        <div className="flex">
                            <input type="checkbox" className="border-green-600 " value="" />
                            <div className="px-3 text-gray-500">
                                I accept terms & conditions
                            </div>
                        </div>
                        <div className="flex justify-center my-6">
                            <button value="Add car" type="submit" className=" rounded-full  p-3 w-full sm:w-56   bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 text-white text-lg font-semibold " >
                                Add car
                            </button>
                        </div>

                    </div>
                </div>
            </form>
        </section>
    );
};

export default AddCars;