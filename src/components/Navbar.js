import { Link, useNavigate, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";


function Navbar() {  
  const [darkMode, setDarkMode] = useState(false); 
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/");
  };

  if (token) {
    return (
        <>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <button onClick={handleLogout}>Log out</button>
          </li>
          <li>
              <button onClick={toggleDarkMode}>Dark mode</button>
          </li>
        </ul>
      </nav>
      <Outlet />
        </>
    );
  } else {
    return (
      <>
        <nav className="navbar">
          <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/login">Log in</Link>
            </li>
            <li>
              <button onClick={toggleDarkMode}>Dark mode</button>
            </li>
          </ul>
        </nav>
      <Outlet />
    </>
    );
  }
};

export default Navbar;