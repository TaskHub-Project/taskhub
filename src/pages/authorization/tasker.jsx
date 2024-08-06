import tools from "../../assets/images/tools.jpg";
import { useNavigate } from "react-router-dom";

const Tasker = () => {
  const navigate = useNavigate()
  return (
    <div
      className="m-0 p-0 box-border flex justify-center items-center min-h-screen bg-blue-400 bg-cover bg-center"
      style={{ backgroundImage: `url(${tools})` }}
    >
      <div className="bg-[#C8A68C] bg-opacity-80 w-[420px] text-black p-8 rounded-lg shadow-lg">
        <form>
          <h1 className="font-extrabold text-3xl text-center mb-6">Sign Up to Become a Tasker</h1>

          <div className="mb-6">
            <input
              id="first-name"
              type="text"
              placeholder="First Name"
              required
              className="w-full p-2 rounded-lg bg-transparent text-black placeholder-black border border-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <input
              id="last-name"
              type="text"
              placeholder="Last Name"
              required
              className="w-full p-2 rounded-lg bg-transparent text-black placeholder-black border border-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6 relative text-black">
            <input
              id="email"
              type="email"
              placeholder="Enter Email"
              required
              className="w-full p-2 rounded-lg bg-transparent text-black placeholder-black border border-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6 flex items-center">
            <select
              id="country-code"
              className="mr-2 p-2 rounded-lg bg-transparent text-black border border-white focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full p-2 rounded-lg bg-transparent text-black placeholder-black border border-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6 relative text-black">
            <select
              className="w-full p-2 rounded-lg bg-transparent text-black placeholder-black border border-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled selected>Select Category</option>
              <option>Electrician</option>
              <option>Plumber</option>
              <option>Cleaner</option>
              <option>Painter</option>
              <option>Carpenter</option>
              <option>Driver</option>
            </select>
          </div>

          <div className="mb-6 relative text-black">
            <input
              type="text"
              placeholder="Enter your Location"
              className="w-full p-2 rounded-lg bg-transparent text-black placeholder-black border border-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6 relative text-black">
            <input
              id="password"
              type="password"
              placeholder="Enter Password"
              required
              className="w-full p-2 rounded-lg bg-transparent text-black placeholder-black border border-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-black p-2 rounded-lg font-semibold"
          >
            Sign Up
          </button>

          <p className="mt-4 text-center text-sm">
            By creating an account, you agree to our <a href="#" className="text-blue-500 underline">Terms & Conditions</a>.
          </p>

          <div className="container signin text-center pt-3">
            <p className="text-sm">
              Already have an account? <a href="#" className="text-blue-600" onClick={() => navigate("/login")}>Login</a>.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Tasker;
