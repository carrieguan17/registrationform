import React from 'react';
import styles from '../styles/Confirmation.css';

function Confirmation (props) {
  return (
    <div className={styles.confirmationContainer}>
      <div className={styles.confirmationHeader}>Confirmation</div>
      <div className={styles.confirmationContent}>
        <p className={styles.confirmationMessage}>Thank you for joining LeetCall. Below is your profile information. If you have any questions, feel free to contact us for futher assistance.</p>
        <div className={styles.userData}>
          <div>First Name: {props.userData.firstName}</div>
          <div>Last Name: {props.userData.lastName}</div>
          <div>Gender: {props.userData.gender}</div>
          <div>Date of Birth: {props.userData.dateOfBirth}</div>
          <div>Phone Number: {props.userData.phoneNumber}</div>
        </div>
      </div>
    </div>
  )
}

export default Confirmation