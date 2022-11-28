import React, { useContext, useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import Footer from '../../Shared/Footer/Footer';
import Navber from '../../Shared/Navber/Navber';


const DashboardLayout = () => {
    const [userInfo, setUserInfo] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`https://assignment-12-server-side-taupe.vercel.app/users/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setUserInfo(data);
            })
            .catch(err => console.error(err))
    }, [user?.email])

    return (
        <div className='bg-gradient-to-r from-violet-50 to-fuchsia-100'>
            <Navber></Navber>

            <label htmlFor="dashboard-drawer" tabIndex={1} className=" fixed left-0 mx-2 top-6 lg:hidden">
                <FaBars className='text-sm'></FaBars>

            </label>

            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>

                <div className="drawer-side ">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content backdrop-blur-sm bg-white/30 font-semibold">
                        {(userInfo.role === 'admin') ?
                            <>
                                <li><Link to="/dashboard/allbuyers">All Buyers</Link></li>
                                <li><Link to="/dashboard/allsellers">All Sellers</Link></li>
                                <li><Link to="/dashboard/reporteditems">Reported Items</Link></li>
                            </>
                            :
                            <></>
                        }

                        {(userInfo.role === 'Buyer') ?
                            <li><Link to="/dashboard/myorders">My Orders</Link></li>
                            :
                            <></>
                        }

                        {(userInfo.role === 'Seller') ?
                            <>
                                <li><Link to="/dashboard/addcars">Add Cars</Link></li>
                                <li><Link to="/dashboard/addedcars">My Cars</Link></li>
                            </>
                            :
                            <></>
                        }


                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;