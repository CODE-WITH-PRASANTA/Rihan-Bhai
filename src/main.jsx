import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Import Router
import './index.css';
import App from './App.jsx';

// Render the application wrapped with Router
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>  {/* Wrap App with Router here */}
      <App />
    </Router>
  </StrictMode>
);
