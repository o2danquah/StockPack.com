import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'



const Showdrugs = () => {


const [drugs, setValues] = useState([""]);
useEffect(() => {
    axios.get("http://localhost:8081/showdrugs").then(res => setValues(res.data)).catch(err => console.log(err))
    
}, [])







const handleDelete = async (id) => {
  try {
    await axios.delete("http://localhost:8081/showdrugs/"+id)
    window.location.reload()
  } catch (error) {
    console.log(error)
  }
}
 




  return (
    <React.Fragment>

<div className='Show-Drugs'>
    <h2>AVAILABLE DRUGS</h2>     

 <div className='h-100 d-flex align-items-center justify-content-center pt-2'>



 <table className="table table-dark">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Drug name</th>
      <th scope="col">Drug Category</th>
      <th scope="col">Quantity</th>
      <th scope="col">Date added</th>
      <th scope="col">Expiry Date</th>
      <th scope='col'></th>
    
    </tr>
  </thead>
  <tbody>
    {
    drugs.map((data, i) => (
        
        <tr key={i}>
        <td></td>    
        <td>{data.DrugName} </td>
        <td> {data.DrugCategory}</td>
        <td> {data.Quantity}</td>
        <td> {data.DateAdded}</td>
        <td> {data.ExpiryDate}</td>
        <td> 
            <Link to={`/update/${data.id}`} className='btn btn-primary'>Update</Link>
            <button className='btn btn-danger ms-2' onClick={e => {handleDelete(data.id)}}>Delete</button>
        </td>
       
        </tr>
    ))
    }
     
      
  </tbody>
</table>

 </div>
<div className='d-flex align-items-center justify-content-center'>
<Link to="/druginput" className='btn btn-success' style={{width:"130px", }}> Add</Link>

</div>
</div> 
    </React.Fragment>
  )
}
export default Showdrugs;

