import React, { useState } from 'react';

const PatientForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        gender: '',
        email: '',
        phone: '',
        address: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        age: '',
        gender: '',
        email: '',
        phone: '',
        address: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' }); // Clear errors on input change
    };

    const validateForm = () => {
        const newErrors: typeof errors = {
            name: '',
            age: '',
            gender: '',
            email: '',
            phone: '',
            address: '',
        };

        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.age || isNaN(Number(formData.age)) || Number(formData.age) <= 0)
            newErrors.age = 'Valid age is required';
        if (!formData.gender) newErrors.gender = 'Gender is required';
        if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
            newErrors.email = 'Valid email is required';
        if (!formData.phone || !/^\d{10}$/.test(formData.phone))
            newErrors.phone = 'Valid 10-digit phone number is required';
        if (!formData.address) newErrors.address = 'Address is required';

        setErrors(newErrors);
        return Object.values(newErrors).every((error) => error === '');
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('New patient added:', formData);
            alert('Patient added successfully!');
            setFormData({
                name: '',
                age: '',
                gender: '',
                email: '',
                phone: '',
                address: '',
            });
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center ">
                <div className="col-md-6 col-lg-4 shadow-sm bg-white rounded p-4">
                    <h2 className="text-center mb-4">Add New Patient</h2>
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
                                placeholder="Enter patient's name"
                            />
                            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="age" className="form-label">Age</label>
                            <input
                                type="number"
                                className={`form-control ${errors.age ? 'is-invalid' : ''}`}
                                id="age"
                                name="age"
                                value={formData.age}
                                onChange={handleChange}
                                placeholder="Enter patient's age"
                            />
                            {errors.age && <div className="invalid-feedback">{errors.age}</div>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="gender" className="form-label">Gender</label>
                            <select
                                className={`form-select ${errors.gender ? 'is-invalid' : ''}`}
                                id="gender"
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                            >
                                <option value="">Select gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                            {errors.gender && <div className="invalid-feedback">{errors.gender}</div>}
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
                                placeholder="Enter patient's email"
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
                                placeholder="Enter patient's phone number"
                            />
                            {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Address</label>
                            <textarea
                                className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                                id="address"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                placeholder="Enter patient's address"
                                rows={3}
                            ></textarea>
                            {errors.address && <div className="invalid-feedback">{errors.address}</div>}
                        </div>

                        <button type="submit" className="btn btn-primary w-100">Add Patient</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PatientForm;