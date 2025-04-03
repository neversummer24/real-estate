
import HomePage from "./routes/homePage/HomePage";
import "./index.scss";
import { Route,  Routes } from "react-router-dom";
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
import { singlePageLoader } from "./libs/loader";

const PrivateRoute = () => {
  const {currentUser} = useContext(AuthContext);
  return currentUser ? <Outlet /> : <Navigate to="/login" replace />;
};


function App() {
  return (
    <main>
      {/* <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} /> */}

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="list" element={<ListPage />} />
          <Route path="/:id" element={<SinglePage /> }  loader={singlePageLoader}/>
          <Route element={<PrivateRoute />}>
              <Route path="profile" element={<Profile />} />
              <Route path="add" element={<NewPostPage />} />
          </Route>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          {/* <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="agents" element={<AgentsPage />} /> */}
        </Route>
      </Routes>
    </main>
 
  )
}

export default App