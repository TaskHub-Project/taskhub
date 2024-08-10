import { Link } from "react-router-dom";
import Footer from "../../../components/footer";
import avatar from "../../../assets/images/avatar.png";
import { FaPhone, FaUser } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiEdit, FiTrash } from "react-icons/fi";
import Button from "../../../components/button";

const Account = () => {
  
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50">
      <header className="flex justify-between items-center py-6 px-12 bg-gray-100 shadow-md">
        <h3 className="text-3xl font-bold text-gray-800 cursor-pointer" onClick={() => navigate("/")}>
          TaskerHub
        </h3>

        <nav className="space-x-8">
          <Link to="/dashboard/dashboard/tasks" className="font-semibold text-gray-600 hover:text-gray-800">
            My Tasks
          </Link>
          <Link to="/dashboard/dashboard/account" className="font-semibold text-gray-600 hover:text-gray-800">
            Profile
          </Link>
          <Link to="/dashboard/booktask" className="font-semibold text-gray-600 hover:text-gray-800">
            Notification
          </Link>
        </nav>
      </header>

      <main className="flex-grow flex flex-col items-center py-10">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Profile</h1>

        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <div className="flex justify-center mb-6">
            <img className="w-32 h-32 rounded-full border border-gray-300" src={avatar} alt="Avatar" />
          </div>

          <div className="space-y-4">
            <div className="flex items-center">
              <FaUser className="text-gray-600 w-5 h-5 mr-3" />
              <span className="text-lg font-semibold text-gray-800">Evelyn Yaa Baidoo</span>
            </div>

            <div className="flex items-center">
              <MdOutlineMailOutline className="text-gray-600 w-5 h-5 mr-3" />
              <span className="text-lg font-semibold text-gray-800">eve@gmail.com</span>
            </div>

            <div className="flex items-center">
              <FaPhone className="text-gray-600 w-5 h-5 mr-3" />
              <span className="text-lg font-semibold text-gray-800">+23357648973</span>
            </div>
          </div>

          <div className="flex justify-between mt-8">
            <button
              
              className="flex items-center text-blue-600 hover:text-blue-800"
            >
              <FiEdit className="w-5 h-5 mr-1" />
              Edit
            </button>
            <button
              
              className="flex items-center text-red-600 hover:text-red-800"
            >
              <FiTrash className="w-5 h-5 mr-1" />
              Delete
            </button>
          </div>

          <div className="flex justify-center mt-8">
            <Button>Logout</Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Account;
