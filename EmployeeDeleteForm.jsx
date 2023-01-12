import React, { useState } from 'react';
import Employee from '../components/employee';

function EmployeeDeleteForm({ employeeId }) {
  const handleDelete = () => {
    fetch(`http://localhost:3000/employee/${employeeId}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
      if(data.success) {
        // code untuk menghapus data dari state di aplikasi
        alert('Employee berhasil dihapus');
      }
    })
    .catch(error => console.log(error));
  }

  return (
    <button onClick={handleDelete}>Delete</button>
  )
}
