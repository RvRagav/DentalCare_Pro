import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { UserProvider } from './contexts/UserContext.tsx'
import Navbar from './components/Navbar.tsx'
import Login from './pages/Login.tsx'
import Dashboard from './pages/Dashboard.tsx'
import Appointments from './pages/Appointments.tsx'
import Patients from './pages/Patients.tsx'
import Profile from './pages/Profile.tsx'
import SignUp from './pages/SignUp.tsx'
import ForgetPassword from './pages/ForgetPassword.tsx'
import Treatments from './pages/Treatments.tsx'
import Doctors from './pages/Doctors_page.tsx'
import Facilities from './pages/Facilities.tsx'
import Footer from './components/Footer.tsx'
import Home from './pages/Home.tsx'
import TermsConditions from './pages/TermsConditions.tsx'
import PrivacyPolicy from './pages/PrivacyPolicy.tsx'
import AppointmentForm from './pages/AppointmentForm.tsx'
import PatientForm from './pages/PatientForm.tsx'

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="min-vh-100 bg-light">
          <div className="sticky-top"><Navbar /></div>
          
          <div className="container py-4">
            <Routes>
              <Route path="/" element={<Navigate to="/home" replace />} />
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/forgot-password" element={<ForgetPassword />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/appointments" element={<Appointments />} />
              <Route path="/patients" element={<Patients />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/treatments" element={<Treatments />} />
              <Route path="/doctors" element={<Doctors />} />
              <Route path="/facilities" element={<Facilities />} />
              <Route path="/terms-conditions" element={<TermsConditions/>} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path='/appointments/new' element={<AppointmentForm />} />
              <Route path="/patients/new" element={<PatientForm />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </UserProvider>
  )
}

export default App