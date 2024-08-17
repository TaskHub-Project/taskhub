import { Link, useNavigate } from "react-router-dom";
import Footer from "../../../components/footer";
import empty from "../../../assets/images/empty.png";
import Button from "../../../components/button";
import F from "../../../constant/constants";
import { Copy, Edit, Plus, Trash2 } from "lucide-react";
import PagesLayout from "../../becometasker/dashboard/layout/pageslayout";

const MyTasks = () => {
  const navigate = useNavigate();


  return (
    <div className="min-h-screen flex flex-col justify-between">
      <header className="flex justify-between items-center py-6 px-12 bg-gray-100 shadow-md">
        <h3 className="text-3xl font-bold text-gray-800">TaskHub</h3>
        <nav className="space-x-8">
          <Link to="/dashboard/dashboard/tasks" className="font-semibold text-gray-600 hover:text-gray-800">
            My Tasks
          </Link>
          <Link to="/dashboard/dashboard/account" className="font-semibold text-gray-600 hover:text-gray-800">
            Profile
          </Link>
          <Link to="/dashboard/dashboard/booktask" className="font-semibold text-gray-600 hover:text-gray-800">
            Notification
          </Link>
        </nav>
      </header>

      <main className="flex-grow p-8 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">My Bookings</h2>
        </div>
        <PagesLayout buttonText="Book Task" onClick={()=> navigate("/prof")}>

          <div className="flex flex-wrap justify-center gap-8">
            {F.TASKS.length > 0 ? (
              F.TASKS.map((task, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 max-w-sm transition-transform transform hover:scale-105"
                >
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{task.title}</h3>
                  <p className="text-gray-600 mb-1 text-lg font-semibold">{task.name}</p>
                  <p className="text-gray-600 mb-1 font-semibold">{task.email}</p>
                  <p className="text-gray-600 mb-1 font-semibold">{task.telephoneNumber}</p>
                  <p className="text-gray-600 mb-1 font-semibold">{task.location}</p>
                  <p className="text-gray-600 mb-1 font-semibold">{task.house}</p>
                  <p className="text-gray-600 mb-1 font-semibold">{task.type}</p>
                  <p className="text-gray-600 mb-4">{task.description}</p>
                  <p className="text-gray-600 mb-1 font-semibold">{task.date}</p>
                  <p className="text-gray-600 font-semibold">{task.time}</p>

                  <div className="flex justify-between mt-4">
                    <button

                      className="flex items-center text-blue-600 hover:text-blue-800"
                    >
                      <Edit className="w-5 h-5 mr-1" />
                      Edit
                    </button>
                    <button

                      className="flex items-center text-red-600 hover:text-red-800"
                    >
                      <Trash2 className="w-5 h-5 mr-1" />
                      Delete
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center max-w-xl">
                <img src={empty} alt="No tasks available" className="mb-8 w-64 h-64 object-contain mx-auto" />
                <h2 className="font-bold text-2xl text-gray-800 mb-4">Need A Service?</h2>
                <p className="text-lg text-gray-600 mb-8">Book your next task or manage future tasks with TaskerHub.</p>
                <div className="flex justify-center">
                  <Button onClick={() => navigate("/dashboard")}>Book Now</Button>
                </div>
              </div>
            )}
          </div>


        </PagesLayout>
      </main>

      <Footer />
    </div>
  );
};

export default MyTasks;
