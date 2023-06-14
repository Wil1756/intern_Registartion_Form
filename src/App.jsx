import React from 'react'
import RegistrationForm from './components/RegistrationForm'
import InternDetails from './components/InternDetails';
import './App.css';


function App() {
  const internId = 1;

  return (
    <>
      <h1>Intern Registration</h1>
      <RegistrationForm />
      <InternDetails />
    </>
  )
}

export default App
