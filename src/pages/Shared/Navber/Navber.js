import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { RiCloseCircleLine } from "react-icons/ri";
import { AuthContext } from '../../../Context/AuthProvider';

const Navber = () => {
    const [navbar, setNavbar] = useState(false);
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.error(err))
    }


    const menuItems = <>
        <li className="text-white font-medium hover:text-indigo-300">
            <Link to={'/'} >Home</Link>
        </li>
        <li className="text-white font-medium hover:text-indigo-300">
            <Link to={'/blogs'} >Blog</Link>
        </li>
        <li className="text-white font-medium hover:text-indigo-300">
            <Link >About US</Link>
        </li>
        <li className="text-white font-medium hover:text-indigo-300">
            <Link >Contact US</Link>
        </li>
    </>


    return (
        <nav className="w-full  bg-purple-500 shadow">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between md:block">
                        <Link className='flex justify-center items-center' to={'/'}>
                            <img className='w-16'
                                src="https://i.ibb.co/LnfwhdX/car-logo-preview.png" alt="" />
                            <h2 className='text-white font-semibold text-xl'>Car Buy&Sale</h2>
                        </Link>

                        <div className="md:hidden lg:hidden">
                            <button
                                className="p-2 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <RiCloseCircleLine></RiCloseCircleLine>

                                ) : (
                                    <FaBars></FaBars>


                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                            }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            {menuItems}
                        </ul>

                        <div className="space-y-2 md:hidden sm:inline-block">
                            {user?.uid ?
                                <button
                                    className="btn btn-ghost text-white"
                                    onClick={handleLogOut}
                                >
                                    Sign Out
                                </button>
                                :
                                <>
                                    <Link
                                        to='/login'
                                        className="btn btn-ghost w-full text-white"
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        to='signup'
                                        className="btn btn-ghost w-full text-white"
                                    >
                                        Sign up
                                    </Link>
                                </>
                            }
                        </div>
                    </div>
                </div>
                <div className="hidden  space-x-2 md:inline-block">
                    {user?.uid ?
                        <button
                            className='btn btn-ghost text-white'
                            onClick={handleLogOut}>Sign Out</button>
                        :
                        <>
                            <Link
                                to='/login'
                                className=" mx-2 font-medium  hover:text-indigo-300 text-white"
                            >
                                Login
                            </Link>
                            <Link
                                to='signup'
                                className="mx-2 font-medium  hover:text-indigo-300 text-white"
                            >
                                Sign up
                            </Link>
                        </>
                    }
                </div>
            </div>
        </nav>
    );
};

export default Navber;