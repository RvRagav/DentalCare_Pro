import { Link, useNavigate } from 'react-router-dom'
import { useUser } from '../contexts/UserContext'

import { LogOut, User, Calendar, Users, LayoutDashboard } from 'lucide-react'
import { MdMedicalServices, MdPerson, MdLocationCity } from 'react-icons/md'

function Navbar() {
  const { user, logout } = useUser()
  const navigate = useNavigate()


  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  const showDashboard = user && ['Admin', 'Dentist', 'Receptionist'].includes(user.role)
  const showAppointments = user && ['Admin', 'Dentist', 'Receptionist'].includes(user.role)
  const showPatients = user && ['Admin', 'Receptionist'].includes(user.role)

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to={user? "/dashboard": "/"}>
          DentalCare Pro
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            {user && showDashboard && (
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">
                  <LayoutDashboard className="me-1" size={18} />
                  Dashboard
                </Link>
              </li>
            )}

            {user && showAppointments && (
              <li className="nav-item">
                <Link className="nav-link" to="/appointments">
                  <Calendar className="me-1" size={18} />
                  Appointments
                </Link>
              </li>
            )}

            {user && showPatients && (
              <li className="nav-item">
                <Link className="nav-link" to="/patients">
                  <Users className="me-1" size={18} />
                  Patients
                </Link>
              </li>
            )}
          </ul>

          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link className="nav-link" to="/treatments">
                <MdMedicalServices className="me-1" size={18} />
                Treatments
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/doctors">
                <MdPerson className="me-1" size={18} />
                Doctors
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/facilities">
                <MdLocationCity className="me-1" size={18} />
                Facilities
              </Link>
            </li>
          </ul>



          <ul className="navbar-nav">
            {user ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/profile">
                    <User className="me-1" size={18} />
                    Profile
                  </Link>
                </li>
                <button className="nav-link btn btn-link" onClick={handleLogout}>
                  <LogOut className="me-1" size={18} />
                  Logout
                </button>

              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Navbar

