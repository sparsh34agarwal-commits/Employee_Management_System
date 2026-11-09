import { useEffect, useState, useContext } from "react";
import { setlocalstorage } from "./utils/LocalStorage";
import { authcontext } from "./context/AuthProvider";
import Login_page from "./pages/Login/Login_page";
import Admin_page from "./pages/Admin/Admin_page";
import Employee_page from "./pages/Employee/Employee_page";
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";


const App = () => {
  const userdata = useContext(authcontext);
  console.log(userdata);
  const navigate=useNavigate();

  useEffect(() => {
    setlocalstorage();
  }, []);

  const [User, setUser] = useState(() => {
  const selected = localStorage.getItem("Selected");

  return selected ? JSON.parse(selected).role : null;
});

if (!userdata) {
    return <div>Loading...</div>;
  }


  const handlelogin = (email, pass) => {
    const admins = JSON.parse(localStorage.getItem("admin")) || [];
    const employees = JSON.parse(localStorage.getItem("employee"))||[];


    const admin = admins.find((e) => 
      e.email == email && e.password == pass
    );
    const employee = employees.find((e) => 
      e.email == email && e.password == pass
    );

    if (admin) {
      console.log("this is admin");
      localStorage.setItem("Selected", JSON.stringify({role:"admin", sdata:admin}));
      setUser(JSON.parse(localStorage.getItem("Selected")).role);
      navigate("/admin")
    }
     else if (employee) {
      console.log("this is emp");
      localStorage.setItem("Selected", JSON.stringify({role:"employee", sdata:employee}));
      setUser(JSON.parse(localStorage.getItem("Selected")).role);
      navigate("/employee");
    } 
    else alert("Invalid Credentials");
  };

  const handleLogout = () => {

    localStorage.removeItem("Selected");

    setUser(null);

    navigate("/login");
  };

  return (
    <div>
      {/* {!User ? (
        <Login_page handlelogin={handlelogin} />
      ) : User == "admin" ? (
        <Admin_page />
      ) : (
        <Employee_page />
      )} */}
      <Routes>
        <Route path="/" element={
          <Navigate to={
            User==="admin" ? "/admin" : User==="employee" ? "/employee" : "/login"
          } replace/>
        }/>

        <Route path="/login" element={
          !User ? <Login_page handlelogin={handlelogin}/> : <Navigate to={
            User==="admin" ? "/admin" : "/employee"
          }replace/>
        }/>

        <Route path="/admin" element={
          User==="admin" ? <Admin_page handleLogout={handleLogout}/> : <Navigate to={"/login"} replace/>
        }/>

        <Route
        path="/employee"
        element={
          User === "employee" ? 
            <Employee_page handleLogout={handleLogout}/> : <Navigate to="/login" replace />
          
        }
      />
      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />
      </Routes>
    </div>
  );
};

export default App;
