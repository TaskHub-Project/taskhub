import { Link, useNavigate } from "react-router-dom";
import Footer from "../../../components/footer";
import empty from "../../../assets/images/empty.png";
import Button from "../../../components/button";

const MyTasks = () => {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <header className="flex justify-between items-center py-6 px-12 bg-gray-100">
        <h3 className="text-3xl font-bold text-gray-800">TaskerHub</h3>
        <nav className="space-x-8">
          <Link to="/dashboard/dashboard/booktask" className="font-semibold text-gray-600 hover:text-gray-800">Book a Task</Link>
          <Link to="/dashboard/dashboard/tasks" className="font-semibold text-gray-600 hover:text-gray-800">My Tasks</Link>
          <Link to="/dashboard/dashboard/account" className="font-semibold text-gray-600 hover:text-gray-800">Profile</Link>
        </nav>
      </header>

      <main className="flex flex-col items-center justify-center flex-grow px-12 py-24">
        <img src={empty} alt="No tasks available" className="mb-8 w-64 h-64 object-contain" />
        <div className="text-center max-w-xl">
          <h2 className="font-bold text-2xl text-gray-800 mb-4">Need A Service?</h2>
          <p className="text-lg text-gray-600 mb-8">Book your next task or manage future tasks with TaskerHub.</p>
          <div className="flex justify-center" onClick={() => navigate("/dashboard")}>
            <Button>Book Now</Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MyTasks;
