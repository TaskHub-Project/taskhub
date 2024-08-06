import { Link } from "react-router-dom";
import Footer from "../../../components/footer";
import avatar from "../../../assets/images/avatar.png"
import { FaPhone, FaUser } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiEdit, FiTrash } from "react-icons/fi";
import Button from "../../../components/button";

const Account = () => {
  return (
    <div>

      <div className="flex justify-around py-12 ">
        <h3 className="text-3xl font-bold" onClick={() => navigate("/")}>TaskerHub</h3>

        <div className="space-x-8">
          <Link to="/dashboard/booktask" className="font-semibold">Book a Task</Link>
          <Link to="/dashboard/dashboard/tasks" className="font-semibold">My Tasks</Link>
          <Link to="/dashboard/dashboard/account" className="font-semibold">Profile</Link>
        </div>
      </div>

      <div className="min-h-screen flex flex-col justify-between">
      <div className="flex flex-col items-center py-10 bg-gray-100 flex-grow">
        <h1 className="text-3xl font-bold mb-8">Profile</h1>

        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <div className="flex justify-center mb-6">
            <img className="w-32 h-32 rounded-full" src={avatar} alt="Avatar" />
          </div>

          <div className="grid grid-cols-3 gap-4 items-center mb-4">
            <FaUser className="justify-self-end" />
            <span className="col-span-2 text-lg font-semibold">Evelyn Yaa Baidoo</span>
          </div>

          <div className="grid grid-cols-3 gap-4 items-center mb-4">
            <MdOutlineMailOutline className="justify-self-end" />
            <span className="col-span-2 text-lg font-semibold">eve@gmail.com</span>
          </div>

          <div className="grid grid-cols-3 gap-4 items-center mb-4">
            <FaPhone className="justify-self-end" />
            <span className="col-span-2 text-lg font-semibold">+23357648973</span>
          </div>

          <div className="flex justify-end space-x-4 mt-4">
            <FiEdit className="cursor-pointer text-blue-500" />
            <FiTrash className="cursor-pointer text-red-500" />
          </div>

          <div className="px-24">
          <Button>Logout</Button>
          </div>
        </div>
      </div>


      


      <Footer />
    </div>
    </div>
  )
}

export default Account