import React, { useState } from 'react';
import styles from '../styles/Form.css';

function Form (props) {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    dateOfBirth: '',
    phoneNumber: ''
  });

  function handleChange (event) {
    setFormData({ ...formData, ... { [event.target.name]: event.target.value }})
  }

  function handleSubmit() {
    let validated = validation(formData);
    if (validated) {
      props.register(formData);
    }
  }

  function validation (formData) {
    let numberValidated = typeof(Number(formData.phoneNumber)) === 'number' && formData.phoneNumber.length === 10;
    if (formData.firstName === '' || !numberValidated) {
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
        <div className={styles.formElement}>
          <div>First Name</div>
          <input name="firstName" value={formData.firstName} onChange={(event) => {handleChange(event)}}/>
        </div>
        <div className={styles.formElement}>
          <div>Last Name</div>
          <input name="lastName" value={formData.lastName} onChange={(event) => {handleChange(event)}}/>
        </div>
        <div className={styles.formElement}>
          <div>Gender</div>
          <input name="gender" value={formData.gender} onChange={(event) => {handleChange(event)}}/>
        </div>
        <div className={styles.formElement}>
          <div>Date of Birth (enter as as mm/dd/yyyy) </div>
          <input name="dateOfBirth" value={formData.dateOfBirth} onChange={(event) => {handleChange(event)}}/>
        </div>
        <div className={styles.formElement}>
          <div>Phone Number (enter 10 digits without '-' or '()')</div>
          <input name="phoneNumber" value={formData.phoneNumber} onChange={(event) => {handleChange(event)}}/>
        </div>
        <div className={styles.btnContainer}>
          <div className={styles.registerBtn} onClick={(event) => {event.preventDefault(); handleSubmit()}}>Register</div>
        </div>
      </form>
    </div>
  )
}

export default Form;