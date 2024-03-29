import Link from "next/link"
import Logo from "../../../public/logo.png"
import Image from "next/image"

const Navbar = () => {
    return (
        <nav className=" dark:bg-gray-900  fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href={'/'} className="flex items-center space-x-1 rtl:space-x-reverse">
                    <Image src={Logo} alt="Logo" width={35} height={35} className="w-8 h-8 rounded-full" />
                    <span className="self-center text-2xl font-bold whitespace-nowrap dark:white">TranscriboApp</span>
                </Link>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button type="button" className="text-white bg-transparent border border-[#E0E0E0] mr-2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl sm px-4 py-2 center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
                    <button type="button" className="text-white bg-transparent border border-[#E0E0E0] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl sm px-4 py-2 center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center sm gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-light border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="#" className="block py-2 px-3 " aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 rounded ">About</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 rounded ">Services</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 rounded ">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar