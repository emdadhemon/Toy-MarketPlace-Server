import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import logo from "../../assets/logo.png"
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    console.log(user)

    const handleLogout = () => {
        logOut();
    }

    return (
        <div className='bg-gray-900 py-2'>
            <div className='navbar w-[85%] mx-auto'>
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/alltoys">All Toys</Link></li>
                            {
                                user ? <><li><Link to="/addtoys">Add A Toy</Link></li><li><Link to='/mytoys'>MyToys</Link></li></>
                                    : ""
                            }
                            <li><Link to="/blog">Blogs</Link></li>
                        </ul>
                    </div>
                    <Link to="/"><img className='h-12 hover:bg-black' src={logo} alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/alltoys">All Toys</Link></li>


                        {
                            user ? <><li><Link to="/addtoys">Add A Toy</Link></li><li><Link to='/mytoys'>MyToys</Link></li></>
                                : ""
                        }
                        <li><Link to="/blog">Blogs</Link></li>

                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        !user && <Link to="/signup" className="btn bg-[#f98daa] hidden lg:block lg:pt-4 text-white mr-4">Register</Link>
                    }
                    {
                        user ? <Link onClick={handleLogout} className="btn text-white bg-[#f98daa] mr-3">Logout</Link> : <Link to="/login" className="btn text-white bg-[#f98daa] mr-3">Login</Link>
                    }
                    {user?.photoURL && <img title={user?.displayName} className="w-10 rounded-full" src={user.photoURL} />}
                    {
                        user?.photoURL === null && <FaUserCircle title={user?.displayName} style={{ fontSize: "40px" }}></FaUserCircle>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;