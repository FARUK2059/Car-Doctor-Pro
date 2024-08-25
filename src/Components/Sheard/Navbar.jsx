"use client"

// import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

import { IoCartOutline, IoSearchSharp } from "react-icons/io5";



const Navbar = () => {

    // const session = useSession()

    return (
        <div className="">
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-stone-50 text-black  rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <div className="navbar-center ">
                                <div className=" items-center space-y-2 ">
                                    {navItems.map((item) => (
                                        <Link
                                            className="font-semibold hover:text-primary grid grid-cols-1 duration-200"
                                            href={item.path}
                                            key={item.path}
                                        >
                                            {item.title}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                        </ul>

                    </div>
                    <Link href={"/"}>
                        <Image alt="logo" src="https://raw.githubusercontent.com/FARUK2059/Car-Doctor-Pro/099ebbd00d5ec34024a30dd7731393122f9b25f5/public/logo.svg" height={60} width={100} />
                    </Link>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <div className="navbar-center hidden lg:flex">
                            <div className="flex items-center space-x-6">
                                {navItems.map((item) => (
                                    <Link
                                        className="font-semibold hover:text-primary duration-300"
                                        href={item.path}
                                        key={item.path}
                                    >
                                        {item.title}
                                    </Link>
                                ))}
                            </div>
                        </div>

                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex space-x-3 items-center">
                        <IoCartOutline className="text-xl" />
                        <IoSearchSharp className="text-xl" />
                        <a className="btn btn-outline btn-primary px-8">Appointment</a>
                        {/* <div>
                            <Image alt={session?.data?.user?.name} src={session?.data?.user?.image} height={50} width={50} className="rounded-full" />
                        </div> */}
                        
                        {/* {session?.status === 'loading' &&
                            <h6>Loading....</h6>
                        }
                        {session?.status === 'unauthenticated' &&
                            <Link href="/login" className="btn btn-primary px-8">Login</Link>
                        }
                        {session?.status === 'authenticated' &&
                            <button className="btn btn-outline btn-ghost px-8" onClick={() => signOut()}>Logout</button>
                        } */}
                    </div>
                </div>
            </div>
        </div>
    );
};

const navItems = [
    {
        title: "Home",
        path: "/",
    },
    {
        title: "About",
        path: "/about",
    },
    {
        title: "Services",
        path: "/services",
    },
    {
        title: "MyBookings",
        path: "/my-bookings",
    },
    {
        title: "Blog",
        path: "/blog",
    },
    {
        title: "Contacts",
        path: "/contacts",
    },
];

export default Navbar;