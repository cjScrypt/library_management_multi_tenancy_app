# 📚 Library Management Multi-Tenancy App

<h2>API Reference</h2>
<code>POST /schools/register</code><br>
<p>Register a new school.</p>


* Request Body
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
* Response Body
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
<code>GET /schools/:id</code>
<p>Retrieve details of a school by ID.</p>

* Response Body
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
<code>GET /schools/:id/students</code>
<p>Retrieve all students associated with a specific school.</p>

* Response Body
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