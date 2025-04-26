import { useUser } from '../contexts/UserContext.tsx'
import { User, Mail, Phone, MapPin } from 'lucide-react'

function Profile() {
  const { user } = useUser()

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body text-center">
              <div className="mb-3">
                <div className="rounded-circle bg-primary text-white d-inline-flex p-3">
                  <User size={48} />
                </div>
              </div>
              <h4>{user?.name}</h4>
              <p className="text-muted">{user?.role}</p>
              <div className="d-grid">
                <button className="btn btn-primary">Edit Profile</button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title mb-4">Profile Information</h5>
              
              <div className="mb-3">
                <div className="d-flex align-items-center mb-2">
                  <Mail size={18} className="text-primary me-2" />
                  <strong>Email</strong>
                </div>
                <p className="text-muted">{user?.email}</p>
              </div>

              <div className="mb-3">
                <div className="d-flex align-items-center mb-2">
                  <Phone size={18} className="text-primary me-2" />
                  <strong>Phone</strong>
                </div>
                <p className="text-muted">(555) 123-4567</p>
              </div>

              <div className="mb-3">
                <div className="d-flex align-items-center mb-2">
                  <MapPin size={18} className="text-primary me-2" />
                  <strong>Address</strong>
                </div>
                <p className="text-muted">
                  123 Medical Center Dr.<br />
                  Suite 100<br />
                  Los Angeles, CA 90001
                </p>
              </div>

              <hr />

              <h5 className="card-title mb-4">Security Settings</h5>
              
              <div className="mb-3">
                <button className="btn btn-outline-primary me-2">
                  Change Password
                </button>
                <button className="btn btn-outline-danger">
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile