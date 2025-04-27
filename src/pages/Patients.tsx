import { useState, useMemo } from 'react'
import { Plus, Search } from 'lucide-react'
import { useUser } from '../contexts/UserContext'
import { useNavigate } from 'react-router-dom'


interface Patient {
  name: string
  phone: string
  email: string
  lastVisit: string // ISO
  nextVisit: string | null
  status: 'Active' | 'Follow-up' | 'Inactive'
}

function Patients() {
  const { user } = useUser()
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('')
  const [patients] = useState<Patient[]>([
    {
      name: 'John Doe',
      phone: '+91 8654132177',
      email: 'sara23@email.com',
      lastVisit: '2025-03-15',
      nextVisit: '2025-04-22',
      status: 'Active',
    },
    {
      name: 'Jane Smith',
      phone: '+91 9876543864',
      email: 'jane.smith@email.com',
      lastVisit: '2025-03-10',
      nextVisit: null,
      status: 'Follow-up',
    },
    {
      name: 'Ravi Kumar',
      phone: '+91 9876000111',
      email: 'ravi.kumar@email.com',
      lastVisit: '2024-02-22',
      nextVisit: null,
      status: 'Inactive',
    },
    {
      name: 'Ragavan',
      phone: '+91 9876543210',
      email: 'ragavan@email.com',
      lastVisit: '2025-04-10',
      nextVisit: '2025-04-20',
      status: 'Active',
    }
  ])

  const filteredPatients = useMemo(() => {
    return patients.filter((p) => {
      const matchName = p.name.toLowerCase().includes(searchTerm.toLowerCase())
      const matchStatus = statusFilter ? p.status.toLowerCase() === statusFilter : true
      return matchName && matchStatus
    })
  }, [patients, searchTerm, statusFilter])

  const getStatusBadge = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'success'
      case 'follow-up':
        return 'warning'
      case 'inactive':
        return 'secondary'
      default:
        return 'light'
    }
  }

  const canEdit = ['Admin', 'Receptionist'].includes(user?.role || '')
  const canAddPatient = canEdit

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Patients</h1>
        {canAddPatient && (
          <button className="btn btn-primary" onClick={() => {navigate('/patients/new')}}>
            <Plus size={18} className="me-1" />
            New Patient
          </button>
        )}
      </div>

      <div className="card mb-4">
        <div className="card-body">
          <div className="row g-3">
            <div className="col-md-4">
              <div className="input-group">
                <span className="input-group-text">
                  <Search size={18} />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search patients..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-3">
              <select
                className="form-select"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="">Filter by Status</option>
                <option value="active">Active</option>
                <option value="follow-up">Follow-up</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Contact</th>
                  <th>Last Visit</th>
                  <th>Upcoming Appointment</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredPatients.length === 0 && (
                  <tr>
                    <td colSpan={6} className="text-center text-muted">
                      No patients found.
                    </td>
                  </tr>
                )}
                {filteredPatients.map((p, index) => (
                  <tr key={index}>
                    <td>{p.name}</td>
                    <td>
                      {p.phone}
                      <br />
                      {p.email}
                    </td>
                    <td>{new Date(p.lastVisit).toLocaleDateString('en-In', { year: 'numeric', month: 'long', day: 'numeric' })}</td>
                    <td>{p.nextVisit ? new Date(p.nextVisit).toLocaleDateString('en-In', { year: 'numeric', month: 'long', day: 'numeric' }) : 'None'}</td>
                    <td>
                      <span className={`badge bg-${getStatusBadge(p.status)}`}>
                        {p.status}
                      </span>
                    </td>
                    <td>
                      
                      {canEdit && (
                        <>
                          <button className="btn btn-sm btn-outline-secondary me-1">Edit</button>
                          <button className="btn btn-sm btn-outline-danger">Delete</button>
                        </>
                      )}
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
}

export default Patients
