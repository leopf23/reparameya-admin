"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { Dialog, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel, Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { menuRoutes } from "@/app/routers/menu";
import Button from "@/component/atoms/button";

export default function HeaderUi() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<{ nombre: string; correo: string } | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("usuario");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("usuario");
    setUser(null);
    setIsLoggedIn(false);
    router.push("/login");
  };

  return (
    <header className="z-10 relative">
      <nav aria-label="Global" className="z-40 flex justify-between items-center mx-auto lg:px-0 py-3 max-w-7xl">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <img
              alt="Logo"
              src="/isoLogo.svg"
              className="hover:shadow-[0_0_20px_#00B66A] rounded-full w-auto h-12 transition-shadow duration-300"
            />
          </Link>
        </div>

        <div className="lg:hidden flex">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex justify-center items-center -m-2.5 p-2.5 rounded-md text-gray-700"
          >
            <span className="sr-only">Abrir menú</span>
            <FaBars className="size-6" />
          </button>
        </div>

        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          {menuRoutes
            .filter((r) => r.section === "main" || r.section === "herramientas")
            .map((route) =>
              route.children ? (
                <Popover key={route.name} className="relative">
                  <PopoverButton className="flex items-center gap-x-1 font-semibold text-white hover:text-green-600 text-sm cursor-pointer">
                    {route.name}
                    <FaChevronDown className="size-5 text-gray-400" />
                  </PopoverButton>
                  <PopoverPanel className="top-full -left-8 z-10 absolute bg-[#171717] shadow-lg mt-3 rounded-3xl ring-1 ring-gray-900/5 w-screen max-w-md">
                    <div className="p-4">
                      {route.children?.map((item) => (
                        <div
                          key={item.name}
                          className="group relative flex items-center gap-x-6 hover:bg-[#212020] p-4 rounded-lg text-sm"
                        >
                          <div className="flex flex-none justify-center items-center bg-[#222222] group-hover:bg-[#171717] rounded-lg size-11">
                            {item.icon && <item.icon className="size-6 text-[#6C6C6C] group-hover:text-[#00B66A]" />}
                          </div>
                          <div className="flex-auto">
                            <a href={item.href} className="block font-semibold text-white">
                              {item.name}
                              <span className="absolute inset-0" />
                            </a>
                            <p className="mt-1 text-[#636363]">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </PopoverPanel>
                </Popover>
              ) : (
                <Link key={route.name} href={route.href ?? "#"} className="font-semibold text-white hover:text-green-500 text-sm">
                  {route.name}
                </Link>
              )
            )}
        </Popover.Group>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {isLoggedIn && user ? (
            <Popover className="relative">
              <PopoverButton className="flex items-center gap-x-2 font-semibold text-white text-sm cursor-pointer">
                {user.nombre}
                <FaChevronDown className="size-5 text-gray-400" />
              </PopoverButton>
              <PopoverPanel className="right-0 absolute bg-white shadow-lg mt-2 rounded-lg divide-y divide-gray-100 w-48 text-black">
                <div className="px-4 py-3 text-sm">
                  <div>{user.nombre}</div>
                  <div className="font-medium text-gray-500 truncate">{user.correo}</div>
                </div>
                <ul className="py-2 text-gray-700 text-sm">
                  <li>
                    <button onClick={handleLogout} className="block hover:bg-gray-100 px-4 py-2 text-red-500">
                      Cerrar sesión
                    </button>
                  </li>
                </ul>
              </PopoverPanel>
            </Popover>
          ) : (
            <Link href="/login" className="font-semibold text-white text-sm">
              Iniciar sesión
            </Link>
          )}
        </div>
      </nav>

      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="z-10 fixed inset-0" />
        <DialogPanel
          className={`right-0 z-10 fixed inset-y-0 bg-[#151514] px-6 py-6 w-full sm:max-w-sm overflow-y-auto transform ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <div className="flex justify-between items-center">
            <Link href="/" className="-m-1.5 p-1.5">
              <img alt="Logo" src="/isoLogo.svg" className="w-auto h-8" />
            </Link>
            <button type="button" onClick={() => setMobileMenuOpen(false)} className="-m-2.5 p-2.5 rounded-md text-white">
              <span className="sr-only">Cerrar menú</span>
              <FaTimes className="size-6" />
            </button>
          </div>
          <div className="flow-root mt-6">
            <div className="-my-6 divide-y divide-white/10">
              <div className="space-y-2 py-6">
                {menuRoutes.map((route) =>
                  route.children ? (
                    <Disclosure as="div" key={route.name} className="-mx-3">
                      {({ open }) => (
                        <>
                          <DisclosureButton className="group flex justify-between items-center hover:bg-gray-50 py-2 pr-3.5 pl-3 rounded-lg w-full font-semibold text-white text-base">
                            {route.name}
                            <FaChevronDown className={`size-5 transition-transform ${open ? "rotate-180" : ""}`} />
                          </DisclosureButton>
                          <DisclosurePanel className="space-y-1 mt-1 pl-6">
                            {route.children?.map((item) => (
                              <a key={item.name} href={item.href} className="block py-1 text-white hover:text-green-500 text-sm">
                                {item.name}
                              </a>
                            ))}
                          </DisclosurePanel>
                        </>
                      )}
                    </Disclosure>
                  ) : (
                    <Link
                      key={route.name}
                      href={route.href ?? "#"}
                      className="block hover:bg-gray-50 -mx-3 px-3 py-2 rounded-lg font-semibold text-white text-base"
                    >
                      {route.name}
                    </Link>
                  )
                )}
              </div>
              <div className="py-6 border-white/10 border-t">
                {isLoggedIn ? (
                  <div className="space-y-2">
                    <span className="block text-white">Hola, {user?.nombre}</span>
                    <Button label="Cerrar sesión" color="dark" onClick={handleLogout} />
                  </div>
                ) : (
                  <Link href="/login" className="block hover:bg-gray-50 -mx-3 px-3 py-2.5 rounded-lg font-semibold text-white text-base">
                    Iniciar sesión
                  </Link>
                )}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
