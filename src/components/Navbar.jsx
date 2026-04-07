import { FaShoppingCart } from "react-icons/fa";
export default function Navbar({cartCount }){
    return(
        <div className="bg-white shadow-sm sticky top-0 z-50">
            <div className="navbar max-w-7xl mx-auto px-4">

            {/* Logo */}
            <div className="flex-1">
                <h1 className="text-[30px] font-bold text-transparent bg-clip-text  bg-linear-to-r from-[#9514FA] to-[#4F39F6]">DigiTools</h1>
            </div>

            {/* Menu */}
            <div className="hidden md:flex gap-6 text-black absolute left-1/2 -translate-x-1/2">
            <a>Products</a>
            <a>Features</a>
            <a>Pricing</a>
            <a>Testimonials</a>
            <a>FAQ</a>
            </div>
            {/* right */}
            <div className="flex items-center gap-3">
                <button className="hidden md:block text-gray-900">
                    Login
                </button>

                <div className="relative">
                    <FaShoppingCart className="text-2xl"/>

                    {cartCount > 0 && (
                        <span className=" absolute -top-2 -right-2 bg-[#FF3980] text-white text-xs px-2 rounded-full">

                            {cartCount}

                        </span>
                    )}
                </div>
                <button className="btn btn-primary rounded-full bg-linear-to-r from-[#9514FA] to-[#4F39F6] text-white transition duration-200 hover:scale-[1.02] active:scale-[0.98]">
                    Get Started
                </button>
            </div>
        </div>
        </div>
    )
}