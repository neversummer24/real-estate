
import HomePage from "./routes/homePage/HomePage";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListPage from "./routes/listPage/ListPage";
import Layout from "./routes/layout/Layout";
import SinglePage from "./routes/singlePage/SinglePage";
import Profile from "./routes/profile/Profile";
import Register from "./routes/register/Register";
import Login from "./routes/login/Login";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import NewPostPage from "./routes/newPostPage/NewPostPage";
import { singlePageLoader , listPageLoader, profilePageLoader} from "./libs/loader";

const PrivateRoute = () => {
  const {currentUser} = useContext(AuthContext);
  return currentUser ? <Outlet /> : <Navigate to="/login" replace />;
};


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "list", element: <ListPage />, loader: listPageLoader },
      { path: ":id", element: <SinglePage />, loader: singlePageLoader },
      {
        element: <PrivateRoute />, // 受保护路由
        children: [
          { path: "profile", element: <Profile />, loader: profilePageLoader },
          { path: "add", element: <NewPostPage /> },
        ],
      },
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App