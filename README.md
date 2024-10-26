# React Authentication Template

A modern, responsive React authentication template built with TypeScript, React Router, and Tailwind CSS. This project provides a solid foundation for implementing user authentication in React applications.

![Auth Template Preview](screenshot.png)

## 🌟 Features

- **Complete Authentication Flow**
  - User Registration
  - User Login
  - Protected Routes
  - Automatic Login State Persistence
  - Logout Functionality

- **Modern UI Components**
  - Responsive Navigation Bar
  - Professional Form Designs
  - Mobile-First Approach
  - Loading States & Error Handling

- **Technical Features**
  - TypeScript Integration
  - React Router v6
  - Context API for State Management
  - Secure HTTP-Only Cookie Authentication
  - Form Validation
  - Protected Route Implementation

## 🚀 Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/react-auth-template.git
cd react-auth-template
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm start
# or
yarn start
```

The application will start running at `http://localhost:3000`

## 📁 Project Structure

```
src/
├── components/           # Reusable components
│   ├── Navbar.tsx       # Navigation bar component
│   └── ProtectedRoute.tsx # Route protection wrapper
├── context/
│   └── AuthContext.tsx  # Authentication context provider
├── pages/
│   ├── Login.tsx        # Login page
│   └── Register.tsx     # Registration page
├── apis/
│   └── Api.ts           # API service functions
├── types/
│   └── index.ts         # TypeScript type definitions
└── App.tsx              # Main application component
```

## 🔒 Authentication Flow

1. **Registration**
   - User submits registration form
   - Server creates new user account
   - JWT token is generated and stored
   - User is automatically logged in

2. **Login**
   - User submits login credentials
   - Server validates credentials
   - JWT token is generated and stored
   - User is redirected to protected route

3. **Protected Routes**
   - Routes check for valid authentication
   - Unauthenticated users are redirected to login
   - Authenticated users can access protected content

4. **Logout**
   - User clicks logout
   - JWT token is removed
   - User is redirected to login page

## 💻 Components

### Navbar
- Responsive navigation component
- Displays user status and authentication options
- Mobile-friendly hamburger menu
- Smooth transitions and animations

### Login/Register Forms
- Clean, professional design
- Input validation
- Error handling
- Loading states
- Responsive layout

### Protected Route
- Higher-order component for route protection
- Automatic redirect for unauthenticated users
- Loading state handling

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
REACT_APP_API_URL=your_api_url_here
```

### API Configuration

Update the API base URL in `src/apis/Api.ts`:

```typescript
export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000';
```

## 🎨 Styling

This project uses Tailwind CSS for styling. The main configuration file is `tailwind.config.js`:

```javascript
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Add your custom theme configurations here
    },
  },
  plugins: [],
}
```

## 🛠️ Additional Scripts

```bash
# Run tests
npm test

# Build for production
npm run build

# Run linter
npm run lint

# Format code
npm run format
```

## 📱 Responsive Design

The template is fully responsive with breakpoints:
- Mobile: 0-640px
- Tablet: 641-1024px
- Desktop: 1025px+

## 🔐 Security Considerations

- Uses HTTP-only cookies for token storage
- Implements CSRF protection
- Secure password handling
- Protected API endpoints
- Input sanitization
- XSS protection through React's built-in escaping

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)

## 📞 Support

For support, email bigyanadk07@gmail.com or open an issue in the repository.

## 🚀 Deployment

This template can be easily deployed to:
- Vercel
- Netlify
- GitHub Pages
- AWS Amplify
- Heroku

Follow the respective platform's deployment guidelines for React applications.
