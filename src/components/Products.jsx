import { FaShoppingCart } from "react-icons/fa";
import { toast } from "react-toastify";
import img1 from "../assets/products/writing_2327400 1.png";
import img2 from "../assets/products/design-tool.png";
import img3 from "../assets/products/camera_8775444 1.png";
import img4 from "../assets/products/operation.png";
import img5 from "../assets/products/portfolio.png";
import img6 from "../assets/products/social-media.png";
import img7 from "../assets/products/writing_2327400 1.png";
import img8 from "../assets/products/operation.png";
import img9 from "../assets/products/design-tool.png";

const products = [
    {
    id: 1,
    image: img1,
    name: "AI Writing Pro",
    description: "Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.",
    price: "$29",
    period: "/mo",
    tag: "Best Seller",
    features: ["Unlimited AI generations", "50+ writing templates", "Grammar checker"],
},
{
    id: 2,
    image: img2,
    name: "Design Templates Pack",
    description: "2000+ premium templates for social media, presentations, and marketing materials.",
    price: "$49",
    period: "/one-time",
    tag: "Popular",
    features: ["2000+ templates", "Monthly updates", "Commercial license"],
},
{
    id: 3,
    image: img3,
    name: "Premium Stock Assets",
    description: "AAccess millions of royalty-free photos, videos, and graphics for your projects.",
    price: "$19",
    period: "/mo",
    tag: "New",
    features: ["10M+ assets", "Commercial use", "No attribution"],
},
{
    id: 4,
    image: img4,
    name: "Automation Toolkit",
    description: "Automate repetitive tasks and streamline your workflow with powerful tools.",
    price: "$79",
    period: "/mo",
    tag: "Popular",
    features: ["50+ automations", "API access", "Custom workflows"],
},
{
    id: 5,
    image: img5,
    name: "Resume Builder Pro",
    description: "Create professional resumes and cover letters that land interviews.",
    price: "$15",
    period: "/one-time",
    tag: "New",
    features: ["100+ templates", "ATS optimization", "Export to PDF"],
},
{
    id: 6,
    image: img6,
    name: "Social Media Content Kit",
    description: "Complete toolkit for creating engaging social media content across all platforms.",
    price: "$39",
    period: "/mo",
    tag: "Best Seller",
    features: ["5000+ assets", "Scheduler included", "Analytics dashboard"],
},
{
  id: 7,
  image: img7,
  name: "Video Editing Suite",
  description: "Edit professional videos with powerful tools, effects, and transitions in minutes.",
  price: "$59",
  period: "/mo",
  tag: "Popular",
  features: ["4K video support", "100+ effects", "Fast rendering"],
},
{
  id: 8,
  image: img8,
  name: "SEO Optimization Tool",
  description: "Boost your website ranking with advanced SEO insights and keyword tracking.",
  price: "$25",
  period: "/mo",
  tag: "Best Seller",
  features: ["Keyword analysis", "Site audit", "Competitor tracking"],
},
{
  id: 9,
  image: img9,
  name: "Email Marketing Pro",
  description: "Create, automate, and track email campaigns that convert leads into customers.",
  price: "$35",
  period: "/mo",
  tag: "New",
  features: ["Email templates", "Automation flows", "Analytics reports"],
}
];

