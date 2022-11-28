import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import Footer from '../../Shared/Footer/Footer';
import Navber from '../../Shared/Navber/Navber';


const DashboardLayout = () => {
    const [userInfo, setUserInfo] = useState([]);
    const { user } = useContext(AuthContext);
    useEffect(() => {
        fetch(`http://localhost:5000/users/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setUserInfo(data);
            })
    }, [user?.email])
    return (
        <div className='bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200'>
            <Navber></Navber>
            <label htmlFor="dashboard-drawer" tabIndex={1} className="btn bg-black  fixed left-0 top-2 lg:hidden">
                OPen
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

                        {(userInfo.role === 'buyer') ?
                            <li><Link to="/dashboard/myorders">My Orders</Link></li>
                            :
                            <></>
                        }
                        {(userInfo.role === 'seller') ?
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