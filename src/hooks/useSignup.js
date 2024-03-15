import { useState } from "react";

export default function useSignup () {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const url = "http://localhost:4000/api/user/signup";

  const handleSignup = async ( email, password, firstName, lastName, phoneNumber ) => {
    setIsLoading(true);
    setError(null);
    
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({email, password, firstName, lastName, phoneNumber}),
    });

    const user = await response.json();
    console.log(user);
    console.log(response);

    if (!response.ok) {
        console.log("useSignup:21:", user.error);
      setError(user.error);
      setIsLoading(false);
      return error;
    }

    localStorage.setItem("token", user.token);
    localStorage.setItem("user", JSON.stringify(user));
    setIsLoading(false);
  };

  return { handleSignup, isLoading, error };
}