import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './layout/rootlayout';
import LandingPage from './pages/landingpage';
import SignUp from './pages/authorization/signup';
import Tasker from './pages/authorization/tasker';
import Signin from './pages/authorization/signin';
import AllServices from './pages/authorization/allservices';
import Reset from './pages/authorization/reset';
import DashBoardHome from './pages/dashboard/pages/home';
import Account from './pages/dashboard/pages/account';
import BookTask from './pages/dashboard/pages/notification';
import MyTasks from './pages/dashboard/pages/mytasks';
import DashboardLayout from './pages/dashboard/layout/dashboardlayout';
import BookForm from './pages/dashboard/pages/bookform';
import Login from './pages/becometasker/Login'
import TaskerDashboardLayout from './pages/becometasker/dashboard/layout/taskdashboardlayout';
import TaskerDashBoardHome from './pages/becometasker/dashboard/pages/home';

import Professionals from "./pages/dashboard/pages/professionals"
import MoreServices from './pages/dashboard/pages/moreservice';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <LandingPage />
        },
        {
          path: 'service',
          element: <AllServices />
        }
      ]
    },
    {
      path: 'signup',
      element: <SignUp />
    },
    {
      path: 'signin',
      element: <Signin />
    },
    {
      path: 'reset',
      element: <Reset />
    },
    {
      path: 'tasker',
      element: <Tasker />
    },
    {
      path: 'login',
      element: <Login />
    },

    {
      path: "form",
      element: <BookForm />
    },

    {
      path: "prof",
      element: <Professionals />
    },
    {
      path: "more",
      element: <MoreServices/>
    },



    // {
    //   path: "side",
    //   element:  <SideBar />
    // },



    {
      path: 'dashboard',
      element: <DashboardLayout />,
      children: [
        {
          path: '',
          element: <DashBoardHome />
        },
        {
          path: 'dashboard/booktask',
          element: <BookTask />
        },
        {
          path: 'dashboard/account',
          element: <Account />
        },
        {
          path: 'dashboard/tasks',
          element: <MyTasks />
        },

        
      ]
    },

    {
      path: "taskerdash",
      element: <TaskerDashboardLayout />,
      children: [
        {
          path: "",
          element: <TaskerDashBoardHome />
        },
        // {
        //   path: "taskerdash/profile",
        //   element: <Profile />
        // },

        // {
        //   path: "taskerdash/bookings",
        //   element: <MyBookings />
        // }


      ]



    }



  ]);

  return <RouterProvider router={router} />;
}

export default App;
