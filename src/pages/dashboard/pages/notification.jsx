import { Link, useNavigate } from "react-router-dom";
import Button from "../../../components/button";
import Footer from "../../../components/footer";
import F from "../../../constant/constants";

const Notification = () => {
    const getStatusClasses = (status) => {
        switch (status) {
            case 'Active':
                return 'bg-green-100 text-green-700 border-green-400';
            case 'Inactive':
                return 'bg-gray-100 text-gray-700 border-gray-400';
            default:
                return 'bg-gray-100 text-gray-700 border-gray-400';
        }
    };

    return (
        <div className="p-6 bg-white shadow-md rounded-md">

            <div className="flex justify-around py-12 ">
                <h3 className="text-3xl font-bold" onClick={() => navigate("/")}>TaskHub</h3>

                <div className="space-x-8">

                    <Link to="dashboard/tasks" className="font-semibold">My Tasks</Link>
                    <Link to="dashboard/account" className="font-semibold">Profile</Link>
                    <Link to="dashboard/booktask" className="font-semibold">Notification</Link>
                </div>
            </div>

            <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-800">Notifications</h1>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="py-3 px-4 border-b border-gray-200 text-left text-gray-700">Form of Communication</th>
                            <th className="py-3 px-4 border-b border-gray-200 text-center text-gray-700">Email</th>
                            <th className="py-3 px-4 border-b border-gray-200 text-center text-gray-700">SMS</th>
                            <th className="py-3 px-4 border-b border-gray-200 text-center text-gray-700">Push Notification</th>
                        </tr>
                    </thead>

                    <tbody>
                        {F.NOTIFY.map((notify, index) => (
                            <tr key={index} className={`text-center ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                                <td className="py-4 px-4 border-b border-gray-200 text-left">{notify.title}</td>
                                <td className="py-4 px-4 border-b border-gray-200">{notify.email}</td>
                                <td className="py-4 px-4 border-b border-gray-200">{notify.sms}</td>
                                <td className="py-4 px-4 border-b border-gray-200">{notify.push}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="flex justify-center gap-6 py-6">
                <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg  focus:outline-none focus:ring-2  focus:ring-opacity-75">
                    Cancel
                </button>
                <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg  focus:outline-none focus:ring-2  focus:ring-opacity-75">
                    Save
                </button>
            </div>

            <Footer />
        </div>
    );
};

export default Notification;
