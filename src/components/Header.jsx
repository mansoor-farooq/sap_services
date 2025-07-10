import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../images/mansoor.png';
import {
    Dialog,
    // DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react';
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid';

const products = [
    { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Security', description: 'Your customers\' data will be safe and secure', href: '#', icon: FingerPrintIcon },
    { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
];

const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
];

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [hoveredItem, setHoveredItem] = useState(null);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 w-full shadow-sm bg-white/80 backdrop-blur-md">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <nav className="flex items-center justify-between py-4">
                    {/* Logo with animation */}
                    <motion.div
                        className="flex lg:flex-1"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <motion.img
                                alt="Company Logo"
                                src={logo}
                                className="w-[100px] h-[60px]" // ← custom sizes
                                whileHover={{ rotate: 10 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            />
                        </a>
                    </motion.div>

                    {/* Mobile menu button */}
                    <div className="flex lg:hidden">
                        <motion.button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="size-6" />
                        </motion.button>
                    </div>

                    {/* Desktop navigation */}
                    <PopoverGroup className="hidden lg:flex lg:gap-x-8">
                        <Popover className="relative">
                            {({ open }) => (
                                <>
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <PopoverButton
                                            className="flex items-center text-sm font-semibold text-gray-900 outline-none gap-x-1"
                                            onMouseEnter={() => setHoveredItem('product')}
                                            onMouseLeave={() => setHoveredItem(null)}
                                        >
                                            Product
                                            <motion.div
                                                animate={{ rotate: open ? 180 : 0 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <ChevronDownIcon aria-hidden="true" className="flex-none text-gray-400 size-5" />
                                            </motion.div>
                                            {hoveredItem === 'product' && (
                                                <motion.span
                                                    className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600"
                                                    layoutId="underline"
                                                    initial={{ width: 0 }}
                                                    animate={{ width: '100%' }}
                                                    transition={{ duration: 0.3 }}
                                                />
                                            )}
                                        </PopoverButton>
                                    </motion.div>

                                    <AnimatePresence>
                                        {open && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <PopoverPanel
                                                    className="absolute z-10 w-screen max-w-md mt-3 -translate-x-1/2 left-1/2"
                                                    static
                                                >
                                                    <motion.div
                                                        className="overflow-hidden bg-white shadow-lg rounded-3xl ring-1 ring-gray-900/5"
                                                        initial={{ scale: 0.9 }}
                                                        animate={{ scale: 1 }}
                                                    >
                                                        <div className="p-4">
                                                            {products.map((item) => (
                                                                <motion.div
                                                                    key={item.name}
                                                                    className="relative flex items-center p-4 text-sm rounded-lg group gap-x-6 hover:bg-gray-50"
                                                                    whileHover={{ x: 5 }}
                                                                    transition={{ type: 'spring', stiffness: 300 }}
                                                                >
                                                                    <div className="flex items-center justify-center flex-none rounded-lg size-11 bg-gray-50 group-hover:bg-white">
                                                                        <item.icon aria-hidden="true" className="text-gray-600 size-6 group-hover:text-indigo-600" />
                                                                    </div>
                                                                    <div className="flex-auto">
                                                                        <a href={item.href} className="block font-semibold text-gray-900">
                                                                            {item.name}
                                                                            <span className="absolute inset-0" />
                                                                        </a>
                                                                        <p className="mt-1 text-gray-600">{item.description}</p>
                                                                    </div>
                                                                </motion.div>
                                                            ))}
                                                        </div>
                                                        <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                                                            {callsToAction.map((item) => (
                                                                <motion.a
                                                                    key={item.name}
                                                                    href={item.href}
                                                                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold text-gray-900 hover:bg-gray-100"
                                                                    whileHover={{ scale: 1.03 }}
                                                                    whileTap={{ scale: 0.97 }}
                                                                >
                                                                    <item.icon aria-hidden="true" className="flex-none text-gray-400 size-5" />
                                                                    {item.name}
                                                                </motion.a>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                </PopoverPanel>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </>
                            )}
                        </Popover>

                        {['Features', 'Marketplace', 'Company'].map((item) => (
                            <motion.div
                                key={item}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <a
                                    href="#"
                                    className="relative text-sm font-semibold text-gray-900"
                                    onMouseEnter={() => setHoveredItem(item.toLowerCase())}
                                    onMouseLeave={() => setHoveredItem(null)}
                                >
                                    {item}
                                    {hoveredItem === item.toLowerCase() && (
                                        <motion.span
                                            className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600"
                                            layoutId="underline"
                                            initial={{ width: 0 }}
                                            animate={{ width: '100%' }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    )}
                                </a>
                            </motion.div>
                        ))}
                    </PopoverGroup>

                    {/* Login button */}
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <motion.a
                            href="#"
                            className="relative text-sm font-semibold text-gray-900 group"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="relative z-10 flex items-center gap-1">
                                Log in
                                <motion.span
                                    aria-hidden="true"
                                    animate={{ x: [0, 3, 0] }}
                                    transition={{ repeat: Infinity, duration: 1.5 }}
                                >
                                    →
                                </motion.span>
                            </span>
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                        </motion.a>
                    </div>
                </nav>
            </div>

            {/* Mobile menu with animations */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <Dialog
                        open={mobileMenuOpen}
                        onClose={setMobileMenuOpen}
                        className="lg:hidden"
                        as={motion.div}
                    >
                        <motion.div
                            className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />

                        <motion.div
                            className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 30 }}
                        >
                            <div className="flex items-center justify-between p-6">
                                <motion.a
                                    href="#"
                                    className="-m-1.5 p-1.5"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <span className="sr-only">Your Company</span>
                                    <img
                                        alt="Company Logo"
                                        src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                                        className="w-auto h-8"
                                    />
                                </motion.a>
                                <motion.button
                                    type="button"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                    whileHover={{ rotate: 90, scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <span className="sr-only">Close menu</span>
                                    <XMarkIcon aria-hidden="true" className="size-6" />
                                </motion.button>
                            </div>
                            <motion.div
                                className="px-6 pt-2 pb-6"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                <div className="-my-6 divide-y divide-gray-500/10">
                                    <div className="py-6 space-y-2">
                                        <Disclosure as="div" className="-mx-3">
                                            {({ open }) => (
                                                <>
                                                    <motion.div whileHover={{ x: 5 }}>
                                                        <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold text-gray-900 hover:bg-gray-50">
                                                            <span>Product</span>
                                                            <motion.div
                                                                animate={{ rotate: open ? 180 : 0 }}
                                                            >
                                                                <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-[open]:rotate-180" />
                                                            </motion.div>
                                                        </DisclosureButton>
                                                    </motion.div>
                                                    <DisclosurePanel className="mt-2 space-y-2">
                                                        {[...products, ...callsToAction].map((item, index) => (
                                                            <motion.div
                                                                key={item.name}
                                                                initial={{ opacity: 0, x: -10 }}
                                                                animate={{ opacity: 1, x: 0 }}
                                                                transition={{ delay: 0.1 * index }}
                                                            >
                                                                <DisclosureButton
                                                                    as="a"
                                                                    href={item.href}
                                                                    className="block py-2 pl-6 pr-3 text-sm font-semibold text-gray-900 rounded-lg hover:bg-gray-50"
                                                                >
                                                                    {item.name}
                                                                </DisclosureButton>
                                                            </motion.div>
                                                        ))}
                                                    </DisclosurePanel>
                                                </>
                                            )}
                                        </Disclosure>
                                        {['Features', 'Marketplace', 'Company'].map((item) => (
                                            <motion.a
                                                key={item}
                                                href="#"
                                                className="block px-3 py-2 -mx-3 text-base font-semibold text-gray-900 rounded-lg hover:bg-gray-50"
                                                whileHover={{ x: 5 }}
                                            >
                                                {item}
                                            </motion.a>
                                        ))}
                                    </div>
                                    <div className="py-6">
                                        <motion.a
                                            href="#"
                                            className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 hover:bg-gray-50"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            Log in
                                        </motion.a>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </Dialog>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;