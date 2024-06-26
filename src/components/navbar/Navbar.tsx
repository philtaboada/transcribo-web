'use client'
import Link from "next/link"
import Logo from "../../../public/logo.png"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { Button, buttonVariants } from "../ui/button"
import { ModeToggle } from "../ButtonDarkMode"
import { cn } from "@/lib/utils"

const Navbar = () => {
    const pathname = usePathname()

    return (
        <nav className=" dark:bg-gray-900  fixed w-full z-20 top-0 start-0 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href={'/main'} className="flex items-center space-x-1 rtl:space-x-reverse">
                    <Image src={Logo} alt="Logo" className="w-8 h-8 rounded-full" />
                    <span className="self-center text-2xl font-bold whitespace-nowrap dark:white">TranscriboApp</span>
                </Link>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

                    <div className="mr-4">
                        <ModeToggle />
                    </div>

                    <div className="">
                        <Link href="/register" className={
                            cn(buttonVariants({ variant: "secondary" }), "rounded-xl ")
                        }>Get Stared</Link>
                    </div>

                    <div className="">
                        <Button variant="outline" asChild>
                            <Link className="rounded-xl" href="/login">Login</Link>
                        </Button>
                    </div>

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
                            <Button asChild variant='link'>
                                <Link className={
                                    cn("transition-colors hover:text-foreground/80",
                                        pathname === "/home" ? "underline-offset-4 underline" : "")
                                } href={'/home'}>Home</Link>
                            </Button>
                        </li>
                        <li>
                            <Button asChild variant='link'>
                                <Link href={'/features'}>Features</Link>
                            </Button>
                        </li>
                        <li>
                            <Button asChild variant='link'>
                                <Link
                                    className={
                                        cn("transition-colors hover:text-foreground/80",
                                            pathname === "/resources" ? "underline-offset-4 underline" : "")
                                    } href={'/resources'}>Resources</Link>
                            </Button>
                        </li>
                        <li>
                            <Button asChild variant='link'>
                                <Link className={
                                    cn("transition-colors hover:text-foreground/80",
                                        pathname === "/pricing" ? "underline-offset-4 underline" : "")
                                } href={'/pricing'}>Pricing</Link>
                            </Button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar