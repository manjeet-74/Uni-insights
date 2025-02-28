import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './pages/Register.tsx'
import Dashboard from './pages/Dashboard.tsx'
import LoginPage from './pages/Login.tsx'
import { AuthProvider } from './context/AuthContext.tsx'
import { ApplicationForm } from './pages/ApplicationForm.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/applicationForm" element={<ApplicationForm />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
)
