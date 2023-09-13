import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Header from "../components/Header/Header";
import Register from "../components/Register/Register";
import TagDetail from "../components/Tag/TagDetail";
import ArticleDetail from "../components/ArticleDetail/ArticleDetail";

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
        path: "articles/:slug",
        element: <ArticleDetail />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "/tag",
        element: <TagDetail />,
      },
    ],
  },
]);

export default router;
