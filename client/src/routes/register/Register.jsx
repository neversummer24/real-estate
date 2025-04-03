import "./register.scss";
import { Link, useNavigate } from "react-router-dom";
import apiRequest from "../../libs/apiRequest";
import { useState } from "react";

function Register() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        const formData = new FormData(e.target);
        try {
            const res = await apiRequest.post("auth//register", {
                username: formData.get("username"),
                email: formData.get("email"),
                password: formData.get("password"),
            });
            
            navigate("/login");
           
        } catch (err) {
            setError(err.response.data.message);
        }finally{
            setLoading(false);
        }
       
    };
    return (
        <div className="registerPage">
          <div className="formContainer">
            <form onSubmit={handleSubmit}>
              <h1>Create an Account</h1>
              <input name="username" type="text" placeholder="Username" />
              <input name="email" type="text" placeholder="Email" />
              <input name="password" type="password" placeholder="Password" />
              <button disabled={loading}>Register</button>
              {error && <span>{error}</span>}
              <Link to="/login">Do you have an account?</Link>
            </form>
          </div>
          <div className="imgContainer">
            <img src="/bg.png" alt="" />
          </div>
        </div>
      );
}

export default Register