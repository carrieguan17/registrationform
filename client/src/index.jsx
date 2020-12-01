import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Form from './components/Form.jsx';
import Confirmation from './components/Confirmation.jsx'

function App () {
  const [showForm, setShowForm] = useState(true);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [userData, setUserData] = useState({})

  function register (formData) {
    setShowForm(false);
    setShowConfirmation(true);
    setUserData(formData)
  }

  if(showForm) {
    return (
      <div>
        <Form register={register}/>
      </div>
    )
  const [showConfirmation, setShowConfirmation] = useState(false);
  } else if (showConfirmation) {
    return (
      <div>
        <Confirmation userData={userData}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))