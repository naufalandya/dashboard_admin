import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import Login from './pages/Login';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <Routes>
      {/* Route utama akan render App.tsx */}
      <Route path="/*" element={<App />} />
      
      {/* Login route langsung */}
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
);
