import React from 'react'
import { useFormik } from 'formik'
import { useNavigate, useParams } from 'react-router-dom'

function Addweeklyexpenditure() {
  let params=useParams()
  let navigate=useNavigate()
  const formik = useFormik({
    initialValues: {
      name: "",
      startDate: "",
      salary: "",
      weeklyexpenditure:"",
      startTime:"",
      userid:useParams.id
    },
    onSubmit: async(values ) => {
      await fetch("https://61c5cbe4c003e70017b79917.mockapi.io/users",{
          method:"POST",
          body:JSON.stringify(values),
          headers:{
              "Content-type":"application/json"
          }
      })
     navigate(`/weekly`)
  }
   
  })
    
  return (
    <>
    
      
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Add Weekly Expenditure:-</h1>
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
              <label>Add Weekly Expenditure($):</label>
              <input type="number" className="form-control"
                name="weeklyincome"
                onChange={formik.handleChange}
                value={formik.values.Weeklyexpenditure}></input>
              </div>

              <div className="col-lg-4">
              <label> Time:</label>
              <input type="time" className="form-control"
                name="startTime"
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

export default Addweeklyexpenditure
