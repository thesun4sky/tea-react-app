// src/components/MemberSignUp.js

import React, { useState } from 'react';

const MemberSignUp = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint for member registration
        const response = await fetch('http://localhost:8080/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            // Handle successful registration, e.g., show success message or redirect to a login page
            console.log('Member registered successfully!');
        } else {
            // Handle registration failure, e.g., show error message
            console.error('Member registration failed!');
        }
    };

    return (
        <div>
            <h2>Member Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default MemberSignUp;