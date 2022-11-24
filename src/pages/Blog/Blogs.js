import React from 'react';
import { Link } from 'react-router-dom';

const Blogs = () => {
    return (
        <div>
            <div className=" shadow-2xl">
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
                    <div>
                        <span className="text-sm dark:text-gray-400">Jun 1, 2020</span>

                    </div>
                    <div className="mt-3">
                        <Link className="text-2xl font-bold hover:underline">Nos creasse pendere crescit angelos etc</Link>
                        <p className="mt-2">Tamquam ita veritas res equidem. Ea in ad expertus paulatim poterunt. Imo volo aspi novi tur. Ferre hic neque vulgo hae athei spero. Tantumdem naturales excaecant notaverim etc cau perfacile occurrere. Loco visa to du huic at in dixi aër.</p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <Link className="hover:underline dark:text-violet-400">Read more</Link>
                        <div>
                            <Link className="flex items-center">
                                <img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
                                <span className="hover:underline dark:text-gray-400">Leroy Jenkins</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;