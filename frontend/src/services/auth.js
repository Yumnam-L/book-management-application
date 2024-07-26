import api from "./api";

export const login = async (email, password) => {
  const response = await api.post("/auth/login", { email, password });
  localStorage.setItem("token", response.data.token);
  return response.data;
};

export const register = async (name, email, password) => {
  const response = await api.post("/auth/register", { name, email, password });
  return response.data;
};

export const getProfile = async () => {
  const token = localStorage.getItem("token");
  const response = await api.get("/auth/profile", {
    headers: { Authorization: token },
  });
  return response.data;
};
