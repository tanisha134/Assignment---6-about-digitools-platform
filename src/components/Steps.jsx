import step1 from "../assets/user.png";
import step2 from "../assets/package.png";
import step3 from "../assets/rocket.png";


export default function Steps() {
    return(
        <div className="py-16 pl-8 bg-[#F9FAFC]">

            <h2 className="text-5xl font-bold text-center">
                Get Started in 3 Steps
            </h2>

            <p className="text-center text-[#627382] mt-2">
                Start using premium digital tools in minutes, not hours.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto px-4">

                {/* card 1 */}
                <div className="bg-[#FFFFFF] p-8 rounded-xl text-center relative h-[250px] w-full shadow-md hover:shadow-xl transition">
                    <div className="absolute top-3 right-3 bg-linear-to-r from-[#9514FA] to-[#4F39F6] text-white text-xs px-1 py-1 rounded-full">
                        01
                    </div>
                    <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-linear-to-r from-[#9514FA]/20 to-[#4F39F6]/20 backdrop-blur-sm">

                    <img src={step1} alt="" className="w-8 h-8 object-contain"/>
                    </div>

                <h3 className="font-bold text-2xl mt-3">
                    Create Account
                </h3>
                <p className="text-sm text-[#627382] mt-2">
                    Sign up for free in seconds. No credit card required to get started.
                </p>
                </div>

            {/* Card2 */}
            <div className="bg-[#FFFFFF] p-8 rounded-xl text-center relative h-[250px] w-full shadow-md hover:shadow-xl transition">
                <div className="absolute top-3 right-3 bg-linear-to-r from-[#9514FA] to-[#4F39F6] text-white text-xs px-1 py-1 rounded-full">
                    02
                </div>
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-linear-to-r from-[#9514FA]/20 to-[#4F39F6]/20 backdrop-blur-sm">

                    <img src={step2} alt="" className="w-10 mx-auto"/>
                </div>

                <h3 className="font-bold text-2xl mt-3">Choose Products</h3>

                <p className="text-sm text-[#627382] mt-2"> Browse our catalog and select the tools <br /> that fit your needs.
                </p>
            </div>

            {/* Card3 */}
            <div className="bg-[#FFFFFF] p-8 rounded-xl text-center relative h-[250px] w-full shadow-md hover:shadow-xl transition">
                <div className="absolute top-3 right-3 bg-linear-to-r from-[#9514FA] to-[#4F39F6] text-white text-xs px-1 py-1 rounded-full">
                    03
                </div>
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-linear-to-r from-[#9514FA]/20 to-[#4F39F6]/20 backdrop-blur-sm">

                    <img src={step3} alt="" className="w-10 mx-auto"/>
                </div>

                <h3 className="font-bold text-2xl mt-3">Start Creating</h3>

                <p className="text-sm text-[#627382] mt-2"> Download and start using your premium <br />tools immediately.
                </p>
            </div>


        </div>
        </div>
    )
}