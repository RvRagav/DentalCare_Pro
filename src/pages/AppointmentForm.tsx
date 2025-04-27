import React, { useState } from 'react';

const AppointmentForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        doctor: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        doctor: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' }); // Clear errors on input change
    };

    const validateForm = () => {
        const newErrors: typeof errors = {
            name: '',
            email: '',
            phone: '',
            date: '',
            time: '',
            doctor: '',
        };

        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
            newErrors.email = 'Valid email is required';
        if (!formData.phone || !/^\d{10}$/.test(formData.phone))
            newErrors.phone = 'Valid 10-digit phone number is required';
        if (!formData.date) newErrors.date = 'Date is required';
        if (!formData.time) newErrors.time = 'Time is required';
        if (!formData.doctor) newErrors.doctor = 'Please select a doctor';

        setErrors(newErrors);
        return Object.values(newErrors).every((error) => error === '');
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Appointment booked:', formData);
            alert('Appointment booked successfully!');
            setFormData({
                name: '',
                email: '',
                phone: '',
                date: '',
                time: '',
                doctor: '',
            });
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center ">
                <div className="col-md-6 col-lg-4 shadow-sm bg-white rounded p-4">

                    <h2 className="text-center mb-4">Book an Appointment</h2>
                    <form onSubmit={handleSubmit} className="p-4 border rounded">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input
                                type="text"
                                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                            />
                            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                            />
                            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Phone</label>
                            <input
                                type="text"
                                className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Enter your phone number"
                            />
                            {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="date" className="form-label">Date</label>
                            <input
                                type="date"
                                className={`form-control ${errors.date ? 'is-invalid' : ''}`}
                                id="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                            />
                            {errors.date && <div className="invalid-feedback">{errors.date}</div>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="time" className="form-label">Time</label>
                            <input
                                type="time"
                                className={`form-control ${errors.time ? 'is-invalid' : ''}`}
                                id="time"
                                name="time"
                                value={formData.time}
                                onChange={handleChange}
                            />
                            {errors.time && <div className="invalid-feedback">{errors.time}</div>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="doctor" className="form-label">Select Doctor</label>
                            <select
                                className={`form-select ${errors.doctor ? 'is-invalid' : ''}`}
                                id="doctor"
                                name="doctor"
                                value={formData.doctor}
                                onChange={handleChange}
                            >
                                <option value="">Choose...</option>
                                <option value="Dr. Smith">Dr. Smith</option>
                                <option value="Dr. Johnson">Dr. Johnson</option>
                                <option value="Dr. Williams">Dr. Williams</option>
                            </select>
                            {errors.doctor && <div className="invalid-feedback">{errors.doctor}</div>}
                        </div>

                        <button type="submit" className="btn btn-primary w-100">Book Appointment</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AppointmentForm;