import React, { useState } from 'react';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        course: '',
        university: '',
        role: '',
        country: '',
        tel: '',
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/interns', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Intern registration successful!');
                // Perform any additional actions upon successful registration
            } else {
                console.log('Error registering intern:', response.statusText);
            }
        } catch (error) {
            console.log("Error registering intern:", error);
        }


        setFormData({
            name: '',
            email: '',
            course: '',
            university: '',
            role: '',
            country: '',
            tel: '',
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Email:
                <input
                    type='text'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Course:
                <input
                    type='text'
                    name='course'
                    value={formData.course}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                University:
                <input
                    type='text'
                    name='university'
                    value={formData.university}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Role:
                <input
                    type='text'
                    name='role'
                    value={formData.role}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Country:
                <input
                    type='text'
                    name='country'
                    value={formData.country}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Tel:
                <input
                    type='text'
                    name='tel'
                    value={formData.tel}
                    onChange={handleChange}
                />
            </label>
            <br />
            <button>Register</button>
        </form>
    );
}

export default RegistrationForm;