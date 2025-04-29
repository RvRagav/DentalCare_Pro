import { useUser } from '../contexts/UserContext.tsx'
import { Users, Calendar, Activity, IndianRupee } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
  const { user } = useUser()
  if (user) {
    user.name = 'Ragavan'
  }
  const [recentAppointments] = useState([
    { patient: 'Ragavan', dentist: 'Dr. Smith', date: '2025-04-30, 12:00 PM', status: 'Confirmed' },
    { patient: 'Mike Smith', dentist: 'Dr. Johnson', date: '2025-04-19, 11:30 AM', status: 'Pending' },
    { patient: 'Emma Davis', dentist: 'Dr. Ragavan', date: '2025-04-20, 2:00 PM', status: 'In Progress' },
    { patient: 'Ragavan', dentist: 'Dr. Smith', date: '2025-04-22, 3:00 PM', status: 'Completed' },
    { patient: 'Ragavan', dentist: 'Dr. Johnson', date: '2025-04-23, 4:00 PM', status: 'Completed' },
  ])

  const [recentPatients] = useState([
    { name: 'John Doe', dentist: 'Dr. Smith', lastVisit: '2025-03-15', status: 'Active' },
    { name: 'Jane Smith', dentist: 'Dr. Johnson', lastVisit: '2025-03-14', status: 'Active' },
    { name: 'Robert Johnson', dentist: 'Dr. Ragavan', lastVisit: '2025-03-13', status: 'Follow-up' },
    { name: 'Ragavan', dentist: 'Dr. Smith', lastVisit: '2025-03-15', status: 'Active' },
    { name: 'Michael Brown', dentist: 'Dr. Johnson', lastVisit: '2025-03-11', status: 'Active' },
  ])

  const renderCards = () => {
    if (!user) return null

    const cards = []

    if (['Admin', 'Dentist', 'Receptionist'].includes(user.role)) {
      cards.push(
        <div className="col-md-3" key="patients">
          <div className="card bg-primary text-white">
            <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <h6 className="card-title mb-1">Total Patients</h6>
                <h2 className="mb-0">1,234</h2>
              </div>
              <Users size={32} />
            </div>
          </div>
        </div>
      )
    }

    if (['Admin', 'Dentist', 'Receptionist'].includes(user.role)) {
      cards.push(
        <div className="col-md-3" key="appointments">
          <div className="card bg-success text-white">
            <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <h6 className="card-title mb-1">Appointments Today</h6>
                <h2 className="mb-0">15</h2>
              </div>
              <Calendar size={32} />
            </div>
          </div>
        </div>
      )
    }

    if (user.role === 'Admin') {
      cards.push(
        <div className="col-md-3" key="revenue">
          <div className="card bg-info text-white">
            <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <h6 className="card-title mb-1">Revenue (Monthly)</h6>
                <h2 className="mb-0">₹45.2K</h2>
              </div>
              <IndianRupee size={32} />
            </div>
          </div>
        </div>
      )
    }

    if (['Admin', 'Dentist'].includes(user.role)) {
      cards.push(
        <div className="col-md-3" key="treatments">
          <div className="card bg-warning text-white">
            <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <h6 className="card-title mb-1">Active Treatments</h6>
                <h2 className="mb-0">28</h2>
              </div>
              <Activity size={32} />
            </div>
          </div>
        </div>
      )
    }

    return cards
  }

  const renderAppointmentsTable = () => (
    <div className="col-md-12 col-lg-6">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Recent Appointments</h5>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Patient</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {recentAppointments
                  .filter((a) => user?.role === 'Dentist' ? a.dentist.includes(user.name) : true)
                  .map((a, index) => (
                    <tr key={index}>
                      <td>{a.patient}</td>
                      <td>{a.date}</td>
                      <td>
                        <span className={`badge bg-${getStatusColor(a.status)}`}>
                          {a.status}
                        </span>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )

  const renderPatientsTable = () => (
    <div className="col-lg-6 col-sm-12">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Recent Patients</h5>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Patient</th>
                  <th>Last Visit</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {recentPatients
                  .filter((p) => user?.role === 'Dentist' ? p.dentist.includes(user.name) : true)
                  .map((p, index) => (
                    <tr key={index}>
                      <td>{p.name}</td>
                      <td>{p.lastVisit}</td>
                      <td>
                        <span className={`badge bg-${getStatusColor(p.status)}`}>
                          {p.status}
                        </span>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'confirmed': return 'success'
      case 'pending': return 'warning'
      case 'in progress': return 'info'
      case 'active': return 'success'
      case 'follow-up': return 'warning'
      case 'completed': return 'success'
      default: return 'secondary'
    }
  }

  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h1 className="mb-4">Welcome, {user?.name}</h1>

        <div className="row g-4 text-center d-flex justify-content-center overflow-hidden">
          {renderCards()}
        </div>

        <div className="row m-4 g-4">
          {['Admin', 'Dentist', 'Receptionist'].includes(user?.role || '') && renderAppointmentsTable()}
          {['Admin', 'Dentist', 'Receptionist'].includes(user?.role || '') && renderPatientsTable()}
          {user?.role === 'Patient' && (
            <>
            <div className="row g-4">
              <div className="col-lg-6 col-sm-12">
                <div className="card text-center shadow">
                  <div className="card-body">
                    <h5 className="card-title">Your Upcoming Appointments</h5>
                    <ul className="list-group list-group-flush">
                      {recentAppointments
                        .filter((a) => new Date(a.date) >= new Date() && a.patient === user?.name)
                        .map((a, idx) => (
                          <li
                            key={idx}
                            className="list-group-item d-flex justify-content-between align-items-center p-3"
                          >
                            {a.date} - {a.dentist}
                            <span className={`badge bg-${getStatusColor(a.status)}`}>
                              {a.status}
                            </span>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="card text-center shadow">
                  <div className="card-body">
                    <h5 className="card-title">Your Past Appointments</h5>
                    <ul className="list-group list-group-flush">
                      {recentAppointments
                        .filter((a) => new Date(a.date) < new Date() && a.patient === user?.name)
                        .map((a, idx) => (
                          <li
                            key={idx}
                            className="list-group-item d-flex justify-content-between align-items-center p-3"
                          >
                            {a.date} - {a.dentist}
                            <span className={`badge bg-${getStatusColor(a.status)}`}>
                              {a.status}
                            </span>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <Link to="/appointments/new" className="btn btn-primary mt-3">
                Book an Appointment
              </Link>
            </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
