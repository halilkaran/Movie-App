import { useState } from "react";
import { Button } from "react-bootstrap";
import { createUser } from "../auth/firebase";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setlastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleRegister = () => {
    const displayName = `${firstName} ${lastName}`;
    createUser(email, password, displayName);
    navigate("/");
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="form-image">
        <img src={"https://picsum.photos/800/800"} alt="sample-movie" />
      </div>
      <div className="register-form">
        <h1 className="form-title display-4">Register</h1>
        <form id="register">
          <div className="mb-3">
            <label htmlFor="first-name" className="form-label display-6">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="first-name"
              placeholder="Enter your first name..."
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="last-name" className="form-label display-6">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="last-name"
              placeholder="Enter your last name..."
              onChange={(e) => setlastName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label display-6">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email address..."
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label display-6">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password..."
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button
            variant="primary"
            className="form-control"
            onClick={handleRegister}
          >
            Register
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Register;
