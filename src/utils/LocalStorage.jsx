
const creds = [
  {
    id: 0,
    name: "John Doe",
    email: "employee5@gmail.com",
    password: "emp5",
    role: "employee",

    tasks: [
      {
        id: 1,
        taskTitle: "Responsive Design",
        taskDescription: "Make the application responsive for mobile and tablet devices.",
        priority: "High",
        status: "active",
        assignedDate: "2026-10-08",
        deadline: "2026-10-15",
        category: "Frontend"
      },
      {
        id: 2,
        taskTitle: "Add Animations",
        taskDescription: "Add smooth animations and transitions to the application.",
        priority: "Medium",
        status: "submitted",
        assignedDate: "2026-10-10",
        deadline: "2026-10-18",
        category: "Frontend"
      },
      {
        id: 3,
        taskTitle: "Create Login Page",
        taskDescription: "Build and style the employee login page.",
        priority: "Low",
        status: "accepted",
        assignedDate: "2026-10-01",
        deadline: "2026-10-07",
        category: "Frontend"
      }
    ]
  },

  {
    id: 1,
    name: "Alex Johnson",
    email: "employee1@gmail.com",
    password: "emp1",
    role: "employee",

    tasks: [
      {
        id: 1,
        taskTitle: "Design Landing Page",
        taskDescription: "Create the UI design for the company's new landing page.",
        priority: "High",
        status: "active",
        assignedDate: "2026-10-07",
        deadline: "2026-10-14",
        category: "Design"
      },
      {
        id: 2,
        taskTitle: "Update Navbar",
        taskDescription: "Update the navigation bar with the new menu items.",
        priority: "Medium",
        status: "submitted",
        assignedDate: "2026-10-08",
        deadline: "2026-10-16",
        category: "Development"
      },
      {
        id: 3,
        taskTitle: "Fix Login UI",
        taskDescription: "Fix alignment and responsiveness issues on the login page.",
        priority: "High",
        status: "accepted",
        assignedDate: "2026-10-05",
        deadline: "2026-10-09",
        category: "Development"
      }
    ]
  },

  {
    id: 2,
    name: "Michael Smith",
    email: "employee2@gmail.com",
    password: "emp2",
    role: "employee",

    tasks: [
      {
        id: 1,
        taskTitle: "Build Dashboard",
        taskDescription: "Develop the main employee dashboard interface.",
        priority: "High",
        status: "active",
        assignedDate: "2026-10-07",
        deadline: "2026-10-17",
        category: "Development"
      },
      {
        id: 2,
        taskTitle: "Create User Cards",
        taskDescription: "Create reusable cards for displaying user information.",
        priority: "Medium",
        status: "accepted",
        assignedDate: "2026-10-04",
        deadline: "2026-10-10",
        category: "Development"
      },
      {
        id: 3,
        taskTitle: "API Integration",
        taskDescription: "Integrate the employee API with the dashboard.",
        priority: "High",
        status: "rejected",
        assignedDate: "2026-10-03",
        deadline: "2026-10-08",
        category: "Backend"
      }
    ]
  },
  {
    "id": 100,
    "email": "admin0@me.com",
    "password": "admin0",
    "role": "admin"
    },
    {
    "id": 101,
    "email": "admin1@me.com",
    "password": "admin1",
    "role": "admin"
    },
    {
    "id": 102,
    "email": "admin2@me.com",
    "password": "admin2",
    "role": "admin"
    }     
];

  export const setlocalstorage=()=>{

    // Only seed localStorage if data doesn't already exist,
    // so employee changes (like marking tasks complete) are preserved across sessions
    if (!localStorage.getItem("employee")) {
            localStorage.setItem("employee", JSON.stringify(creds.filter((e,idx)=>{
                if(e.role=="employee"){
                    return e;
                }
            })))
    }

    if (!localStorage.getItem("admin")) {
            localStorage.setItem("admin", JSON.stringify(creds.filter((e,idx)=>{
                if(e.role=="admin"){
                    return e;
                }
            })))
    }
  }

  export const getlocalstorage=()=>{
    const datae=JSON.parse(localStorage.getItem("employee"));
    const dataa=JSON.parse(localStorage.getItem("admin"));
    
    return {employee: datae, admin: dataa};
    
  }