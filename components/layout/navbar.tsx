import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="h-80 bg-transparent z-10 flex sticky text-white filter drop-shadow-lg">
      <div className="w-full px-15 flex justify-between xl:justify-left">
        <Link href="/"><a className="flex items-center"><Image src="/assets/images/logo.png" height={60} width={60} alt="Perspective logo" /></a></Link>
        <button className="xl:hidden px-10" onClick={() => setNavbarOpen(!navbarOpen)}><Image src="/assets/images/icons/menu.svg" width={27} height={25} alt="Menu" /></button>
        <div className={
          "fixed xl:relative duration-300 transition-all xl:transition-none h-screen xl:h-auto xl:flex flex-col xl:flex-row xl:flex-grow w-full md:w-365 bg-secondary xl:bg-opacity-0 top-0 ml-0 xl:ml-50 px-20 xl:px-0 justify-start xl:justify-between items-start xl:items-center drop-shadow-lg" +
          (navbarOpen ? " left-0 ease-out-in" : " -left-800 xl:left-0 ease-in-out")
        }>
          <div className="flex w-full xl:hidden justify-between py-30">
            <Link href="/"><a className="flex xl:hidden items-center"><Image src="/assets/images/logo.svg" height={44} width={152} alt="Perspective logo" /></a></Link>
            <button className="px-10" onClick={() => setNavbarOpen(false)}><Image src="/assets/images/icons/close.svg" width={19} height={18} alt="Close" /></button>
          </div>
          <ul className="flex flex-col xl:flex-row font-medium text-16 xl:text-14 pl-30 xl:pl-0">
            <li className="py-15 nav-link"><Link href="/#"><a className="relative xl:px-25 xl:py-10">About</a></Link></li>
            <li className="py-15 nav-link"><Link href="/#"><a className="relative xl:px-25 xl:py-10">Help Center</a></Link></li>
            <li className="py-15 nav-link"><Link href="/#"><a className="relative xl:px-25 xl:py-10">Term of Service</a></Link></li>
            <li className="py-15 nav-link"><Link href="/#"><a className="relative xl:px-25 xl:py-10">Privacy Policy</a></Link></li>
            <li className="py-15 nav-link"><Link href="/#"><a className="relative xl:px-25 xl:py-10">Cookie Policy</a></Link></li>
            <li className="py-15 nav-link"><Link href="/#"><a className="relative xl:px-25 xl:py-10">Advertising</a></Link></li>
            <li className="py-15 nav-link"><Link href="/#"><a className="relative xl:px-25 xl:py-10">Developers</a></Link></li>
            <li className="py-15 nav-link"><Link href="/#"><a className="relative xl:px-25 xl:py-10">Directory</a></Link></li>
            <li className="py-15 nav-link"><Link href="/#"><a className="relative xl:px-25 xl:py-10">Settings</a></Link></li>
          </ul>
          {/* <Link href="/kits"><button className="hidden xl:block px-5 btn-primary btn-mini">Get Started</button></Link> */}
        </div>
      </div>
    </nav>
  );
}
