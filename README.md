# 📚 Library Management Multi-Tenancy App

<p>This is a Library Management System that uses multi-tenancy to dynamically create schemas upon school registration.</p>

## How to run

- Clone the repository

  ```bash
  git clone https://github.com/cjScrypt/library_management_multi_tenancy_app
  ```

- Install dependencies

  ```bash
  npm install
  # or
  yarn install
  ```

- Set environment variables

  ```vim
  DATABASE_URL=""
  ```

- Run the server

  ```bash
  npm run dev
  ```

Server will start on http://localhost:3000.
<br>

<h2>API Reference</h2>
<h4><code>POST /schools/register</code></h4><br>
<p>Register a new school.</p>

- Request Body
  ```json
  {
    "name": "Greenfield High",
    "address": "123 Main St",
    "city": "Springfield",
    "state": "IL",
    "zip": "62704",
    "phone": "123-456-7890",
    "email": "info@greenfield.edu"
  }
  ```
- Response Body

  ```json
  {
    "data": {
      "id": "9cf986ec-54f0-49f1-9c8e-3b4ee41e85f8",
      "name": "Greenfield High",
      "address": "123 Main St",
      "city": "Springfield",
      "state": "IL",
      "zip": "62704",
      "phone": "123-456-7890",
      "email": "info@greenfield.edu"
    }
  }
  ```

  <br>
  <h4><code>GET /schools/:id</code></h4>
  <p>Retrieve details of a school by ID.</p>

- Response Body
  ```json
  {
    "data": {
      "id": "9cf986ec-54f0-49f1-9c8e-3b4ee41e85f8",
      "name": "Greenfield High",
      "address": "123 Main St",
      "city": "Springfield",
      "state": "IL",
      "zip": "62704",
      "phone": "123-456-7890",
      "email": "info@greenfield.edu"
    }
  }
  ```

<br>
<h4><code>GET /schools/:id/students</code></h4>
<p>Retrieve all students associated with a specific school.</p>

- Response Body
  ```json
  {
    "data": [
      {
        "id": "student_1",
        "name": "Jane Doe",
        "email": "jane@example.com"
      },
      {
        "id": "student_2",
        "name": "John Smith",
        "email": "john@example.com"
      }
    ]
  }
  ```
