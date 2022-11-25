import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../Context/AuthProvider';
import carCover from '../../assets/cover/car-cover.jpg';


const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [signUpError, setSignUpError] = useState('');
    const { createUser, updateUser, googleLogIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    // google log in
    const handleGoogleLogIn = () => {
        googleLogIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(err => console.error(err));
    }

    // email and password create a new account
    const handleSignUp = (data) => {
        console.log(data);
        setSignUpError('')

        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('User created successfully')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        navigate('/')
                    })
                    .catch(err => console.error(err));
            })
            .catch(error => {
                console.error(error)
                setSignUpError(error.message)
            });

    }

    return (
        <section className='py-16 flex justify-center items-center'
        style={{
            background: `url(${carCover})`
        }}>
            <div className='w-96 p-7'>
                <h2 className='text-2xl font-bold text-center text-white'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text text-white">Name</span></label>
                        <input type="text"
                            {...register("name", {
                                required: "Name is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {
                            errors.name && <p className='text-red-500'>{errors.name.message} </p>
                        }

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text text-white">Email</span></label>
                        <input type="email"
                            {...register("email", {
                                required: true
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {
                            errors.email && <p className='text-red-500'>{errors.email.message} </p>
                        }

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text text-white">Password</span></label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: "Password must be 6 letter long " },
                                pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must be strong' }
                            })}
                            className="input input-bordered w-full mb-6 max-w-xs" />
                        {
                            errors.password && <p className='text-red-500'>{errors.password.message} </p>
                        }

                    </div>
                    <input className='btn btn-accent w-full' value="Sign Up" type="submit" />
                    <div>
                        {
                            signUpError && <p className='text-red-600'> {signUpError} </p>
                        }
                    </div>
                </form>
                <p className='text-white'>Already have an account <Link className='text-secondary' to="/login">Please Login</Link></p>
                <div className="divider text-white">OR</div>
                <button
                    onClick={handleGoogleLogIn}
                    className='btn btn-outline w-full'
                >
                    <FcGoogle className='text-2xl mx-2'></FcGoogle>
                   <span className='text-blue-600 hover:text-white'> Google Login</span>
                </button>
            </div>
        </section>
    );
};

export default Signup;