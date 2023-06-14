import React, { useState, useEffect } from 'react';


const InternList = () => {
    const [interns, setInterns] = useState([]);

    useEffect(() => {
        fetchInterns();
    }, []);


    const fetchInterns = async () => {
        try {
            const response = await fetch('/Interns');
            if (response.ok) {
                const data = await response.json();
                setInterns(data);
            } else {
                console.log('Error fetching interns:', response.statusText);
            }
        } catch (error) {
            console.log("Error fetching interns:", error);
        }
    };

    const deleteIntern = async (internId) => {
        try {
            const response = await fetch(`/Interns/${internId}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                console.log('Intern deleted successfully');
                fetchInterns();
            } else {
                console.log('Error deleting intern:', response.statusText);
            }
        } catch (error) {
            console.log("Error deleting intern:", error);
        }
    }
    return (
        <div>
            <h2>List of Interns</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {InternList.map((intern) => (
                        <tr key={intern.id}>
                            <td>{intern.name}</td>
                            <td>{intern.email}</td>
                            <td>
                                <button onClick={() => deleteIntern(intern.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    );
}

export default InternList;