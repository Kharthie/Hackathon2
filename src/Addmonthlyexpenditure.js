import React from 'react'
import { useFormik } from 'formik'

function Addmonthlyexpenditure() {
  const formik = useFormik({
    initialValues: {
      name: "",
      startDate: "",
      salary: "",
      monthyexpenditure:"",
      startTime:""
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    }
  })

  return (
    <>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Add Monthly Expenditure:-</h1>
      </div>

      <div className="container">
        <form onSubmit={formik.handleSubmit}>
          <div className="row">


            <div className="col-lg-6">
              <label>Name:</label>
              <input type="text" className="form-control"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}></input> 
              </div>



             
            
            
            <div className="col-lg-4">
              <label> Date:</label>
              <input type="date" className="form-control"
                name="startDate"
                onChange={formik.handleChange}
                value={formik.values.startDate}></input>
            </div>


            <div className="col-lg-6">
              <label>Add Monthly Expenditure($):</label>
              <input type="number" className="form-control"
                name="weeklyincome"
                onChange={formik.handleChange}
                value={formik.values.monthyexpenditure}></input>
              </div>

              <div className="col-lg-4">
              <label> Time:</label>
              <input type="time" className="form-control"
                name="time"
                onChange={formik.handleChange}
                value={formik.values.startTime}></input>
            </div>
            


            <div className="col-lg-12">
              <label>Salary($):</label>
              <input type="number" className="form-control"
                name="salary"
                onChange={formik.handleChange}
                value={formik.values.salary}></input>
            </div>

            <div className="col-lg-3 mt-3">
             <input type="Submit" className="btn btn-outline-primary"></input> 
            </div>

          </div>
        </form>
      </div>


    </>
  )
}

export default Addmonthlyexpenditure
