# Accessibility Baseline & Repository Architecture Audit

## Project Overview

This project focuses on auditing the accessibility of a real public-service website and developing a maintainable full-stack application foundation.

The selected website for the accessibility audit is the **National Portal of India**.

Website: https://www.india.gov.in/

The project also demonstrates an accessible Service Directory application using React, Node.js, and Express.js.

## Project Objectives

- Perform an accessibility audit using Google Lighthouse.
- Conduct keyboard-only navigation testing.
- Identify and document five accessibility issues.
- Capture screenshots as audit evidence.
- Design a maintainable full-stack monorepo architecture.
- Develop a React frontend and Express backend.
- Implement and test a service directory API.
- Establish frontend, backend, documentation, and testing boundaries.

## Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Semantic structure |
| CSS3 | Styling and responsive design |
| JavaScript | Application functionality |
| React | Frontend development |
| Vite | Frontend development server and build tool |
| Node.js | Backend runtime |
| Express.js | Backend framework |
| CORS | Frontend-backend communication |
| Jest | Backend testing |
| Supertest | API testing |
| Vitest | Frontend testing |
| React Testing Library | Component testing |
| Google Lighthouse | Accessibility auditing |
| Git & GitHub | Version control |

## Accessibility Audit Results

**Audited Website:** National Portal of India

**Lighthouse Accessibility Score:** 85/100

### Identified Accessibility Issues

1. ARIA roles are not contained by their required parent elements.
2. ARIA-hidden elements contain focusable descendants.
3. Background and foreground colors have insufficient contrast.
4. List items are not contained within appropriate parent elements.
5. Document does not have a main landmark.

Detailed findings, recommendations, and audit evidence are documented in:

`docs/accessibility-audit.md`

## Keyboard Navigation Testing

Initial keyboard-only testing was performed using the Tab key.

The tested elements were reachable during the initial navigation check. Further testing of Shift+Tab, Enter, Space, and visible focus indicators remains to be completed.

## Project Structure

```text
Accessibility-Architecture-Audit/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── test/
│   │   │   └── setup.js
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── App.test.jsx
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── src/
│   │   └── server.js
│   ├── tests/
│   │   └── services.test.js
│   ├── package.json
│   └── package-lock.json
│
├── docs/
│   ├── screenshots/
│   └── accessibility-audit.md
│
├── tests/
│
├── README.md
└── .gitignore
```

## Architecture Overview

### Frontend

The client application uses React and Vite to provide an accessible service directory.

Features include:
- Service listing.
- Search and filtering.
- Semantic HTML structure.
- Accessible navigation.
- Responsive styling.
- Visible keyboard focus indicators.

### Backend

The server application uses Node.js and Express.js to handle API requests.

The backend provides:

`GET /api/services`

This endpoint returns four service categories:

1. Government Services
2. Education Services
3. Healthcare Services
4. Public Information

### Frontend-Backend Integration

The React frontend communicates with the Express backend through the REST API.

The backend runs on port 5000, and the frontend runs on port 5173.

CORS middleware enables communication between the two applications during local development.

### Documentation

The `docs` directory contains accessibility findings and screenshots captured during the audit.

### Testing

Backend testing uses Jest and Supertest.

Frontend testing uses Vitest and React Testing Library.

## First Vertical Feature Slice: Accessible Service Directory

The first vertical feature slice has been implemented successfully.

It includes:

- React-based service listing page.
- Express API for retrieving service information.
- Search and filtering functionality.
- Semantic HTML and accessible navigation.
- Keyboard-friendly interactive elements.
- Automated frontend and backend tests.

## Local Setup

### Prerequisites

- Node.js
- npm
- Visual Studio Code
- Git

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Start the Backend

Open a terminal:

```bash
cd