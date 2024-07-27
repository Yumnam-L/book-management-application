// AuthContext.js
import React, { createContext, useState, useEffect } from "react";
import api from "../services/api";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          console.log("inside authcontext try block loaduser");
          const response = await api.get(
            "/profile"
            //   , {
            //   headers: {
            //     Authorization: `Bearer ${token}`,
            //   },
            // }
          );
          setUser(response.data);
        } catch (error) {
          console.error("Error fetching profile:", error);
        }
      }
      setLoading(false);
    };
    loadUser();
  }, []);

  const login = async (email, password) => {
    try {
      const response = await api.post("/auth/login", { email, password });
      const token = response.data.token;
      localStorage.setItem("token", token);
      console.log("token: ", token);
      const userResponse = await api.get(
        "/profile"
        //   , {
        //   headers: {
        //     Authorization: `Bearer ${token}`,
        //   },
        // }
      );
      setUser(userResponse.data);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
