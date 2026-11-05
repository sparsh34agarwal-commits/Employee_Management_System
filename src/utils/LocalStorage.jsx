const creds=[
    {
      "id": 0,
      "email": "employee5@gmail.com",
      "password": "emp5",
      "role": "employee",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Responsive Design",
          "taskDescription": "Make the application responsive for mobile and tablet devices.",
          "taskDate": "2026-10-08",
          "category": "Frontend"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Add Animations",
          "taskDescription": "Add smooth animations and transitions to the application.",
          "taskDate": "2026-10-10",
          "category": "Frontend"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Create Login Page",
          "taskDescription": "Build and style the employee login page.",
          "taskDate": "2026-10-04",
          "category": "Frontend"
        }
      ]
    },
    {
      "id": 1,
      "email": "employee1@gmail.com",
      "password": "emp1",
      "role": "employee",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Design Landing Page",
          "taskDescription": "Create the UI design for the company's new landing page.",
          "taskDate": "2026-10-07",
          "category": "Design"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Update Navbar",
          "taskDescription": "Update the navigation bar with the new menu items.",
          "taskDate": "2026-10-08",
          "category": "Development"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Fix Login UI",
          "taskDescription": "Fix alignment and responsiveness issues on the login page.",
          "taskDate": "2026-10-05",
          "category": "Development"
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@gmail.com",
      "password": "emp2",
      "role": "employee",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Build Dashboard",
          "taskDescription": "Develop the main employee dashboard interface.",
          "taskDate": "2026-10-07",
          "category": "Development"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Create User Cards",
          "taskDescription": "Create reusable cards for displaying user information.",
          "taskDate": "2026-10-04",
          "category": "Development"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "API Integration",
          "taskDescription": "Integrate the employee API with the dashboard.",
          "taskDate": "2026-10-03",
          "category": "Backend"
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@gmail.com",
      "password": "emp3",
      "role": "employee",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Write Documentation",
          "taskDescription": "Prepare documentation for the new application features.",
          "taskDate": "2026-10-09",
          "category": "Documentation"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Test Dashboard",
          "taskDescription": "Test the dashboard for bugs and responsiveness.",
          "taskDate": "2026-10-08",
          "category": "Testing"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Fix Button Bugs",
          "taskDescription": "Resolve click and styling issues with dashboard buttons.",
          "taskDate": "2026-10-05",
          "category": "Bug Fix"
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@gmail.com",
      "password": "emp4",
      "role": "employee",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Database Setup",
          "taskDescription": "Set up the database structure for employee records.",
          "taskDate": "2026-10-07",
          "category": "Backend"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Create API Routes",
          "taskDescription": "Create REST API routes for employee operations.",
          "taskDate": "2026-10-09",
          "category": "Backend"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Setup Project",
          "taskDescription": "Set up the initial project structure and dependencies.",
          "taskDate": "2026-10-02",
          "category": "Development"
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
  ]

  export const setlocalstorage=()=>{


            localStorage.setItem("employee", JSON.stringify(creds.filter((e,idx)=>{
                if(e.role=="employee"){
                    return e;
                }
            })))

            localStorage.setItem("admin", JSON.stringify(creds.filter((e,idx)=>{
                if(e.role=="admin"){
                    return e;
                }
            })))
  }

  export const getlocalstorage=()=>{
    const datae=JSON.parse(localStorage.getItem("employee"));
    const dataa=JSON.parse(localStorage.getItem("admin"));
    
    return {employees: datae, admin: dataa};
    
  }