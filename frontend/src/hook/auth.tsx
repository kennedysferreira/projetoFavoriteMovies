import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { toast } from "sonner";

export const AuthContext = createContext({} as any);

function AuthProvider({ children }: any) {
  const [data, setData] = useState({} as any);

  async function signIn({ email, password }: any) {
    try {
      const response = await api.post("/sessions", {
        email,
        password,
      });

      const { user, token } = response.data;

      localStorage.setItem("@favoriteMovies:user", JSON.stringify(user));
      localStorage.setItem("@favoriteMovies:token", token);
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setData({ user, token });
    } catch (error: any) {
      toast.error("Incorrect email or password");

      return;
    }
  }

  async function signOut() {
    localStorage.removeItem("@favoriteMovies:user");
    localStorage.removeItem("@favoriteMovies:token");
    delete api.defaults.headers.common["Authorization"];
    setData({} as any);
  }

  async function updateProfile({ userUpdated, avatarFile }: any) {
    try {
      if (avatarFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append("avatar", avatarFile);

        const { data } = await api.patch("/users", fileUploadForm);
        userUpdated.avatar = data.avatar;
          
      }

      await api.put("/users", userUpdated);
      localStorage.setItem("@favoriteMovies:user", JSON.stringify(userUpdated));
      setData({ user: data.user, token: data.token });

      toast.success("Profile updated");
    } catch (error) {
      console.log(error);
      toast.error("Error updating profile");
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("@favoriteMovies:token");
    const user = localStorage.getItem("@favoriteMovies:user");

    if (token && user) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setData({ token, user: JSON.parse(user) });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, updateProfile }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
