import { useNavigate } from "react-router-dom";
import { Edit, Trash2 } from "lucide-react";
import F from "../constant/constants";

const BookingCard = () => {
  const navigate = useNavigate();

  return (
    <main className="flex-grow p-8 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">My Bookings</h2>
      </div>

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
          <div className="text-center">
            <p className="text-gray-600">No bookings available.</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default BookingCard;
