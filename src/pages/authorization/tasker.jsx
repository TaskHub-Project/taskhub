import { ArrowBigUp } from "lucide-react";
import tools from "../../assets/images/tools.jpg";
import { useNavigate } from "react-router-dom";

const Tasker = () => {
  const navigate = useNavigate();

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-blue-400 bg-cover bg-center"
      style={{ backgroundImage: `url(${tools})` }}
    >
      <div className="bg-[#A5927D] bg-opacity-90 w-full max-w-lg mx-4 p-8 rounded-lg shadow-xl">
        <form>
          <h1 className="font-extrabold text-3xl text-center mb-8">Sign Up to Become a Tasker</h1>

          <div className="mb-4">
            <input
              id="first-name"
              type="text"
              placeholder="First Name"
              required
              className="w-full p-3 rounded-lg text-black placeholder-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <input
              id="last-name"
              type="text"
              placeholder="Last Name"
              required
              className="w-full p-3 rounded-lg text-black placeholder-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <input
              id="email"
              type="email"
              placeholder="Enter Email"
              required
              className="w-full p-3 rounded-lg text-black placeholder-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4 flex items-center">
            <select
              id="country-code"
              className="mr-2 p-3 rounded-lg text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>+233 (Ghana)</option>
              <option>+234 (Nigeria)</option>
              <option>+1 (USA)</option>
              <option>+44 (UK)</option>
              <option>+91 (India)</option>
              <option>+61 (Australia)</option>
            </select>
            <input
              id="phone"
              type="tel"
              placeholder="Phone Number"
              className="w-full p-3 rounded-lg text-black placeholder-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <select
              className="w-full p-3 rounded-lg text-black placeholder-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              defaultValue=""
            >
              
              <option>Select Category</option>
              <option>Electrician</option>
              <option>Plumber</option>
              <option>Cleaner</option>
              <option>Painter</option>
              <option>Carpenter</option>
              <option>Driver</option>
            </select>
          </div>

          <div className="mb-4">
            <input
              type="text"
              placeholder="About"
              className="w-full p-3 rounded-lg text-black placeholder-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              placeholder="Enter your Location"
              className="w-full p-3 rounded-lg text-black placeholder-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <input
              id="password"
              type="password"
              placeholder="Enter Password"
              required
              className="w-full p-3 rounded-lg text-black placeholder-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6 flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <ArrowBigUp size={24} />
              <h3>Upload Image</h3>
            </div>
            <label className="w-full">
              <span className="sr-only">Choose profile photo</span>
              <input
                type="file"
                className="block w-full text-sm text-black file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
                id="flier"
                name="flier"
              />
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold "
          >
            Sign Up
          </button>

          <p className="mt-4 text-center text-sm text-black">
            By creating an account, you agree to our{" "}
            <a href="#" className="text-blue-800 underline">
              Terms & Conditions
            </a>.
          </p>

          <div className="mt-4 text-center">
            <p className="text-sm text-black">
              Already have an account?{" "}
              <a href="#" className="text-blue-800 font-medium" onClick={() => navigate("/login")}>
                Login
              </a>.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Tasker;
