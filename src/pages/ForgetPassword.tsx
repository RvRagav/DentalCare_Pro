import React from 'react'
import { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
const ForgetPassword = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    // const navigate = useNavigate();

    const handleForgotPassword = (e: React.FormEvent) => {
        e.preventDefault();

        if (!email) {
            setError('Email is required');
            return;
        }
        console.log('Forgot password for:', { email });
        setMessage('Password reset link sent to your email!');
        // Clear error and navigate to the login page
        setError('');
    };

    return (
        <div className="container rounded mx-auto m-3" >
            <div className="row text-center justify-content-center ">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header bg-primary text-white">
                            <h4>Forgot Password</h4>
                        </div>
                        <div className="card-body bg-light">
                            {error && <div className="alert alert-danger">{error}</div>}
                            {message && <div className="alert alert-success">{message}</div>}
                            <form onSubmit={handleForgotPassword}>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
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
                                </div>
                                <button type="submit" className="btn btn-primary mt-3">
                                    Reset Password
                                </button>
                                <div className="mt-3">
                                    <a href="/login" className="text-decoration-none">
                                        Back to Login
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

export default ForgetPassword