import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

function Yearly() {
  const [users, setUsers] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(async () => {
    try {
      var userData = await fetch(
        `https://61c5cbe4c003e70017b79917.mockapi.io/users`
      );
      var userList = await userData.json();
      setUsers(userList);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">
          Yearly wise income and expenditure:-
        </h1>
      </div>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <Link
          to="/add-yearly-income"
          class="btn btn-outline-success"
        >
          <i class="fas fa-download fa-sm text-white-50"></i> ADD YEARLY INCOME
        </Link>
        <Link
          to="/add-yearly-expenditure"
          class="btn btn-outline-danger"
        >
          <i class="fas fa-download fa-sm text-white-50"></i> ADD YEARLY EXPENDITURE
        </Link>
      </div>

    

     
        
        <div class="card-body">
        <div class="card text-center">
  <div class="card-header">
    User Details
  </div>
          <div class="table-responsive">
            <table
              class="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              
              
              <thead>
                <tr>
                  <th>S No</th>
                  <th>Name</th>
                  <th>Yearly Income</th>
                  <th>Yearly Expense</th>
                  
                </tr>
              </thead>
            
              <tbody>
                {users.map((user) => {
                  return (
                    <tr>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.yearlyincome}</td>
                      <td>{user.yearlyexpense}</td>
                      <td>{}</td>
                    </tr>
                  );
                })}

              </tbody>
              
             
            </table>
            
</div>
           
          </div>
        </div>
     
    </>
  );
}

export default Yearly
