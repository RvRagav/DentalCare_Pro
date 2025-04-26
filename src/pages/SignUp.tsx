import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [role, setRole] = useState('Patient');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();

        if(!name || !email || !password || !confirmPassword || !mobile) {
            setError('All fields are required');
            return;
        }
        console.log('Signed up:', { name, email, password });

        // Navigate to the login page
        navigate('/login');
    };

    return (
        <div className="container rounded mx-auto m-3 mt-5">
            <div className="row text-center justify-content-center">
                <div className="col-md-6 col-lg-4">
                    <div className="card">
                        <div className="card-header bg-primary text-white">
                            <h4>Sign Up</h4>
                        </div>
                        <div className="card-body">
                            {error && <div className="alert alert-danger">{error}</div>}
                            <form onSubmit={handleSignup}>
                                <div className="form-group mb-3">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        placeholder="Enter your name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        className={`form-control ${error && error.includes('email') ? 'is-invalid' : ''}`}
                                        id="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                                            if (!emailRegex.test(e.target.value)) {
                                                setError('Invalid email format');
                                            } else {
                                                setError('');
                                            }   
                                        }}
                                    />
                                    {/* {error && error.includes('email') && (
                                        <div className="invalid-feedback">{error}</div>
                                    )} */}
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="mobile">Mobile Number</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="mobile"
                                        placeholder="Enter your mobile number"
                                        onChange={(e) => {
                                            const mobileRegex = /^[6-9][0-9]{9}$/;
                                            if (!mobileRegex.test(e.target.value)) {
                                                setError('Invalid mobile number format');
                                            } else {
                                                setError('');
                                            }
                                            setMobile(e.target.value);
                                        }}
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="password">Password</label>
                                    <div className="input-group">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            className={`form-control ${error && error.includes('Password') ? 'is-invalid' : ''}`}
                                            id="password"
                                            placeholder="Enter your password"
                                            value={password}
                                            onChange={(e) => {
                                                setPassword(e.target.value);
                                                const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
                                                if (!passwordRegex.test(e.target.value)) {
                                                    setError('The Password must be at least 8 characters long and include letters, numbers, and special characters');
                                                } else {
                                                    setError('');
                                                }
                                            }}
                                        />
                                        <button
                                            type="button"
                                            className="btn btn-outline-secondary"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}></i>
                                        </button>
                                    </div>
                                    {error && error.includes('Password') && (
                                        <div className="invalid-feedback">{error}</div>
                                    )}
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="confirmPassword">Confirm Password</label>
                                    <div className="input-group">
                                        <input
                                            type={showConfirmPassword ? "text" : "password"}
                                            className={`form-control ${error && error.includes('match') ? 'is-invalid' : ''}`}
                                            id="confirmPassword"
                                            placeholder="Confirm your password"
                                            value={confirmPassword}
                                            onChange={(e) => {
                                                setConfirmPassword(e.target.value);
                                                if (e.target.value !== password) {
                                                    setError('Passwords do not match');
                                                } else {
                                                    setError('');
                                                }
                                            }}
                                        />
                                        <button
                                            type="button"
                                            className="btn btn-outline-secondary"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        >
                                            <i className={`bi ${showConfirmPassword ? "bi-eye-slash" : "bi-eye"}`}></i>
                                        </button>
                                    </div>
                                    {error && error.includes('match') && (
                                        <div className="invalid-feedback">{error}</div>
                                    )}
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="role">Role</label>
                                    <select className="form-select" aria-label="Default select example" id="role" value={role} onChange={(e) => setRole(e.target.value)}>
                                        <option value="Patient">Select Role</option>
                                        <option value="Patient">Patient</option>
                                        <option value="Admin">Admin</option>
                                        <option value="Doctor">Doctor</option>
                                    </select>
                                </div>
                                <button type="submit" className="btn btn-primary mt-3">
                                    Sign Up
                                </button>
                                <div className="mt-3">Already have an account?
                                    <a href="/login" className="text-decoration-none">
                                         Login
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp