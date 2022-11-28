import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            <div className='flex justify-center p-3 items-center'>
                <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-blue-600"></div>
            </div>
        )
    }
    if (!user) {

        return <Navigate
            to='/login'
            state={{ from: location }}
            replace
        >

        </Navigate>
    }

    return children;
};

export default PrivetRoute;