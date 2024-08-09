import F from "../constant/constants"


const NotificationCard = () => {
    return (
        <div>

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

        </div>
    )
}

export default NotificationCard

