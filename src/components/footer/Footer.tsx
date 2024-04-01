import Image from "next/image"
import Logo from "../../../public/logo.png"

const Footer = () => {
    return (
        <footer className=" rounded-lg shadow">
            <div className="w-full max-w-screen-xl mx-auto py-2 px-4 md:py-6">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <Image src={Logo} className="h-8" alt="Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">TranscriboApp</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium  sm:mb-0 text-gray-400">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-2  sm:mx-auto border-gray-700 lg:my-4" />
                <span className="block text-sm  sm:text-center text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
            </div>
        </footer>


    )
}

export default Footer