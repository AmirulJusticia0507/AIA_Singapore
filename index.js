import { connection } from './server'
import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';

ReactDOM.render(<Form />, document.getElementById('root'));


const express = require('express')
const app = express()

app.get('/employee_aia_singapore', (req, res) => {
    connection.query(`
    SELECT  employees_id,
            id_card,
            fullname_employee,
            firstname,
            lastname,
            birthdate,
            age,
            sex,
            country,
            address,
            marriage,
            email,
            phonenumber,
            photoprofile
    FROM aia_company.employees
    `, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'error' });
            return;
        }
        // results will contain the query results
        res.status(200).json({ data: results });
    });
})

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000')
})