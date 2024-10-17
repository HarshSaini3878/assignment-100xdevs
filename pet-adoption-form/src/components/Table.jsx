import React, { useEffect } from 'react';
import './Table.css';

function Table({ data }) {
  useEffect(() => {
    console.log("Updated data in Table:", data);
  }, [data]); // This will log when `data` updates

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Pet Name</th>
            <th>Pet Type</th>
            <th>Breed</th>
            <th>Your Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0 ? (
            data.map((item, index) => (
              <tr key={index}>
                <td>{item.petName}</td>
                <td>{item.petType}</td>
                <td>{item.breed}</td>
                <td>{item.yourName}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
