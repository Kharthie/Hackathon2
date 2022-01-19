import React from "react";

function Dashboard() {
  return (
    <>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Overview:-</h1>
        <br></br>
      </div>

      <div class="row">
        <div class="col-xl-4 col-md-10 mb-10">
          <div class="card border-left-primary shadow h-100 py-2">
            <div class="card-body border-left-primary">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-primary text-uppercase mb-1 text-center ">
                    <div class="card-header"> Life Plan</div>
                  </div>
                  <br></br>
                  <div class="h5 mb-0 font-weight-bold text-gray-800">
                    Life Tools, a tailored financial assessment tool that uses
                    algorithms assess your financial situation at every stage of
                    your life.
                  </div>
                  <br></br>
                  <button type="button" class="btn btn-outline-primary">
                    Get Started
                  </button>
                </div>
                <div class="col-auto"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-4 col-md-10 mb-10">
          <div class="card border-left-success shadow h-100 py-2">
            <div class="card-body ">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-success text-uppercase mb-1 text-center">
                    <div class="card-header"> Finance Tools</div>
                  </div>
                  <br></br>
                  <div class="h5 mb-0 font-weight-bold text-gray-800">
                    Use any of our robust financial tools to create budgets,
                    plan expenses, save towards a goal and much more.
                  </div>
                  <br></br>
                  <br></br>
                  <button type="button" class="btn btn-outline-success">
                    Get Started
                  </button>
                </div>
                <div class="col-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
