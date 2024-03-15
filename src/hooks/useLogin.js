import { useState } from "react";

export default function useLogin() {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const url = "http://localhost:4000/api/user/login";

    const handleLogin = async (object) => {
        setIsLoading(true);
        setError(null);
        const response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(object),
        });
        const user = await response.json();
        console.log(user)
    
        if (!response.ok) {
          setError(user.error);
          setIsLoading(false);
          return error;
        }
    
        localStorage.setItem("token", user.token);
        localStorage.setItem("user", JSON.stringify(user));
        setIsLoading(false);
      };

      return { handleLogin, isLoading, error };
}