import React, { useEffect, useState } from 'react';


const InternDetails = ({ internId }) => {
    const [intern, setIntern] = useState(null);

    useEffect(() => {
        fetchIntern();
    }, [internId]);

    const fetchIntern = async () => {
        try {
            const response = await fetch(`/interns/${internId}`);
            if (response.ok) {
                const data = await response.json();
                setIntern(data);
            } else {
                console.log('Error fetching intern details:', response.statusText);
            }
        } catch (error) {
            console.log('Error fetching intern details:', error);
        }
    }

    if (!intern) {
        return <div>Loading intern details...</div>;
    }
    return (
        <>
            <h2>Intern Details</h2>
            <p><strong>Name:</strong>{InternDetails.name}</p>
            <p><strong>Email:</strong>{InternDetails.email}</p>
            <p><strong>Start Date:</strong>{InternDetails.startDate}</p>
            <p><strong>Role:</strong>{InternDetails.role}</p>
            <p><strong>University:</strong>{InternDetails.university}</p>
            <p><strong>Country:</strong>{InternDetails.country}</p>
            <p><strong>Tel:</strong>{InternDetails.tel}</p>


        </>
    );
}

export default InternDetails;