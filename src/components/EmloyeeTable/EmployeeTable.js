import React from 'react';
import './EmployeeTable.css'



const EmployeeTable = (props) => {

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th scope='col'>Picture</th>
                    <th scope='col' data-field="name" data-sortable='true'>
                        <span onClick={() => props.onSort('name', 'last', 'first')}>Name</span>
                    </th>
                    <th scope="col">
                        <span onClick={() => props.onSort('phone')}>Phone</span>
                    </th>
                    <th scope="col">
                        <span onClick={() => props.onSort('email')}>Email</span>
                    </th>
                    <th scope="col">
                        <span onClick={() => props.onSort('dob', 'date')}>DOB</span>
                    </th>
                </tr>
            </thead>

        </table>
    )
}

export default EmployeeTable;