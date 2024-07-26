import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    loading: true,
    user: null,
  });

  useEffect(() => {
    if (auth.token) {
      const fetchProfile = async () => {
        try {
          const response = await axios.get('/api/auth/profile', {
            headers: { Authorization: auth.token },
          });
          setAuth({ ...auth, isAuthenticated: true, loading: false, user: response.data });
        } catch (error) {
          setAuth({ ...auth, isAuthenticated: false, loading: false });
        }
      };
      fetchProfile();
    } else {
      setAuth({ ...auth, loading: false });
    }
  }, [auth.token]);

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};
