import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Header from "../components/Header/Header";
import Register from "../components/Register/Register";
import TagDetail from "../components/Tag/TagDetail";
import ArticleDetail from "../components/ArticleDetail/ArticleDetail";
import CreateArticle from "../components/CreateArticle/CreateArticle";
import Settings from "../components/Settings/Settings";
import Profile from "../components/Profile/Profile";
import { Navigate } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />,
      },
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
      {
        path: "new-article",
        element: <CreateArticle />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);

export default router;
