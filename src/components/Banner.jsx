import bannerImg from "../assets/banner.png"
import { FaArrowRightLong } from "react-icons/fa6";
export default function Banner() {
    return (
        <div className="bg-gray-50 py-16 px-16">
            <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

                {/* Left */}
                <div>
                    <span className="bg-blue-100 px-3 py-1 rounded-full text-sm">
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-[#9514FA] to-[#4F39F6]">
                            • New: AI-Powered Tools Available
                        </span>
                    </span>

                    <h1 className="text-4xl md:text-5xl font-bold text-[#101727] mt-4 leading-tight ">
                        Supercharge Your <br /> <span className="text-transparent bg-clip-text bg-linear-to-r from-[#9514FA] to-[#4F39F6]">Digital Workflow
                        </span>
                    </h1>

                    <p className="mt-4 text-[#627382]">
                        Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today. <br /> Explore Products
                    </p>

                    <div className="mt-6 flex gap-4">
                        {/* Explore Products */}
                        <button className="btn btn-primary px-6 py-3 rounded-full text-white font-semibold bg-linear-to-r from-[#9514FA] to-[#4F39F6] hover:opacity-90 transition duration-200 hover:scale-[1.02] active:scale-[0.98] ">

                            Explore Products <FaArrowRightLong />

                        </button>

                        {/* Watch demo */}
                        <button className="btn btn-primary btn-outline text-transparent bg-clip-text bg-linear-to-r from-[#9514FA] to-[#4F39F6] rounded-full transition duration-200 hover:scale[1.02] active:scale[0.98]">
                            ▷ Watch Demo
                        </button>
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex justify-center">
                    <img src={bannerImg} alt="banner" className="rounded-xl shadow-md w-72 md:w-96" />
                </div>

            </div>
        </div>
    );
}