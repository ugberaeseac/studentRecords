# Student Records API

This is a RESTful API built with **Node.js**, **Express**, and **MongoDB** to manage student records — enabling create, read, update, delete (CRUD) operations and count student records.

---

## Project Structure

```
studentRecords/
│
├── src/
│   ├── controller/
│   │   └── student.controller.js
│   ├── models/
│   │   └── student.schema.js
│   ├── routes/
│   │   └── student.routes.js
│   └── index.js
│
├── package.json
└── README.md
```

---

## Setup & Run Instructions

### Prerequisites

- Node.js (v14 or above)
- MongoDB (running locally on `mongodb://localhost:27017`)
- Postman (for API testing)

---

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <https://github.com/ugberaeseac/studentRecords.git>
   cd studentRecords
   ```

2. **Install project dependencies**
   ```bash
   npm install
   ```

3. **Start MongoDB**

   - On WSL/Linux:
     ```bash
     sudo service mongod start
     ```

   - Make sure MongoDB is accessible on `mongodb://localhost:27017`.

4. **Run the application**
   ```bash
   npm run dev
   ```

   The server should now be running on `http://localhost:5000`.

---

## API Endpoints

| Method | Endpoint               | Description                       |
|--------|------------------------|-----------------------------------|
| POST   | `/api/students`        | Create a new student record       |
| GET    | `/api/students`        | Retrieve all student records      |
| GET    | `/api/students/count`  | Get total number of students      |
| PUT    | `/api/students/:_id`   | Update an existing student        |
| DELETE | `/api/students/:_id`   | Delete a student by ID            |

---

## How to Import and Execute Postman Collection

1. Open [Postman](https://www.postman.com/)
2. Click **Import** → Choose **Link**
3. Paste this URL:
   ```
   https://documenter.getpostman.com/view/45172601/2sB34ZrjUb
   ```
4. Click **Continue** → **Import**
5. Test all endpoints by running the collection.

> Make sure your MongoDB server and Express app are running before sending requests.

---

## Example Request Body (POST or PUT)

```json
{
  "firstName": "Charles",
  "lastName": "Demo",
  "email": "charles@demo.com",
  "age": 10
}
```

---

## Assumptions & Design Decisions

- **Email field must be unique**: A student cannot be created with an email already in use.
- **Validation**: All fields are required. Age must be a number.
- **No Authentication**: This is a public API for demonstration purposes.
- **Error Handling**: Standardized HTTP status codes and error messages returned.
- **MongoDB**: Expected to run locally at `localhost:27017`.

---

## Sample Success Response

```json
{
  "message": "A new student record has been created",
  "data": {
    "_id": "60f8f2e16f1c4b3f98a5f19a",
    "firstName": "Charles",
    "lastName": "Demo",
    "email": "charles@demo.com",
    "age": 10,
    "createdAt": "2025-07-01T16:29:14.088Z",
    "updatedAt": "2025-07-01T16:29:14.088Z"
  }
}
```

---

## Contact

If you encounter any issues or have suggestions for improvement, feel free to open an issue or reach out.

---
