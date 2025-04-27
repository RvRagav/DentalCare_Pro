import { useUser } from '../contexts/UserContext.tsx'
import { User as Prof, Mail, Phone, MapPin } from 'lucide-react'
import { User } from '../contexts/UserContext.tsx'
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
                  <Prof size={48} />
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
                <p className="text-muted">{user?.mobile}</p>
              </div>

              <div className="mb-3">
                <div className="d-flex align-items-center mb-2">
                  <MapPin size={18} className="text-primary me-2" />
                  <strong>Address</strong>
                </div>
                <p className="text-muted">
                  123 Radha nagar.<br />
                  Chromepet<br />
                  Chennai - 600044<br />
                  Tamil Nadu, India
                </p>
              </div>

              <hr />

              <h5 className="card-title mb-4">Security Settings</h5>

              <div className="mb-3">
                <button
                  className="btn btn-outline-primary me-2"
                  onClick={() => {
                    const newPassword = prompt("Enter your new password:");
                    if (newPassword) {
                      console.log("Password changed to:", newPassword);
                      user!.password = newPassword;
                      localStorage.setItem('user', JSON.stringify(user));
                      const storedUsers = localStorage.getItem('users');
                      let users: User[] = storedUsers ? JSON.parse(storedUsers) : [];

                      const foundUser = users.find(
                        (u) => u.email === user?.email && u.role === user?.role
                      );
                      if (foundUser) {
                        foundUser.password = newPassword;
                        localStorage.setItem('users', JSON.stringify(users));
                      }
                      alert("Password changed successfully!");
                    }
                  }}
                >
                  Change Password
                </button>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => {
                    const confirmDelete = window.confirm("Are you sure you want to delete your account?");
                    if (confirmDelete) {
                      console.log("Account deleted");
                      alert("Your account has been deleted.");
                    }
                  }}
                >
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