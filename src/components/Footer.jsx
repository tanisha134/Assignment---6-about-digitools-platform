import { FaSquareFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
export default function Footer() {
    return(
        <footer className="bg-[#0B1220] text-gray-300 pt-14 pb-6">

            {/* top */}
            <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-6 gap-6">
                {/* Logo */}
                <div className="md:col-span-2">
                    <h2 className="text-white text-3xl font-semibold">
                        DigiTools
                    </h2>
                    <p className="mt-5 text-[16px] text-white max-w-sm">Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
                    </p>
                </div>
                {/* Products */}
                <div>
                    <h3 className="text-white font-normal mb-2">
                        Product
                    </h3>
                    <ul className="space-y-1 text-sm">
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Templates</li>
                        <li>Integrations</li>
                    </ul>
                </div>
                {/* Company */}
                <div>
                    <h3 className="text-white font-normal mb-2">
                        Company
                    </h3>
                    <ul className="space-y-1 text-sm">
                        <li>About</li>
                        <li>Blog</li>
                        <li>Careers</li>
                        <li>Press</li>
                    </ul>
                </div>
                {/* Resources */}
                <div>
                    <h3 className="text-white font-normal mb-2">
                        Resources
                    </h3>
                    <ul className="space-y-1 text-sm">
                        <li>Documentation</li>
                        <li>Help Center</li>
                        <li>Community</li>
                        <li>Contact</li>
                    </ul>
                </div>
                {/* Social Links */}
                <div>
                    <h3 className="text-white font-normal mb-2">
                        Social Links
                    </h3>
                    <div className="flex gap-3 mt-3">
                        <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-200 text-black">
                            <AiFillInstagram size={18} />
                        </div>
                        <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-200 text-black">
                            <FaSquareFacebook size={18} />
                        </div>
                        <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-200 text-black">
                            <FaXTwitter size={18} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="max-w-6xl mx-auto px-4">
                <hr  className="border-[#E5E7EB]/40 mt-10 mb-6"/>
            </div>

            {/* Bottom */}
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-xs text-[#FAFAFA]">

                <p>
                    &copy; 2026 Digitools. All rights reserved.
                </p>

                <div className="flex gap-6 mt-3 md:mt-0 text-[#FAFAFA]">
                    <span>Privacy Policy</span>
                    <span>Terms of Service</span>
                    <span>Cookies</span>
                </div>

            </div>
        </footer>
    );
};