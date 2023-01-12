// import React, { useState } from 'react';
// import axios from 'axios';
// import employee from './employee';
// // import { employee } from './state';
// import server from './server'; //path dari file server.js



// function Form() {
//     const [employee, setEmployee] = useState({
//         employees_id: '',
//         fullname_employee: '',
//         email: '',
//     });

//     const handleChange = (event) => {
//         setEmployee({
//             ...employee,
//             [event.target.name]: event.target.value,
//         });
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         // code untuk submit form ke server
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             {/* form inputs */}
//             <input
//                 type="text"
//                 name="employees_id"
//                 placeholder="Employee ID"
//                 value={employee.employees_id}
//                 onChange={handleChange}
//             />
//             <input
//                 type="text"
//                 name="fullname_employee"
//                 placeholder="Full Name"
//                 value={employee.fullname_employee}
//                 onChange={handleChange}
//             />
//             <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 value={employee.email}
//                 onChange={handleChange}
//             />
//             <button type="submit">Save</button>
//         </form>
// )}

// // const handleSubmit = async (event) => {
// //     event.preventDefault();
// //     try {
// //         await axios.post('http://localhost:3000/api/employees', employee);
// //         console.log('Data berhasil dikirim ke server');
// //     } catch (error) {
// //         console.error(error);
// //     }
// // }

// function EmployeeList() {
//     const [employees, setEmployees] = useState([]);
  
//     useEffect(() => {
//       axios
//         .get('http://localhost:3000/api/employees')
//         .then((res) => {
//           setEmployees(res.data);
//         })
//         .catch((err) => {
//           console.error(err);
//         });
//     }, []);
  
//     // render the list of employees
//   }


import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Form() {
    const [employee, setEmployee] = useState({
        employees_id: '',
        fullname_employee: '',
        email: '',
    });

    const handleChange = (event) => {
        setEmployee({
            ...employee,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:3000/api/employees', employee);
            console.log('Data berhasil dikirim ke server');
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            {/* form inputs */}
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
    )
}

function EmployeeList() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:3000/api/employees')
            .then((res) => {
                setEmployees(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    // render the list of employees
   
}