import React, { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
export default function Products ({ cart, setCart }) {

    const handleAddToCart = (product) => {
        setCart([...cart, product]);
        setActiveItem(product.id);
        console.log("Added:", product.name);
        toast.success("Successfully added to cart!");
};

const [selectedType, setSelectedType] = useState("products");
const [activeItem, setActiveItem] = useState(null);
console.log(selectedType, "selectedType");

return (
    <div className="py-16 bg-white">

        <h2 className="text-5xl font-bold text-center">
            Premium Digital Tools
        </h2>

        <p className="text-center text-[#627382] text-[16px] mt-2">
            Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.
        </p>

        {/* Toggle */}
        <div className="flex justify-center gap-3 mt-6">

            <div>
                <button onClick={() => setSelectedType("products")} 
                className={`btn ${selectedType === "products" ? "bg-linear-to-r from-[#9514FA] to-[#4F39F6]" : ""} rounded-r-none rounded-l-xl text-white text-[16px] font-bold hover:text-black`}>Products</button>

                <button onClick={() => setSelectedType("cart")} 
                className={`btn ${selectedType === "cart" ? "bg-linear-to-r from-[#9514FA] to-[#4F39F6]" : ""} rounded-l-none rounded-r-xl text-white text-[16px] font-bold hover:text-black`}>Cart({cart.length})</button>
            </div>
        </div>
        {/* Cards */}

        {selectedType === "products" && (
            <div className="grid md:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto px-4 p-5 bg-white rounded-xl shadow-sm border border-[#F2F2F2]">
                {products.map((p) => (
                    <div key={p.id} className="bg-white p-5 rounded-xl shadow-sm border border-[#F2F2F2] border-10px hover:-translate-y-2 hover:shadow-lg transition duration-300">

                        <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-sm ml-[10px] mt-[24px]">
                            <img src={p.image} alt={p.name} className="w-6 h-6 object-contain" />
                        </div>

                        {/* Tag */}
                        <div className="relative p-4 bg-white rounded-xl">

                            {/* Badge */}
                            <div className=" absolute transform -translate-y-1/2 -top-15 -right-3">

                            <span className={`flex items-center gap-1 text-xs px-3 py-1 rounded-full font-medium ${p.tag === "Best Seller" ? "bg-[#FEF3C6] text-[#BB4D00]" :  p.tag === "Popular" ? "bg-[#E1E7FF] text-[#4F39F6]" : "bg-[#DBFCE7] text-[#0A883E]"}`}>
                                {p.tag === "Best Seller"}
                                {p.tag === "Popular"}
                                {p.tag === "New"}
                                {p.tag}

                            </span>
                            </div>
                            {/* Title */}

                            <h3 className="font-bold text-2xl ml-[-10px]">{p.name}</h3>

                            <p className="text-sm text-[#627382] mt-2">{p.description}</p>

                            {/* Price */}
                            <p className="mt-3 font-bold text-xl">{p.price}
                                <span className="text-[16px] font-normal text-[#627382]">{p.period}
                                </span>
                            </p>
                        </div>

                            <ul className="mt-3 space-y-2 text-sm">{p.features.map((f, i) => (
                                
                                <li key={i} className="flex items-center gap-2">

                                    {/* icon */}
                                    <IoMdCheckmark className="text-[#30B868]" />
                                    {/* Text */}
                                    <span className="text-[#627382]">{f}
                                    </span>
                                </li>
                            ))}
                            </ul>
                            {/* Button */}
                            <button onClick={() => handleAddToCart(p)} className={`btn mt-4 w-full py-2 rounded-full text-white transition duration-200 ${activeItem === p.id ? "bg-green-500" : "bg-linear-to-r from-[#9514FA] to-[#4F39F6]"} hover:scale-105 hover:shadow-sm active:scale-95 active:ring-2`}> {activeItem === p.id ? (<span className="flex items-center justify-center gap-2"><IoMdCheckmark />Added to cart</span>) : ("Buy Now")}
                            </button>
                        </div>
                    ))}
                    </div>
                )}
                {selectedType === "cart" && (
                    <div className="max-w-4xl mx-auto mt-10 bg-white p-6 rounded-xl shadow-sm border border-[#F2F2F2]">

                        <h3 className="text-xl font-semibold mb-4"> Your Cart</h3>

                        {cart.length === 0 ? (
                            <p className="text-[#627382] text-center py-10 flex items-center justify-center gap-2">Your Cart Is Empty <FaShoppingCart className="text-xl" /></p>) : (
                                <>
                                {cart.map((item, i) => (
                                    <div key={i} className="flex justify-between items-center bg-gray-50 p-4 rounded-lg mb-3">

                                        <div className="flex items-center gap-3">
                                            <img src={item.image} className="w-8 h-8" />
                                            <div>
                                                <h4 className="font-medium">{item.name}</h4>
                                                <p className="text-sm text-[#627382]">{item.price}</p>
                                            </div>
                                        </div>

                                        {/* Remove */}

                                        <button onClick={() => {const newCart = cart.filter((_, index) => index !== i);
                                            setCart(newCart);
                                            toast.error("Item Removed!!");
                                        }} className="text-[#FF3980] text-sm cursor-pointer">
                                            Remove
                                        </button>

                                    </div>
                                ))}
                                {/* Total */}

                                <div className="flex justify-between mt-4 font-semibold">
                                    <span>
                                        Total:
                                    </span>
                                    <span>
                                        $
                                        {cart.reduce((total, item) => total + parseInt(item.price.replace("$", "")), 0)}
                                    </span>
                                </div>

                                {/* Checkout */}
                                <button onClick={() => {toast.success("Successfully Checked out!!!");
                                    setCart([]);
                                }} className="btn btn-primary mt-4 w-full py-2 rounded-full bg-linear-to-r from-[#9514FA] to-[#4F39F6] text-white transition duration-200 hover:scale-105 hover:shadow-sm active:scale-100 active:ring-2">
                                    Proceed to Checkout
                                </button>
                                </>
                            )}
                    </div>
                )}
    </div>
    );
};