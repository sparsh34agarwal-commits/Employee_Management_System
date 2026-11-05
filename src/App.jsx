import React, { useEffect, useState } from "react";
import Login_page from "./components/Login/Login_page";
import Admin_page from "./components/Admin/Admin_page";
import Employee_page from "./components/Employee/Employee_page";
import { getlocalstorage, setlocalstorage } from "./utils/LocalStorage";
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { authcontext } from "./context/AuthProvider";

const App = () => {
  const userdata = useContext(authcontext);
  console.log(userdata);

  useEffect(() => {
    setlocalstorage();
  }, []);

  const [User, setUser] = useState(localStorage.getItem("Selected"));

  const handlelogin = (email, pass) => {
    if (
      userdata &&
      userdata.admin.find((e) => {
        if (e.email == email && e.password == pass) return true;
      })
    ) {
      console.log("this is admin");
      localStorage.setItem("Selected", "admin");
      setUser(localStorage.getItem("Selected"));
    } else if (
      userdata &&
      userdata.employees.find((e) => {
        if (e.email == email && e.password == pass) return true;
      })
    ) {
      console.log("this is emp");
      localStorage.setItem("Selected", "employee");
      setUser(localStorage.getItem("Selected"));
    } else alert("Invalid Credentials");
  };

  return (
    <div>
      {!User ? (
        <Login_page handlelogin={handlelogin} />
      ) : User == "admin" ? (
        <Admin_page />
      ) : (
        <Employee_page />
      )}
    </div>
  );
};

export default App;
