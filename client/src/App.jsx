
import HomePage from "./routes/homePage/HomePage";
import "./index.scss";
import { Route,  Routes } from "react-router-dom";
import ListPage from "./routes/listPage/ListPage";
import Layout from "./routes/layout/Layout";
import SinglePage from "./routes/singlePage/SinglePage";
import Profile from "./routes/profile/Profile";




function App() {
  return (
    <main>
      {/* <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} /> */}

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="list" element={<ListPage />} />
          <Route path="/:id" element={<SinglePage />} />
          <Route path="profile" element={<Profile />} />
          {/* <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="agents" element={<AgentsPage />} /> */}
        </Route>
      </Routes>
    </main>
 
  )
}

export default App