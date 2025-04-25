# 🖥️ Windows Forms App Backend Server

This repository contains the **backend server** for a Windows Forms Desktop Application, built using **Node.js** and **TypeScript** with **Express**. It provides simple REST APIs for submitting, reading, and deleting user form data.

> 🔗 **Looking for the frontend?** Check out our Windows Forms Desktop Application: [https://github.com/fatima-amani/Windows-Forms-Desktop-App](https://github.com/fatima-amani/Windows-Forms-Desktop-App)

## 🚀 Features

- ✅ **Submit Form Data** to a local JSON file
- 📖 **Read Entries** from the database (with index-based access)
- ❌ **Delete Submissions** by index
- 🔁 Simple **ping** endpoint for health check

## 📦 Prerequisites

Make sure you have the following installed:
- 🟢 [Node.js](https://nodejs.org/)
- 📦 npm (Node Package Manager)

## 🔧 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/fatima-amani/Windows-Forms-App-Backend-Server
   ```

2. **Navigate into the project folder:**
   ```bash
   cd Windows-Forms-App-Backend-Server
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

## ▶️ Running the Server

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Start the server:**
   ```bash
   npm start
   ```

Server runs at: http://localhost:3000

## 🌐 API Endpoints

### ✅ GET /ping
Check if the server is running.

**Response:**
```json
"true"
```

### 📤 POST /submit
Submit form data.

**Request Body:**
```json
{
  "name": "Fatima Amani",
  "email": "fatima@example.com",
  "phone": "1234567890",
  "github_link": "https://github.com/fatima-amani",
  "stopwatch_time": "00:01:23"
}
```

**Response:**
```json
{ "success": true }
```

### 📥 GET /read?index=0
Fetch a submission by index.

**Example:**
```
GET /read?index=0
```

**Response:**
```json
{
  "name": "Fatima Amani",
  "email": "fatima@example.com",
  "phone": "1234567890",
  "github_link": "https://github.com/fatima-amani",
  "stopwatch_time": "00:01:23"
}
```

If the index is invalid or no more submissions:
```json
{ "error": "No more Submissions to Display" }
```
or
```json
{ "error": "This is last Submission" }
```

### 🗑️ DELETE /del?index=0
Delete a submission by index.

**Response:**
```json
{ "success": true, "message": "Submission deleted successfully" }
```

If index is invalid:
```json
{ "error": "Submission not found" }
```

## 🗃️ Data Storage

Submissions are stored in a local JSON file:
```
db.json
```

Sample format:
```json
[
  {
    "name": "Fatima Amani",
    "email": "fatima@example.com",
    "phone": "1234567890",
    "github_link": "https://github.com/fatima-amani",
    "stopwatch_time": "00:01:23"
  }
]
```

## 👩‍💻 Author

**Fatima Amani**  : [@fatima-amani](https://github.com/fatima-amani)

## 🌟 Show Your Support

If you found this helpful, give the repo a ⭐ on GitHub!
