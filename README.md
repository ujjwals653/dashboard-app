# Dashy - Dashboard Application

Dashy is a modern dashboard application built with Next.js and Syncfusion components. It provides a variety of features, including charts, data grids, and interactive UI elements, to help users visualize and manage data effectively.

## Features

- **Interactive Charts**: Line, bar, pie, and area charts for data visualization.
- **Data Management**: Tables and grids for organizing and displaying data.
- **Customizable UI**: Themes, color pickers, and layout options.
- **Real-Time Updates**: Dynamic data rendering for a seamless experience.

## Tech Stack

- **Frontend**: React, TypeScript
- **UI Components**: Syncfusion
- **Icons**: React Icons

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v16 or higher)
- npm or yarn
- A valid Syncfusion license key

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/dashboard-app.git
   cd dashboard-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the root directory and add your Syncfusion license key:

   ```env
   NEXT_PUBLIC_EJ2_LICENSE_KEY=your-license-key
   ```

## Usage

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:3000`.

3. Explore the dashboard and its features.

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the application for production.
- `npm run lint`: Run ESLint to check for code quality issues.

## Folder Structure

```
dashboard-app/
├── app/
│   ├── context/         # Context API for state management
│   ├── data/            # Dummy data for the application
│   ├── ui/              # UI components and skeletons
│   ├── layout.tsx       # Root layout component
├── public/              # Static assets
├── .env                 # Environment variables
├── eslint.config.mjs    # ESLint configuration
├── README.md            # Project documentation
```

## Acknowledgments

- [Syncfusion](https://www.syncfusion.com/) for their powerful UI components.
- [React Icons](https://react-icons.github.io/react-icons/) for the icon library.

Feel free to contribute to this project by submitting issues or pull requests!
