import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../contexts/UserContext.tsx'
import { Lock } from 'lucide-react'
import { UserRole } from '../contexts/UserContext.tsx';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [role, setRole] = useState<UserRole>('Patient');
    const [showPassword, setShowPassword] = useState(false);
    const { login } = useUser()
    const navigate = useNavigate()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            await login(email, password, role)
            localStorage.setItem('user', JSON.stringify({ name:'Ragavan', email, role }))
            navigate('/dashboard')
        } catch (error) {
            console.error('Login failed:', error)
        }
    }

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-6 col-lg-4">
                    <div className="card shadow">
                        <div className="card-body p-5">
                            <div className="text-center mb-4">
                                <Lock size={48} className="text-primary" />
                                <h2 className="mt-3">Welcome Back</h2>
                                <p className="text-muted">Please sign in to continue</p>
                            </div>
                            {error && <div className="alert alert-danger">{error}</div>}
                            
                            <form onSubmit={handleSubmit}>
                                <div className="form-group mb-3">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        className={`form-control ${error.includes('email') ? 'is-invalid' : ''}`}
                                        id="email"
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
                                    {/* {error.includes('email') && <div className="invalid-feedback">{error}</div>} */}
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="password">Password</label>
                                    <div className="input-group">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            className={`form-control ${error.includes('Password') ? 'is-invalid' : ''}`}
                                            id="password"
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
                                    {error.includes('Password') && <div className="invalid-feedback">{error}</div>}
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="role">Role</label>
                                    <select className="form-select" aria-label="Default select Role" id="role" value={role} onChange={(e) => setRole(e.target.value as UserRole)}>
                                        <option value="Patient">Patient</option>
                                        <option value="Admin">Admin</option>
                                        <option value="Dentist">Dentist</option>
                                        <option value="Receptionist">Receptionist</option>
                                    </select>
                                </div>
                                <div className="form-group mb-3 text-center">
                                <button type="submit" className="btn btn-primary mt-3">
                                    Login
                                </button>
                                <div className="mt-3 ">
                                    <a href="/forget-password" className="text-decoration-none">
                                        Forgot Password?
                                    </a>
                                </div>
                                <div className="mt-3">Don't have an account?
                                    <a href="/signup" className="text-decoration-none">
                                        Sign Up
                                    </a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login