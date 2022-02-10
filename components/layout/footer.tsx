import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (<footer className="bg-secondary z-10 text-center lg:text-left text-light pt-80 pb-15">
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-3 gap-4">
        <div className="mb-40 lg:mb-0">
          <Link href="/"><a><Image src="/assets/images/logo-green.svg" height={37} width={130} alt="UH logo" /></a></Link>
          <div className="flex flex-col font-medium mt-30 lg:mt-65">
            <p className="text-white">Need help?</p>
            <a href="mailto:support@unitedhardscapes.com" className="text-warning">support@unitedhardscapes.com</a>
            <a href="tel:18007429803" className="text-warning">Call 800 742 9803</a>
          </div>
        </div>
        <div className="lg:col-span-2 text-white">
          <div className="grid lg:grid-cols-4 mt-5">
            <div>
              <p className="text-18 font-medium text-white mb-20 mt-30 lg:mt-0">Services</p>
              <ul className="flex flex-col">
                <li className="py-10"><Link href="/kits"><a>Hardscape Kits</a></Link></li>
                <li className="py-10"><Link href="/kits/custom-design-request"><a>Custom Designed Kits</a></Link></li>
                <li className="py-10"><Link href="/contact-us"><a>Contact Us</a></Link></li>
              </ul>
            </div>
            <div>
              <p className="text-18 font-medium text-white mb-20 mt-30 lg:mt-0">Company</p>
              <ul className="flex flex-col">
                <li className="py-10"><Link href="/our-story"><a>Our Story</a></Link></li>
                <li className="py-10"><Link href="/why-uh"><a>Why UH Kits</a></Link></li>
                <li className="py-10"><Link href="/how-it-works"><a>How It Works</a></Link></li>
                <li className="py-10"><Link href="/partners"><a>Partners</a></Link></li>
              </ul>
            </div>
            <div>
              <p className="text-18 font-medium text-white mb-20 mt-30 lg:mt-0">Resources</p>
              <ul className="flex flex-col">
                <li className="py-10"><Link href="/blog"><a>Blog</a></Link></li>
                <li className="py-10"><Link href="/faqs"><a>FAQs</a></Link></li>
              </ul>
            </div>
            <div>
              <p className="text-18 font-medium text-white mb-20 mt-30 lg:mt-0">Follow us</p>
              <div className="d-flex justify-center lg:justify-start">
                <a className="mr-35" href="https://www.facebook.com/UnitedHardscapes" target="_blank"><Image src="/assets/images/social-logos/facebook.svg" width={18} height={18} alt="Facebook" /></a>
                <a className="mr-35" href="https://www.instagram.com/unitedhardscapes" target="_blank"><Image src="/assets/images/social-logos/instagram.svg" width={18} height={18} alt="Instagram" /></a>
                <a href="https://www.pinterest.com/UnitedHardscapes" target="_blank"><Image src="/assets/images/social-logos/pinterest.svg" width={18} height={18} alt="Pinterest" /></a>
              </div>
              <p className="font-medium mb-15 mt-25">We accept</p>
              <div className="d-flex justify-center lg:justify-start">
                <span className="mr-10"><Image src="/assets/images/payment-method/visa.svg" width={30} height={30} alt="Visa" /></span>
                <span className="mr-10"><Image src="/assets/images/payment-method/mc.svg" width={30} height={30} alt="Mc" /></span>
                <span><Image src="/assets/images/payment-method/amex.svg" width={30} height={30} alt="Amex" /></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:flex justify-between mt-20 leading-10">
        <p>© 2021 United Hardscapes. All rights reserved.</p>
        <div className="cursor-pointer">
          <u className="mr-5">Privacy Policy</u>,&nbsp;
          <u className="mr-5">Terms & Conditions</u>,&nbsp;
          <u>Refund Policy</u>.
        </div>
      </div>
    </div>
  </footer>);
}
