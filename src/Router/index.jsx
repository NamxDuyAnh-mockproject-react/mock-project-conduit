import { createBrowserRouter} from 'react-router-dom';
import Home from "../components/Home/Home"
import Login from '../components/Login/Login';
import Header from '../components/Header/Header';
import Register from '../components/Register/Register'

const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      children: [
        {
          path: "home",
          element: <Home />,
        },
        {
            path: "login",
            element: <Login />,
          },
          {
            path: "register",
            element: <Register />,
          },
      ],
    },
  ]);
  
export default router;