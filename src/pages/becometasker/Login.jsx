import { FaLock, FaUser } from "react-icons/fa";
import toolss from "../../assets/images/toolss.jpg";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
  return (
    <div className="m-0 p-0 box-border flex justify-center items-center min-h-screen bg-blue-400 bg-cover bg-center" style={{ backgroundImage: `url(${toolss})` }}>
    <div className="bg-[#244A89] bg-opacity-80 w-[420px] text-white p-6 rounded-lg shadow-lg">
      <form>
        <h1 className="font-extrabold text-3xl text-center mb-6">Become a Tasker</h1>

        <div className="flex relative mb-4">
          <input
            type="text"
            placeholder="Email"
            required
            className="flex-1 p-2 rounded-lg bg-transparent border border-gray-400"

          />
          <FaUser className="absolute left-[350px] top-1/2 transform -translate-y-1/2 text-gray-400 " />
        </div>

        <div className="flex relative mb-4">
          <input
            type="password"
            placeholder="Password"
            required
            className="flex-1 p-2 rounded-lg bg-transparent border border-gray-400 "

          />
          <FaLock className="absolute left-[350px] top-1/2  text-gray-400" />
        </div>

        <div className="flex justify-between items-center mb-4">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Remember me
          </label>
          <span className="text-blue-600 hover:underline" onClick={() => navigate("/reset")}>Forgot Password?</span>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-lg"
        >
          Sign In
        </button>

        <div className="mt-4 text-center">
          <p onClick={() => navigate("/tasker")} className="cursor-pointer">
            Don't have an account? <span className="text-blue-600 hover:underline">Register</span>
          </p>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Login