import React, { useState } from 'react';
import styles from '../styles/Form.css';

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
    <div className={styles.formContainer}>
      <div className={styles.formHeader}>Registration</div>
      <form className={styles.formContent}>
        {userInfo.map(userInfoItem => {
          return <div className={styles.formElement}>
            <div>{userInfoItem.label}</div>
            <input value={formData[userInfoItem.name]} onChange={(event) => {handleChange(event.target.value, userInfoItem.name)}}/>
          </div>
        })}
        <div className={styles.btnContainer}>
          <div className={styles.registerBtn} onClick={(event) => {event.preventDefault(); handleSubmit()}}>Register</div>
        </div>
      </form>
    </div>
  )
}

export default Form;