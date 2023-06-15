import React, { useState } from 'react';
import '../styles/RegistrationForm.css';


const RegistrationForm = () => {
    const [checked, setChecked] = useState(false);
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
                <input
                    type='text'
                    placeholder='Name'
                    value={formData.name}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                <input
                    type='text'
                    placeholder='Nationality'
                    value={formData.nationality}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                <input
                    type='text'
                    placeholder='Email'
                    value={formData.email}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                <input
                    type='text'
                    placeholder='Course'
                    value={formData.course}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                <input
                    type='text'
                    placeholder='School'
                    value={formData.school}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                <input
                    type='text'
                    placeholder='Designation'
                    value={formData.designation}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                <input
                    type='text'
                    placeholder='Contact'
                    value={formData.contact}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                <input
                    type='text'
                    placeholder='Duration'
                    value={formData.duration}
                    onChange={handleChange}
                />
            </label>
            <br />
            <>
                <input
                    type="checkbox"
                    id="agree"
                    checked={checked}
                    onChange={(e) => setChecked(e.target.checked)}
                />
                <label htmlFor="agree">I agree to the terms and conditions</label>
            </>
            <br />
            <button>Register</button>
        </form>
    );
}

export default RegistrationForm;