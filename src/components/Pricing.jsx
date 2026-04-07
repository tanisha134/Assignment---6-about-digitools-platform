import { IoMdCheckmark } from "react-icons/io";
export default function Pricing() {
    return(
        <div className="bg-white space-y-6">

            {/* Tittle */}
            <h2 className="text-5xl font-extrabold text-center mt-4">Simple, Transparent Pricing</h2>

            <p className="text-center text-[#627382] mt-2">
                Choose the plan that fits your needs. Upgrade or downgrade anytime.
            </p>

            {/* Cards */}
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-10 px-4 pb-16">

            {/* Starter */}
            <div className="bg-[#F9FAFB] p-6 rounded-xl border border-[#E5E7EB] hover:-translate-y-2 hover:shadow-lg transition duration-300">
                <h3 className="font-bold text-2xl">
                    Starter
                </h3>
                <p className="text-[#627382] text-sm">
                    Perfect for getting started
                </p>

                <h2 className="text-3xl font-bold mt-3">
                    $0<span className="text-[16px] font-normal text-[#627382]">/month</span>
                </h2>

                <ul className="mt-4 space-y-2 text-sm text-[#627382]">
                    <li className="flex items-center gap-2">
                        <IoMdCheckmark className="text-green-500" />

                        <span>Access to free tools</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <IoMdCheckmark className="text-green-500" />

                        <span>Basic templates</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <IoMdCheckmark className="text-green-500" />

                        <span>Community support</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <IoMdCheckmark className="text-green-500" />

                        <span>1 project per month</span>
                    </li>
                </ul>

                <button className="btn btn-primary mt-5 w-full py-2 rounded-full bg-linear-to-r from-[#9514FA] to-[#4F39F6] text-white hover:scale-105 hover:shadow-md active:scale-95 transition duration-200">
                    Get Started Free
                </button>
            </div>

            {/* Pro */}
            <div className="relative p-[2px] rounded-xl bg-linear-to-r from-[#9514FA] to-[#4F39F6] scale-105 shadow-xl hover:-translate-y-2 transition duration-300">

                <div className="rounded-xl p-6 text-center text-white bg-linear-to-r from-[#9514FA] to-[#4F39F6]">

                    {/* Tag */}
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FEF3C6] text-[#BB4D00] text-xs px-4 py-1 rounded-full shadow-md">
                        Most Popular
                    </span>

                    <h3 className="font-semibold text-lg">
                        Pro
                    </h3>
                    <p className="text-white text-sm">Best for professionals</p>

                    <h2 className="text-3xl font-bold mt-3 text-white">
                        $29<span className="text-white text-sm">/month</span>
                    </h2>

                    <ul className="mt-4 space-y-2 text-sm text-white">
                        <li className="flex items-center gap-2"><IoMdCheckmark className="text-white" /><span>Access to all premium tools</span>
                        </li>

                        <li className="flex items-center gap-2"><IoMdCheckmark className="text-white" /><span>Unlimited templates</span></li>

                        <li className="flex items-center gap-2"><IoMdCheckmark className="text-white" /><span>Priority support</span></li>
                        
                        <li className="flex items-center gap-2"><IoMdCheckmark className="text-white" /><span>Unlimited projects</span></li>
                        
                        <li className="flex items-center gap-2"><IoMdCheckmark className="text-white" /><span>Cloud sync</span>
                        </li>
                        
                        <li className="flex items-center gap-2"><IoMdCheckmark className="text-white" /><span>Advanced analytics</span>
                        </li>
                    </ul>

                    <button className="mt-5 w-full py-2 rounded-full bg-white font-semibold border border-purple-200 hover:scale-105 active:scale-95 transition hover:shadow-md cursor-pointer">
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-[#9514FA] to-[#4F39F6]">
                            Start Pro Trial
                        </span>
                    </button>

                </div>
            </div>

            {/* Enterprise */}
            <div className="bg-[#F9FAFB] p-6 rounded-xl border border-[#E5E7EB] hover:-translate-y-2 hover:shadow-lg transition duration-300">
                <h3 className="font-bold text-2xl">
                    Enterprise
                </h3>
                <p className="text-[#627382] text-sm">For teams and businesses</p>

                <h2 className="text-3xl font-bold mt-3">
                    $99<span className="text-[16px] font-normal text-[#627382]">/month</span>
                </h2>

                <ul lassName="mt-4 space-y-2 text-sm text-[#627382]">
                    <li className="flex items-center gap-2">
                        <IoMdCheckmark className="text-green-500" />

                        <span>Everything in Pro</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <IoMdCheckmark className="text-green-500" />

                        <span>Team collaboration</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <IoMdCheckmark className="text-green-500" />

                        <span>Custom integrations</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <IoMdCheckmark className="text-green-500" />

                        <span>Dedicated support</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <IoMdCheckmark className="text-green-500" />

                        <span>SLA guarantee</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <IoMdCheckmark className="text-green-500" />

                        <span>Custom branding</span>
                    </li>
                </ul>

                <button className="btn btn-primary mt-5 w-full py-2 rounded-full bg-linear-to-r from-[#9514FA] to-[#4F39F6] text-white hover:scale-105 hover:shadow-md active:scale-95 transition duration-200">
                    Contact Sales
                </button>
            </div>

        </div>

        {/* CTA */}

        <div className="bg-linear-to-r from-[#9514FA] to-[#4F39F6] py-16 text-center text-white">

            <h2 className="md:text-3xl font-extrabold text-[40px]">
                Ready to Transform Your Workflow?
            </h2>

            <p className="mt-6 text-[14px]">
                Join thousands of professionals who are already using Digitools to work smarter.<br /> Start your free trial today.
            </p>

            <div className="mt-6 flex justify-center gap-4 flex-wrap">

                <button className="px-5 py-2 rounded-full bg-white font-semibold  transition duration-200 hover:scale-[1.02] active:scale-[0.98]">
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-[#9514FA] to-[#4F39F6] font-semibold cursor-pointer">
                        Explore Products
                    </span>
                </button>

                <button className="btn btn-outline outline-white text-[16px] rounded-full  transition duration-200 hover:scale-[1.02] active:scale-[0.98] font-semibold">
                    View Pricing
                </button>

            </div>

            <p className="text-xs mt-6">
                14-day free trial • No credit card required • Cancel anytime
            </p>

        </div>
        </div>
    );
}