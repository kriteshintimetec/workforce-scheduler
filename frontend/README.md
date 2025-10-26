# Workforce Scheduler — Frontend

A React-based frontend application for managing workforce scheduling and resource allocation.

## Features

- Interactive Dashboard with real-time statistics
- Upcoming Shifts Management
- Resource Allocation Overview
- Multi-step Schedule Creation
- Responsive Material-UI Design

## Tech Stack

- React 18
- Material-UI (MUI)
- React Router
- Node.js (Development Environment)

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/kriteshintimetec/workforce-scheduler.git
   ```

2. Navigate to frontend directory:
   ```bash
   cd workforce-scheduler/frontend
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start development server:
   ```bash
   npm start
   ```

The application will start on `http://localhost:3000`

## Project Structure

```
frontend/
  ├── src/
  │   ├── components/    # Reusable UI components
  │   │   ├── CreateScheduleForm.js
  │   │   └── Navigation.js
  │   ├── pages/        # Main application pages
  │   │   ├── Dashboard.js
  │   │   ├── Resources.js
  │   │   ├── Schedule.js
  │   │   └── Settings.js
  │   ├── App.js        # Main application component
  │   └── index.js      # Application entry point
  └── public/           # Static assets
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from create-react-app

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
