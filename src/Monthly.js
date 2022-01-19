import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Monthly() {
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
          Monthly wise income and expenditure:-
        </h1>
      </div>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <Link
          to="/add-monthly-income"
          class="btn btn-outline-success"
        >
          <i class="fas fa-download fa-sm text-white-50"></i> ADD MONTHLY INCOME
        </Link>
        <Link
          to="/add-monthly-expenditure"
          class="btn btn-outline-danger"
        >

          

          <i class="fas fa-download fa-sm text-white-50"></i> ADD MONTHLY EXPENDITURE
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
                  <th>Monthly Income</th>
                  <th>Monthly Expense</th>
                  
                </tr>
              </thead>
              <tbody>
                {users.map((user) => {
                  return (
                    <tr>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.monthlyincome}</td>
                      <td>{user.monthlyexpense}</td>
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

export default Monthly;
