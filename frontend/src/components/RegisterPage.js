// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// // import axios from "axios";
// import api from "../services/api";

// const RegisterPage = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       console.log("inside try block");
//       await api.post("/auth/register", { name, email, password });
//       alert("About to push");
//       navigate("/login");
//       console.log("naviagte", navigate);
//     } catch (error) {
//       console.error("Error registering:", error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h1>Register</h1>
//       <input
//         type="text"
//         placeholder="Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button type="submit">Register</button>
//     </form>
//   );
// };

// export default RegisterPage;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;
  const navigate = useNavigate();

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("inside try block");
      await api.post("/auth/register", { name, email, password });
      // const res = await api.post("/auth/register", { name, email, password });
      alert("About to push");
      // console.log("User registered:", res.data);
      navigate("/login");
    } catch (err) {
      console.error("Error registering:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={onChange}
        placeholder="Name"
        required
      />
      <input
        type="email"
        name="email"
        value={email}
        onChange={onChange}
        placeholder="Email"
        required
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={onChange}
        placeholder="Password"
        required
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterPage;
