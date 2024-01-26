import { Outlet, Link } from "react-router-dom";
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { useState } from "react";

export default function Layout() {
    return (
        <>
            <Nav />
            <Outlet />
        </>
    )
}

const navigation = [
    { name: 'Home', href: '' },
    { name: 'About', href: '#' },
    { name: 'Menu', href: '#' },
    { name: 'Reservations', href: 'reservations' },
    { name: 'Order Online', href: '#' },
    { name: 'Login', href: '#' },
]

function Nav() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <header className="">
            <nav className="mx-auto my-8 flex justify-between items-center lg:px-[20%] px-8">
                <img className='h-10 lg:flex-shrink' src="/logo.png" alt='logo' />
                <ul className="list-none hidden lg:block lg:flex-shrink">
                    {navigation.map(({ name, href }, i) => (
                        <li key={i} className=" inline-block m-2">
                            <Link to={`/${href}`}>{name}</Link>
                        </li>
                    ))}
                </ul>
                <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 lg:hidden"
                    onClick={() => setMobileMenuOpen(true)}

                >
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map(({ name, href }, i) => (
                                    <Link
                                        key={i}
                                        to={`/${href}`}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >{name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}