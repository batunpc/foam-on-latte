import logo from '../assets/logo.png';
import { useState, Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';

import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/#/', current: true },
  { name: 'Team', href: '/#/team', current: false },
  { name: 'Services', href: '#/services', current: false },
  { name: 'Projects', href: '#/projects', current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

function useDisclosure() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return {
    isOpen,
    toggle,
  };
}

export default function Navbar() {
  const { isOpen, toggle } = useDisclosure();
  const [currentNavItem, setCurrentNavItem] = useState('Home');

  type LogoAndTextProps = {
    showLogo: boolean;
  };

  const LogoAndText = ({ showLogo }: LogoAndTextProps) => (
    <>
      {/* dynamic logo */}
      {showLogo && (
        <>
          <img
            className="block lg:hidden h-12 w-auto"
            src={logo}
            alt="foamonlatte logo"
          />
          <img
            className="hidden lg:block h-12 w-auto"
            src={logo}
            alt="foamonlatte logo"
          />
        </>
      )}
      <span className="block lg:hidden h-8 w-auto text-2xl text-bordo pl-2 drop-shadow-xl text-primary font-fredoka">
        Foam on Latte
      </span>
      <span className="hidden lg:block h-8 w-auto text-2xl text-bordo pl-2 drop-shadow-xl text-primary font-fredoka">
        Foam on Latte
      </span>
    </>
  );

  return (
    <Disclosure as="nav" onChange={toggle} className="bg-gray-800">
      <div className="mx-auto max-w-full px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* mobile view - burger menu */}
            <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-primary hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary">
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </Disclosure.Button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <LogoAndText showLogo={true} />
            </div>

            <div className="hidden sm:ml-12 sm:block">
              <div className="flex space-x-4 font-fredoka">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      currentNavItem === item.name
                        ? 'bg-gray-900 text-primary'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-primary',
                      'rounded-md px-3 py-3 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                    onClick={() => setCurrentNavItem(item.name)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Disclosure.Panel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <Disclosure.Button
              key={item.name}
              as="a"
              href={item.href}
              className={classNames(
                currentNavItem === item.name
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium'
              )}
              aria-current={item.current ? 'page' : undefined}
              onClick={() => setCurrentNavItem(item.name)}
            >
              {item.name}
            </Disclosure.Button>
          ))}
        </div>
      </Disclosure.Panel>
    </Disclosure>
  );
}
