import { Calendar, CreditCard, DollarSign } from "lucide-react";
import womanchain from "../../../assets/images/womanchain.jpg";
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate()
    return (
        <div className="flex flex-col lg:flex-row items-center lg:items-start p-8 space-y-8 lg:space-y-0 lg:space-x-8 bg-gray-100">
            <div className="w-full lg:w-1/2 px-10 ">
                <img src={womanchain} alt="about image" className="rounded-lg  border-4 border-[#BAD3FC] " />
            </div>

            <div className="w-full lg:w-1/2 text-center lg:text-left py-24 pr-9">
                <h1 className="text-xl font-semibold text-gray-800 mb-4">Trusted Professionals</h1>
                <p className="text-gray-600 mb-8">TuskerHub Taskers are well vetted and trained to offer exceptional services at affordable prices</p>

                <div className="flex gap-3">
                    <div className="flex items-center mb-4">
                        <DollarSign className="w-6  text-green-500 mr-2" />
                        <p className="text-gray-700">See your price</p>
                    </div>

                    <div className="flex items-center mb-4">
                        <Calendar className="w-6  text-blue-500 mr-2" />
                        <p className="text-gray-700">Book preferred Time</p>
                    </div>

                    <div className="flex items-center mb-8">
                        <CreditCard className="w-6  text-purple-500 mr-2" />
                        <p className="text-gray-700">Pay Online</p>
                    </div>
                </div>

                <div className="pt-28">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">Book Trusted Professionals Now!!</h1>
                    <span className="text-gray-600 mb-8 block">Cleaning, Painting, Plumbing and more..</span>

                    <button className="bg-blue-500 text-white px-4 py-2 rounded-full" onClick={() => navigate("service")}>Book a Tasker</button>
                </div>
            </div>
        </div>
    );
}

export default About;
