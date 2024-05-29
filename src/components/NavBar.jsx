import React, { useEffect,useState } from 'react';
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, UserCircleIcon } from '@heroicons/react/24/outline'


import { NavLink } from 'react-router-dom';

function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isSubMenuVisible, setSubMenuVisibility] = useState(false);

  const handleSubMenuToggle = () => {
    setSubMenuVisibility(!isSubMenuVisible);
  };

  const navigation  = [
    { id: 1, name: "ABOUT", href: "/about" },
    { id: 2, name: "PROJECTS", href: "/projects" },
    { id: 3, name: "EXPERIENCE", href: "/" },
    { id: 4, name: "RESOURCES", href: "/resources" },
    { id: 5, name: "BLOG", href: "/projects" },
  ];

  return (
    <header className="sticky top-0  z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8 border-b-2" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 px-3 mr-2 text-gray-900 text-base font-semibold">
              <span  className="">HOME</span>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className=" text-md font-semibold leading-6 text-gray-900 text-center">
                {item.name}
              </a>
            ))}

          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
    </div>


        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 px-3 mr-2 text-gray-900 text-base font-semibold">
                  <span className="">HOME</span>
              </a>
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
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
  );
};

export default NavBar;