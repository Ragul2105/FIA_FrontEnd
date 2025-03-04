import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import logo from '../assets/logomain.jpg';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const [currentTime, setCurrentTime] = useState(format(new Date(), 'HH:mm:ss'));
  const currentDate = format(new Date(), 'dd-MM-yyyy');
  const location = useLocation();
  const isCycleTimePage = location.pathname === '/cycle-time';

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(format(new Date(), 'HH:mm:ss'));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white px-4 py-2 flex justify-between items-center shadow-md border-b border-gray-200">
      {/* Left Section - Logo and Title */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 flex items-center justify-center">
          <img 
            src={logo}
            alt="Company Logo"
            className="h-full w-full object-contain"
          />
        </div>
        <h1 className="text-lg font-bold text-[#000000] tracking-wide">DASHBOARD</h1>
      </div>

      {/* Right Section - Combined Date, Time and Shift */}
      <div className="flex items-center gap-4">
        {/* Updated Combined Display with better styling */}
        <div className="flex items-center">
          {/* Date Section */}
          <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#2563eb] to-blue-600 rounded-l-lg">
            <div className="flex items-center gap-2">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 text-white" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" 
                  clipRule="evenodd" 
                />
              </svg>
              <span className="text-xs font-medium text-white">{currentDate}</span>
            </div>
          </div>

          {/* Time Section */}
          <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700">
            <div className="flex items-center gap-2">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 text-white" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" 
                  clipRule="evenodd" 
                />
              </svg>
              <span className="text-xs font-medium text-white">{currentTime}</span>
            </div>
          </div>

          {/* Shift Section */}
          <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-700 to-blue-800 rounded-r-lg">
            <div className="flex items-center gap-2">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 text-white" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" 
                  clipRule="evenodd" 
                />
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
              </svg>
              <span className="text-xs font-medium text-white">SHIFT I</span>
              <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Login button*/}
        {!isCycleTimePage && (
          <Link 
            to="/login" 
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 
                       hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-lg 
                       transition duration-300 ease-in-out transform hover:scale-[1.02] 
                       shadow-md hover:shadow-lg"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" 
                clipRule="evenodd" 
              />
            </svg>
            <span>Login</span>
          </Link>
        )}
      </div>
    </div>
  )
}

export default Header;