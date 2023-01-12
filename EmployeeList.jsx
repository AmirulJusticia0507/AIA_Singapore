import React, { useState } from 'react';
import Employee from '../components/employee';

const Employee = () => {
  const [employees, setEmployees] = useState([]);
  return (
      <div>
          <table>
              <thead>
                  <tr>
                      <th>ID</th>
                      <th>Full Name</th>
                      <th>Email</th>
                  </tr>
              </thead>
              <tbody>
                  {employees.map((employee, index) => (
                      <tr key={index}>
                          <td>{employee.employees_id}</td>
                          <td>{employee.fullname_employee}</td>
                          <td>{employee.email}</td>
                          </tr>
                  ))}
              </tbody>
          </table>
      </div>
  )
}

function App() {
    return (
      <div>
        <Employee />
      </div>
    );
  }


export default App;