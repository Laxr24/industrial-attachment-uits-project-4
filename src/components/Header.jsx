import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { userContext } from './UserProviderByContext';

const Header = () => {

    const { user, userLogOut } = useContext(userContext);
    // const [lgOut, setlgOut] = useState('')
    const logOutBtn = () => {
        userLogOut()
            .then(() => {
                console.log('logged out')
            })
            .catch(error => console.error(error))
    }

    const links = <>
        <li className='mx-3'><NavLink className={
            ({ isActive, isPending }) =>
                isPending ? 'pending px-2' : isActive ? 'text-red-500 underline' : ''

        } to="/">HOME</NavLink></li>
        <li className='mx-3'><NavLink className={
            ({ isActive, isPending }) =>
                isPending ? 'pending' : isActive ? 'text-red-500 underline' : ''

        } to="/donation">DONATION</NavLink></li>
        <li className='mx-3'><NavLink to="/statistics" className={
            ({ isActive, isPending }) =>
                isPending ? 'pending' : isActive ? 'text-red-500 underline' : ''

        }  >STATISTICS</NavLink></li>
        <li className='mx-3'><NavLink to="/signup" className={
            ({ isActive, isPending }) =>
                isPending ? 'pending' : isActive ? 'text-red-500 underline' : ''

        }  >SIGN_UP</NavLink></li>
    </>
    return (
        <div className='bg-[#fff7eef2]'>
            <div className="navbar ">
                <div className="flex-1 ">
                    <a className="normal-case ml-20 text-xl"><img className='h-11' src="../../images/logo.png" alt="" /></a>
                </div>
                <div className="flex">

                    <ul className="menu-horizontal items-center px-1">
                        {
                            user ? <>
                                <p>{user.email}</p>
                                <img className='w-[40px] h-[40px] rounded-full bg-gray-300 m-2' src={user.photoURL} alt="Shoes" />
                                <li>
                                    <button onClick={logOutBtn} className='btn btn-success'>Sign_OUt</button>
                                </li> 
                            </> :
                            <li className='mx-3'><NavLink to="/login" className={
                                ({ isActive, isPending }) =>
                                    isPending ? 'pending' : isActive ? 'text-red-500 underline' : ''

                            }  >LOG_IN</NavLink></li>

                        }
                        {links}
                        {/* {
                            user ?
                                <li>
                                    <button onClick={logOutBtn} className='btn btn-success'>Sign_OUt</button>
                                </li> :
                                <li className='mx-3'><NavLink to="/login" className={
                                    ({ isActive, isPending }) =>
                                        isPending ? 'pending' : isActive ? 'text-red-500 underline' : ''

                                }  >LOG_IN</NavLink></li>
                        } */}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;