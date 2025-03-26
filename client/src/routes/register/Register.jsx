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
        try {
            const res = await apiRequest.post("auth//register", {
                username: e.target.username.value,
                email: e.target.email.value,
                password: e.target.password.value,
            });
            setTimeout(1000, () => {
                navigate("/login");
            })
        } catch (err) {
            setError(err.response.data);
        }finally{
            setLoading(false);
        }
       
    };
    return (
        <div className="registerPage">
            <div className="formContainer">
                <form onSubmit={handleSubmit}>
                    <h1>Register</h1>
                    <input name="username" type="text" placeholder="Username" />
                    <input name="email" type="email" placeholder="Email" />
                    <input name="password" type="password" placeholder="Password" />
                   
                    <button disabled={loading}>Register</button>
                    {error && <p>{error}</p>}
                    <Link to="/login">Already have an account?</Link>
                </form>

                <div className="imageContainer">
                    <img src="/bg.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Register