# HNG12 Fun Fact API Task

### Project Description
This is an API that takes a number and returns interesting mathematical properties about it, along with a fun fact.

The API is built using Node.js with Express.js and is publicly accessible.

<hr />

### Setup Instructions

Prerequisites

Ensure you have the following installed:
- Node.js (v16 or later)
- Git

#### Clone the Repository
```sh
git clone https://github.com/harrylever/hng-12-stage-one-backend-task.git
cd hng-12-stage-one-backend-task
```

#### Install dependencies
```sh
pnpm install
```

#### Run the server locally
```sh
pnpm run start
```
The server will start on http://localhost:3000

#### Run in Development Mode
For hot-reloading during development:
```sh
pnpm run dev
```

### API Documentation
#### Base URL
- Deployed URL: `https://hng-stage-one-backend-task-production.up.railway.app/`
- Local URL: `http://localhost:3000/`

## GET /api/classify-number?number=<your_preferred_number>

#### Response Format
Status: 200 OK
```json
{
  "number": 371,
  "is_prime": false,
  "is_perfect": false,
  "properties": [
    "armstrong",
    "odd"
  ],
  "digit_sum": 11,
  "fun_fact": "371 is a narcissistic number."
}
```

#### Example Usage
```sh
curl -X GET https://hng-stage-one-backend-task-production.up.railway.app/api/classify-number?number=371
```

#### Or visit in your browser:
[https://hng-stage-one-backend-task-production.up.railway.app/api/classify-number?number=371](https://hng-stage-one-backend-task-production.up.railway.app/api/classify-number?number=371)

<hr />

## Technology Stack
- Node.js (Runtime Environment)
- Express.js (Web Framework)
- Cors (Cross-Origin Resource Sharing)
- Helmet (Security Enhancements)
- Morgan (Logging)
- Compression (Response Compression)
- Body-parser (Request Body Parsing)
- Winston (Http Request/Response Logging)

<hr />

## Author
- Ukanah Dean Onesi
- GitHub: [harrylever](https://www.github.com/harrylever)
