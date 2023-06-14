import React, { useState } from 'react';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        nationality: '',
        email: '',
        course: '',
        school: '',
        designation: '',
        contact: '',
        duration: ''
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
            nationality: '',
            email: '',
            course: '',
            school: '',
            designation: '',
            contact: '',
            duration: ''
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
                Nationality:
                <input
                    type='text'
                    name='nationality'
                    value={formData.nationality}
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
                School:
                <input
                    type='text'
                    name='school'
                    value={formData.school}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Designation:
                <input
                    type='text'
                    name='designation'
                    value={formData.designation}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Contact:
                <input
                    type='text'
                    name='contact'
                    value={formData.contact}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Duration:
                <input
                    type='text'
                    name='duration'
                    value={formData.duration}
                    onChange={handleChange}
                />
            </label>
            <br />
            <button>Register</button>
        </form>
    );
}

export default RegistrationForm;