import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import UniqeCarSection from '../UniqeCarSection/UniqeCarSection';

const Home = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://assignment-12-server-side-taupe.vercel.app/categories')
            .then(res => res.json())
            .then(data => {
                setCategories(data);
            })
    }, [])

    return (
        <div>

            <Banner></Banner>

            <div>
                <h1 className='text-5xl text-center font-bold py-10'>Books Categories</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 w-11/12 mx-auto'>
                {
                    categories.map(category => <Link key={category._id} to={`/categories/${category.categoryid}`}><h1
                        className='text-white text-2xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg  mt-4 px-5 py-2.5 text-center mr-2 mb-2'>{category.category}</h1></Link>)
                }


            </div>

            <UniqeCarSection></UniqeCarSection>
        </div>
    );
};

export default Home;