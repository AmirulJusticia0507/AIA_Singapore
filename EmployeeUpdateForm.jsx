import React, { useState } from "react";
import Employee from '../components/employee';

function EmployeeUpdateForm({ employeeId }) {
    const [employee, setEmployee] = useState({});

    // useEffect to fetch the employee data from the server based on the employeeId
    useEffect(() => {
        fetch(`http://localhost:3000/employee_aia_singapore/${employeeId}`)
            .then(res => res.json())
            .then(data => setEmployee(data))
            .catch(err => console.log(err));
    }, [employeeId]);

    const handleChange = event => {
        setEmployee({
            ...employee,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = event => {
        event.preventDefault();
        // code to submit the form data to the server
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="employees_id"
                placeholder="Employee ID"
                value={employee.employees_id}
                onChange={handleChange}
            />
            <input
                type="text"
                name="fullname_employee"
                placeholder="Full Name"
                value={employee.fullname_employee}
                onChange={handleChange}
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={employee.email}
                onChange={handleChange}
            />
            <button type="submit">Save</button>
        </form>
    );
}

export default EmployeeUpdateForm;
