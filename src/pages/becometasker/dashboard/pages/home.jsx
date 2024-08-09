import { Link } from "react-router-dom";
import { CodeXml, FileCode, DatabaseIcon } from 'lucide-react';
import AccountCard from "../../../../components/accountcard";
import NotificationCard from "../../../../components/notificationcard";
import BookingCard from "../../../../components/bookingcard";
import { useState } from "react";
import { RiAccountBoxLine } from "react-icons/ri";

const TaskerDashBoardHome = () => {
  const [visibleCard, setVisibleCard] = useState('API-keys');

  const handleLinkClick = (cardId) => {
    setVisibleCard(cardId);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center py-6">
        <h3 className="text-3xl font-bold text-gray-800">Dashboard</h3>

        
      </div>

      <div className="mt-8">
        <header className="flex justify-center items-center relative ">
          <div className="w-[53.5vw] border-t border-gray-300"></div>

          <div className="absolute flex justify-center items-center gap-10 -translate-y-1/2">
            <div onClick={() => handleLinkClick('API-keys')} className="cursor-pointer flex flex-col items-center gap-2 py-3 group">
              <span className="flex items-center gap-2 text-gray-500 group-hover:text-blue-600 transition">
                
                <RiAccountBoxLine className="w-5 h-5" /> Account
              </span>
              <span className="h-0.5 w-0 bg-transparent transition-all group-hover:w-24 group-hover:bg-blue-500"></span>
            </div>

            <div onClick={() => handleLinkClick('Reported')} className="cursor-pointer flex flex-col items-center gap-2 py-3 group">
              <span className="flex items-center gap-2 text-gray-500 group-hover:text-blue-600 transition">
                <DatabaseIcon className="w-5 h-5" /> My Bookings
              </span>
              <span className="h-0.5 w-0 bg-transparent transition-all group-hover:w-24 group-hover:bg-blue-500"></span>
            </div>

            <div onClick={() => handleLinkClick('Documentation')} className="cursor-pointer flex flex-col items-center gap-2 py-3 group">
              <span className="flex items-center gap-2 text-gray-500 group-hover:text-blue-600 transition">
                <FileCode className="w-5 h-5" /> Notification
              </span>
              <span className="h-0.5 w-0 bg-transparent transition-all group-hover:w-24 group-hover:bg-blue-500"></span>
            </div>
          </div>
        </header>
      </div>

      <main className="pt-20">
        {visibleCard === 'API-keys' && (
          <div className="animate-fadeIn">
            <AccountCard />
          </div>
        )}
        {visibleCard === 'Reported' && (
          <div className="animate-fadeIn">
            <BookingCard />
          </div>
        )}
        {visibleCard === 'Documentation' && (
          <div className="animate-fadeIn">
            <NotificationCard />
          </div>
        )}
      </main>
    </div>
  );
};

export default TaskerDashBoardHome;
