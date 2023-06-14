import React, { useState, useEffect } from 'react';
import axios from "axios";
import '../../src/styles/InternList.css';

const InternList = () => {
    const [interns, setInterns] = useState([]);

    useEffect(() => {
        axios.get(`http://127.0.0.1:5000/interns`)
            .then((res) => {
                const interns = res.data;
                setInterns(interns);
            });
    }, []);

    // const deleteIntern = async (internId) => {
    //     try {
    //         const response = await fetch(`/Interns/${internId}`, {
    //             method: 'DELETE',
    //         });

    //         if (response.ok) {
    //             console.log('Intern deleted successfully');

    //         } else {
    //             console.log('Error deleting intern:', response.statusText);
    //         }
    //     } catch (error) {
    //         console.log("Error deleting intern:", error);
    //     }
    // }
    return (

        <div>
            <h2>List of Interns</h2>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Nationality</th>
                        <th>Email</th>
                        <th>Course</th>
                        <th>School</th>
                        <th>Designation</th>
                        <th>Contact</th>
                        <th>Duration</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        interns.map((intern) => (
                            <tr key={intern.id}>
                                <td>{intern.id}</td>
                                <td>{intern.name}</td>
                                <td>{intern.nationality}</td>
                                <td>{intern.email}</td>
                                <td>{intern.course}</td>
                                <td>{intern.school}</td>
                                <td>{intern.designation}</td>
                                <td>{intern.contact}</td>
                                <td>{intern.duration}</td>
                                <td>
                                    <button onClick={() => deleteIntern(intern.id)}>Delete</button>
                                </td>
                            </tr >
                        ))
                    }
                </tbody>
            </table>
        </div >
    );
}

export default InternList;







