import React from "react";

let customersArray = customers
    

  return (
  <div className="Appointments">
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Appointment Time</th>
          </tr>
        </thead>
        <tbody>
          {allCustomers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.firstName}</td>
              <td>{customer.lastName}</td>
              <td>{customer.appointmentTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );




//  *
//  * Step 1: Create a table with a thead/tbody. The thead should have a row with
//  *         3 th elements: First Name, Last Name, and Appointment Time.
//  * Step 2: Inside of your tbody, create a <tr> element that will .map()
//  *         over this.customersArray and return
//  *         3 <td> elements, one for firstName, lastName, and appointmentTime.
//  *
//  *         Check the README for a .map() hint.
//  * Step 3: Style it with css using the App.css file!
//  *
