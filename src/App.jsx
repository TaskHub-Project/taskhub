
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './layout/rootlayout';
import LandingPage from './pages/landingpage';
import SignUp from './pages/authorization/signup';
import Tasker from './pages/authorization/tasker';
import Signin from './pages/authorization/signin';
import AllServices from './pages/authorization/allservices';
import Reset from './pages/authorization/reset';



function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <LandingPage />
        },

      ]
    },

    {
      path: "signup",
      element: <SignUp />
    },

    {
      path: "signin",
      element: <Signin />
    },

    {
      path: "reset",
      element: <Reset />
    },

    {
      path: "tasker",
      element: <Tasker />
    },

    {
      path: "service",
      element: <AllServices />
    }

  ])
  return <RouterProvider router={router} />;
}

export default App
