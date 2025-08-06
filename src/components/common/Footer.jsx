import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn, FaTelegramPlane, FaTiktok, FaRedditAlien } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white px-8 py-12 lg:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
        <div>
          <h2 className="text-5xl font-bold mb-4">Stockertim</h2>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-3xl">TOP INDICES</h3>
          <ul className="space-y-2 text-2xl text-nowrap">
            <li>Dow Jones</li>
            <li>S&P 500</li>
            <li>DAX Index</li>
            <li>Nvidia</li>
            <li>Tesla</li>
            <li>UBER</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-3xl">EXPLORE MORE</h3>
          <ul className="space-y-2 text-2xl text-nowrap">
            <li>Markets</li>
            <li>News</li>
            <li>Videos</li>
            <li>Stock picks</li>
            <li>Academy</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-3xl">HELPFUL LINK</h3>
          <ul className="space-y-2 text-2xl text-nowrap">
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Affiliate Program</li>
            <li>Careers</li>
            <li>Sitemap</li>
            <li>Premium Plans</li>
          </ul>
        </div>

        <div className="space-y-10">
          <div className="flex items-center gap-4 text-4xl">
            <FaXTwitter />
            <FaFacebookF />
            <FaYoutube />
            <FaInstagram />
            <FaLinkedinIn />
            <FaTelegramPlane />
            <FaTiktok />
            <FaRedditAlien />
          </div>
          <div className="text-xl normal-case leading-relaxed text-gray-300">
            <strong className="text-2xl">DISCLAIMER</strong>
            <br />
            Stockertim Premium provides educational investing guidance, not financial advice or regulated financial advice. Always do your own
            research. Investing carries risk and your capital is not guaranteed.
          </div>
        </div>
      </div>

      <div className="border-t border-gray-600 pt-6 mt-20 text-2xl text-nowrap flex flex-col md:flex-row justify-between items-center">
        <p className="normal-case"> copyright © 2025 Stockertim, All rights reserved</p>
        <p className="mt-2 md:mt-0 normal-case">Privacy policy & Terms and condition</p>
      </div>
    </footer>
  );
}
