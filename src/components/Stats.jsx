export default function Stats() {
    return(
        <div className="bg-linear-to-r from-[#9514FA] to-[#4F39F6] text-white py-10">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 text-center gap-6">

                <div>
                    <h2 className="text-3xl font-bold"> 
                        50K+
                    </h2>
                    <p className="text-sm mt-1">
                        Active Users
                    </p>
                </div>

                <div className="md:px-8 border-y md:border-y-0 md:border-x border-white/30">
                <h2 className="text-3xl font-bold">200+
                </h2>
                <p className="text-sm mt-1">Premium Tools</p>
                </div>

                <div>
                    <h2 className="text-3xl font-bold">4.9</h2>
                    <p className="text-sm mt-1">
                        Rating
                    </p>
                </div>

            </div>
        </div>
    )
}