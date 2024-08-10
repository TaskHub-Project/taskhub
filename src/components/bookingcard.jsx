import { Link, useNavigate } from "react-router-dom";

import { Copy, Edit, Plus, Trash2 } from "lucide-react";
import F from "../constant/constants";

const BookingCard = () => {
  const navigate = useNavigate()
  return (
    <main className="flex-grow p-8 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">My Bookings</h2>
      </div>

      <div className="flex flex-wrap justify-center gap-8">

        {
          F.TASKS.map(() => (

            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 max-w-sm transition-transform transform hover:scale-105"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">{task.title}</h3>
              <p className="text-gray-600 mb-1 font-semibold">{task.location}</p>
              <p className="text-gray-600 mb-1 font-semibold">{task.house}</p>
              <p className="text-gray-600 mb-1 font-semibold">{task.type}</p>
              <p className="text-gray-600 mb-4">{task.description}</p>
              <p className="text-gray-600 mb-1 font-semibold">{task.date}</p>
              <p className="text-gray-600 font-semibold">{task.time}</p>

              <div className="py-2 border-b border-gray-200">
                <div className="flex justify-center gap-4">
                  <Edit className="text-blue-400 w-4 h-4 cursor-pointer" />
                  <Trash2 className="text-red-400 w-4 h-4 cursor-pointer" />
                </div>
              </div>
            </div>


          ))
        }


      </div>
    </main>

  )
}

export default BookingCard