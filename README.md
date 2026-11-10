# WorkFlow EMS — Employee Management System

A role-based Employee Management System built with React. The application provides separate dashboards for **Admins** and **Employees**, with a simple task-assignment and task-review workflow.

## Live Demo

**Website:** [Open WorkFlow EMS](https://ems-sparsh.vercel.app)


You can explore the application using the public demo credentials below. No registration is required.

## Demo Login Credentials

### Admin account

| Email | Password |
|---|---|
| `admin0@me.com` | `admin0` |

### Employee accounts

| Employee | Email | Password |
|---|---|---|
| John Doe | `employee5@gmail.com` | `emp5` |
| Alex Johnson | `employee1@gmail.com` | `emp1` |
| Michael Smith | `employee2@gmail.com` | `emp2` |

**How to log in:** Open the live website, enter any one of the email/password combinations above, and select the corresponding dashboard. Use an Admin account to manage tasks or an Employee account to work on assigned tasks.

These are intentionally public demo credentials. They are stored in the frontend source code and are **not real or secure accounts**. Please do not enter personal, confidential, or sensitive information into this demo.

## Features

### Admin dashboard

- View an overview of tasks, employees, pending reviews, and completed tasks.
- View tasks assigned across the team.
- Filter tasks by status: All, Active, Submitted, Accepted, and Rejected.
- Assign a new task to an employee.
- Set a task title, description, assignment date, deadline, category, and priority.
- Review submitted tasks and accept or reject them.
- Log out of the Admin dashboard.

### Employee dashboard

- View a personal task overview with Active, Submitted, Accepted, and Rejected counts.
- View tasks assigned to the logged-in employee.
- Filter tasks by status.
- Submit an active task for Admin review.
- Cancel a submission while it is awaiting review.
- View whether a task has been accepted or rejected.
- Log out of the Employee dashboard.

## Task Workflow

1. An Admin assigns a task to an employee.
2. The task appears in that employee's dashboard with its details, priority, assignment date, and deadline.
3. The Employee completes the task and selects **Submit Task**.
4. The task moves to **Submitted** and appears in the Admin's pending reviews.
5. The Admin reviews the submission and either accepts or rejects it.
6. The updated status is reflected in the employee's task list.

## Tech Stack

- **React** — component-based user interface
- **Vite** — development server and build tool
- **React Router DOM** — client-side routing between login and role-based dashboards
- **Tailwind CSS** — styling and responsive layouts
- **Browser Local Storage** — demo credentials, task data, and selected login session

## Run Locally

### Prerequisites

- [Node.js](https://nodejs.org/) (which includes npm)
- Git

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sparsh34agarwal-commits/Employee_Management_System.git
   ```

2. Move into the project directory:

   ```bash
   cd Employee_Management_System
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL printed in your terminal (Vite usually uses `http://localhost:5173`).

### Production build

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Important Notes About This Demo

- **No backend or database is connected yet.** The application currently uses browser Local Storage to keep its demo data.
- **Data is browser-specific.** Changes made by one visitor are not synced to another visitor's browser or device. Opening the site in a different browser or browser profile starts with its own demo data.
- **Shared browser state:** People using the same browser profile on the same website share that browser's saved demo data. For example, an Admin's task assignments or review decisions may still be visible when someone logs in as an Employee in that same browser.
- **Changes persist locally.** Refreshing the page does not normally reset task changes. To restore the original sample data, clear this website's Local Storage/site data in your browser and reload the page. The app will seed the sample accounts and tasks again.
- **Demo authentication only.** Login checks credentials stored in the frontend. This is suitable for demonstrating the UI and workflow, but it is not production-grade authentication or authorization. Do not reuse these credentials elsewhere.

A backend, database, and proper authentication/authorization can be added in a future version to support shared data and real user accounts.

## Repository

[GitHub — Employee Management System](https://github.com/sparsh34agarwal-commits/Employee_Management_System)

---

Built as a learning project to practice React, routing, state management, and browser-based data persistence.
