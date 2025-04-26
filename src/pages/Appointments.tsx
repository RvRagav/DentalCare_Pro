import { useState, useMemo } from 'react'
import { useUser } from '../contexts/UserContext'
import { Calendar as CalendarIcon, Plus } from 'lucide-react'

interface Appointment {
  patient: string
  dateTime: string // ISO string
  treatment: string
  dentist: string
  status: string
}

function Appointments() {
  const { user } = useUser()
  const [appointments] = useState<Appointment[]>([
    {
      patient: 'Sarah Johnson',
      dateTime: '2024-03-20T10:00:00',
      treatment: 'Dental Cleaning',
      dentist: 'Dr. Smith',
      status: 'Confirmed',
    },
    {
      patient: 'Mike Wilson',
      dateTime: '2024-03-20T11:30:00',
      treatment: 'Root Canal',
      dentist: 'Dr. Johnson',
      status: 'Pending',
    },
    {
      patient: 'Emma Davis',
      dateTime: '2024-04-21T14:00:00',
      treatment: 'Consultation',
      dentist: 'Dr. Brown',
      status: 'In Progress',
    },
    {
      patient: 'Ragavan',
      dateTime: '2025-04-26T15:00:00',
      treatment: 'Dental Checkup',
      dentist: 'Dr. Smith',
      status: 'Confirmed',
    },
    {
      patient: 'John Doe',
      dateTime: '2024-04-23T16:00:00',
      treatment: 'Teeth Whitening',
      dentist: 'Dr. Johnson',
      status: 'Pending',
    },
    {
      patient: 'Jane Smith',
      dateTime: '2025-04-25T17:00:00',
      treatment: 'Root Canal',
      dentist: 'Dr. Ragavan',
      status: 'In Progress',
    }

  ])

  const filteredAppointments = useMemo(() => {
    if (!user) return []

    if (user.role === 'Dentist') {
      return appointments.filter(app => app.dentist.toLowerCase().includes(user.name.toLowerCase()))
    }
    if (user.role === 'Patient') {
      return appointments.filter(app => app.patient.toLowerCase().includes(user.name.toLowerCase()))
    }
    // Admin & Receptionist see all
    return appointments
  }, [appointments, user])

  const upcomingAppointments = filteredAppointments.filter(
    ({ dateTime }) => new Date(dateTime) > new Date()
  )

  const pastAppointments = filteredAppointments.filter(
    ({ dateTime }) => new Date(dateTime) < new Date()
  )

  const getStatusBadgeColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'confirmed':
        return 'success'
      case 'pending':
        return 'warning'
      case 'in progress':
        return 'info'
      default:
        return 'secondary'
    }
  }

  const renderTable = (data: Appointment[], title: string) => (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                {user?.role !== 'Patient' && <th>Patient</th>}
                <th>Date & Time</th>
                <th>Treatment</th>
                {user?.role !== 'Dentist' && <th>Dentist</th>}
                <th>Status</th>
                {title !== 'Past Appointments' && user?.role !== 'Patient' && <th>Actions</th>}
              </tr>
            </thead>
            <tbody>
              {data.length === 0 && (
                <tr>
                  <td colSpan={user?.role === 'Patient' ? 5 : user?.role === 'Dentist' ? 5 : 6} className="text-center text-muted">
                    No appointments
                  </td>
                </tr>
              )}
              {data.map((app, index) => (
                <tr key={index}>
                  {user?.role !== 'Patient' && <td>{app.patient}</td>}
                  <td>
                  <CalendarIcon size={16} className="me-1" />
                  {new Date(app.dateTime).toLocaleString('en-IN', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: true,
                    timeZone: 'Asia/Kolkata',
                  })}
                  </td>
                  <td>{app.treatment}</td>
                  {user?.role !== 'Dentist' && <td>{app.dentist}</td>}
                  <td>
                  <span className={`badge bg-${getStatusBadgeColor(app.status)}`}>
                    {app.status}
                  </span>
                  </td>
                  {title !== 'Past Appointments' && user?.role !== 'Patient' && (
                  <td>
                    <button className="btn btn-sm btn-outline-primary m-1">Edit</button>
                    <button className="btn btn-sm btn-outline-danger">Cancel</button>
                  </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Appointments</h1>
        
          {user && ['Admin', 'Receptionist'].includes(user.role) && (
            <>
            <Plus size={18} className="me-1" />
            <button className="btn btn-primary">New Appointment</button></>
          )}

      </div>

      {renderTable(upcomingAppointments, 'Upcoming Appointments')}
      {renderTable(pastAppointments, 'Past Appointments')}
    </div>
  )
}

export default Appointments
