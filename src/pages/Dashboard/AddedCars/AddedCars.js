import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';


const AddedCars = () => {
    const [userCars, setUserCars] = useState([]);

    const { user } = useContext(AuthContext);
    useEffect(() => {
        fetch(`http://localhost:5000/allcars/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setUserCars(data);
            })
    }, [user?.email])

    return (
        <div>
            <table className="table text-center w-full backdrop-blur-sm bg-white/30">
                <thead className=''>
                    <tr>
                        <th></th>
                        <th>Car Model</th>
                        <th>Price</th>
                        <th>Advertise</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userCars.map((car, i) => <tr key={car._id}>
                            <th>{i + 1}</th>
                            <td>{car.carName}</td>
                            <td>{car.salePrice}</td>
                            <td>Promote</td>
                            <td><button className='btn btn-xs btn-danger'>Delete</button></td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default AddedCars;