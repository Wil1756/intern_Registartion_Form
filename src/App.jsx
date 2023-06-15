import React from 'react'
import RegistrationForm from './components/RegistrationForm'
import InternDetails from './components/InternDetails';
import InternList from './components/InternList';
import './App.css';


function App() {
  const internId = 1;

  return (
    <>
      <h1>Intern Registration Form</h1>
      <RegistrationForm />
      {/* <InternDetails internId={internId} /> */}
      {/* <InternList /> */}
    </>
  )
}

export default App


