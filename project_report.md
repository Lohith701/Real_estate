# Project Report: Blue Craft Properties Website

## 1. Technical Stack

This project is a modern Single Page Application (SPA) built with the following technologies:

### Core Framework & Build Tool
- **React (v19)**: The core UI library for building the component-based user interface.
- **Vite (v7)**: Next-generation frontend tooling that provides a fast development server and optimized production builds.

### Routing
- **React Router DOM (v7)**: handles client-side routing, allowing navigation between pages (Home, Properties, Contact, etc.) without reloading the page.

### Styling
- **Bootstrap (v5.3)**: A powerful CSS framework used for responsive grid layouts and pre-styled components.
- **Bootstrap Icons**: Provides the icon set used throughout the application (e.g., social icons, feature icons).
- **CSS Modules / Plain CSS**: Custom styling files (e.g., `App.css`, component-specific `.css` files) are used for custom designs and overriding Bootstrap defaults.

### Quality Control
- **ESLint**: Pluggable linting utility to find and fix problems in the JavaScript code, ensuring code quality and consistency.

---

## 2. Project Structure & File Description

### Root Directory
- **`index.html`**: The entry point of the application. It contains the root DOM node where the React app is mounted.
- **`package.json`**: Defines the project metadata, scripts (start, build), and dependencies.
- **`vite.config.js`**: Configuration file for the Vite build tool.

### Source Directory (`src/`)

#### Entry Points
- **`main.jsx`**: The JavaScript entry point. It imports global styles (Bootstrap), creates the React root, and renders the `App` component.
- **`App.jsx`**: The root component of the application. It sets up the Routing structure (`<Routes>`) and defines the main layout (Navbar + Page Content + Footer).
- **`index.css`**: Global CSS styles applied to the entire application.

#### Pages (`src/pages/`)
These components represent full pages mapped to specific routes.

- **`HomePage.jsx`**: The landing page of the website. It composes several components like `HeroSlider`, `SearchBar`, `Services`, `Testimonials`, and `LeadForm`.
- **`PropertiesPage.jsx`**: Displays a listing of available properties. Features a sidebar filters and a grid of `PropertyCard` components.
- **`PropertyDetailsPage.jsx`**: detailed view for a specific property. Shows images, amenities, and a contact form.
- **`ContactPage.jsx`**: A dedicated page for user inquiries, featuring a contact form and company information/map.
- **`AboutPage.jsx`**: Information about the company, its mission, vision, and team.

#### Components (`src/components/`)
Reusable UI building blocks organized by feature.

**Common (`src/components/common/`)**
- **`Nav.jsx`**: The top navigation bar, responsive across devices.
- **`Footer.jsx`**: The website footer containing company links, address, and social media icons.

**Home (`src/components/home/`)**
- **`HeroSlider.jsx`**: A carousel/slider component at the top of the Home page showcasing highlighted images.
- **`SearchBar.jsx`**: A search interface allowing users to find properties based on location or type.
- **`Services.jsx`**: A section displaying the core services offered (Buy, Rent, Sell).
- **`Testimonials.jsx`**: A slider component showing client reviews and feedback.
- **`LeadForm.jsx`**: A reusable form component for capturing user interest/leads.

**Properties (`src/components/properties/`)**
- **`PropertyCard.jsx`**: A reusable card component to display individual property summaries (image, price, title) in lists.

#### Assets & Resources
- **`src/assets/`**: Contains static image assets (e.g., logos, property images).
- **`src/resources/`**: Additional resource files, likely used for the slider images or data configs.
