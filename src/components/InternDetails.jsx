import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/InternDetails.css';


const InternDetails = ({ internId }) => {
    const [intern, setIntern] = useState(null);

    useEffect(() => {
        axios.get(`http://127.0.0.1:5000/interns`)
            .then((res) => {
                const intern = res.data;
                setIntern(intern);
            });
    }, [intern]);

    if (!intern) {
        return <div>Loading intern details...</div>;
    }
    return (
        <div className='InternDetails'>
            <h2>Intern Details</h2>
            {
                intern.map((intern) => (
                    <div key={intern.id}>
                        <ul>
                            <li>
                                <span className="label">Name:</span>
                                <span className="value">{intern.name}</span>
                            </li>
                            <li>
                                <span className="label">Email:</span>
                                <span className="value">{intern.email}</span>
                            </li>
                            <li>
                                <span className="label">School:</span>
                                <span className="value">{intern.school}</span>
                            </li>
                            <li>
                                <span className="label">Nationality:</span>
                                <span className="value">{intern.nationality}</span>
                            </li>
                            <li>
                                <span className="label">Designation:</span>
                                <span className="value">{intern.designation}</span>
                            </li>
                            <li>
                                <span className="label">Contact:</span>
                                <span className="value">{intern.contact}</span>
                            </li>
                        </ul>
                    </div>
                ))
            }
        </div>
    );
}

export default InternDetails;