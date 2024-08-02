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
import BookTask from './pages/dashboard/pages/booktask';
import MyTasks from './pages/dashboard/pages/mytasks';

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
      path: 'dashboard/booktask',
      element: <DashBoardHome />,
      children: [
        {
          path: 'account',
          element: <Account />
        },
        
        {
          path: 'tasks',
          element: <MyTasks />
        }
      ]
    }
  ]);
  
  return <RouterProvider router={router} />;
}

export default App;
