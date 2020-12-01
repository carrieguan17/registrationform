import React from 'react';

function Confirmation (props) {
  return (
    <div>
      <h1>Confirmation</h1>
      <div>Thank you for joining Leetcall. Below is your profile details. If you have any questions, feel free to contact us for futher assistance.</div>
      <div>First Name: {props.userData.firstName}</div>
      <div>Last Name: {props.userData.lastName}</div>
      <div>Gender: {props.userData.gender}</div>
      <div>Date of Birth: {props.userData.dateOfBirth}</div>
      <div>Phone Number: {props.userData.phoneNumber}</div>
    </div>
  )
}

export default Confirmation