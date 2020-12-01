import React, { useState } from 'react';

let userInfo = [
  {
    label: "First Name",
    name: "firstName"
  },
  {
    label: "Last Name",
    name: "lastName"
  },
  {
    label: "Gender",
    name: "gender"
  },
  {
    label: "Date Of Birth",
    name: "dateOfBirth"
  },
  {
    label: "Phone Number",
    name: "phoneNumber"
  }
]

function Form (props) {

  const [formData, setFormData] = useState({});

  function handleChange (value: string, name: string) {
    setFormData({ ...formData, ... { [name]: value }})
  }

  function handleSubmit() {
    let validated = validation();
    if (validated) {
      props.register(formData);
    }
  }

  function validation () {
    if (formData.firstName === undefined || formData.phoneNumber === undefined) {
      alert("First Name and Phone Number are required.");
      return false
    } else {
      return true
    }
  }

  return (
    <div>
      <h1>Registration</h1>
      <form>
        {userInfo.map(userInfoItem => {
          return <div>
            {userInfoItem.label}
            <input value={formData[userInfoItem.name]} onChange={(event) => {handleChange(event.target.value, userInfoItem.name)}}/>
          </div>
        })}
        <div>
          <button onClick={(event) => {event.preventDefault(); handleSubmit()}}>Register</button>
        </div>
      </form>
    </div>
  )
}

export default Form;