# task-management
Lab 06 of task management.

# Task Management Dashboard
This is a task management application built with React, Vite, and Bootstrap. It allows users to add, edit, delete, and filter tasks dynamically. The application leverages React’s state management for real-time updates and a responsive UI styled with Bootstrap.

## Features

- **Dynamic Task Management:** Add, edit, delete, and mark tasks as complete.
- **Task Filtering:** Easily filter tasks by category.
- **Real-Time Updates:** Changes reflect immediately without page reloads.
- **Interactive UI:** Clean and responsive design built with React and Bootstrap.
- **User-Friendly Interface:** Simple, intuitive design for effective task management.

## Getting Started

## Live Demo

Check out the live preview on CodeSandbox: [CodeSandbox Live Preview](https://codesandbox.io/p/sandbox/task-management-y8wrfc)

### Prerequisites

- **Node.js** (version 14 or above)
- **npm**

### Installation

1. **Clone the Repository:**

   git clone https://github.com/bitvalo34/task-management
   cd task-management

Install Dependencies:

Install Vite as a Dev Dependency:

npm install --save-dev vite

Project Structure
Make sure your project has the following structure:

/task-management
├── index.html         # Entry point HTML file
├── package.json       # Project configuration and scripts
├── /src
│   ├── index.js       # React entry point (renders the App)
│   ├── App.js         # Main App component
│   └── components/    # React components (e.g., TaskDashboard)
└── /node_modules      # Installed dependencies

Running the Application with Vite
Start the Development Server:

Run the following command to launch the Vite development server:

npm run dev

You should see output similar to:

VITE v6.x  ready in 500ms
➜  Local:   http://localhost:5173/
➜  Network: http://192.168.x.x:5173/

Open Your Browser:

Navigate to http://localhost:5173/ to view the application.

Make sure your `package.json` includes the following scripts:

"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}