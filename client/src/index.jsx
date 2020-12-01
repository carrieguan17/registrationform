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
    axios.post('/registration', formData)
    .then((response) => {
      var postSuccess = true;
    })
    .catch(function(err) {
      console.log(err)
    })
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
  } else if (showConfirmation) {
    return (
      <div>
        <Confirmation userData={userData}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))