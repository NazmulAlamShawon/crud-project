import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'

const Register = () => {
   const [inpval,setINP] = useState({
    name:"",
    email:"",
    age:"",
    mobile:"",
    work:"",
    add:"",
    description:""
   })
    const setData = (e) => {
    console.log(e.target.value);
    const{name,value} = e.target;
     setINP((preval) =>{
        return{
            ...preval,
            [name]: value
        }
     })
   }
  return (
    <div className='container'>
         <NavLink to='/'>Home</NavLink>
         <form className=''>
          <div className='row'>
          
           <div className='mb-3 col-lg-6 col-md-6 col-12'>
            <label for="exampleInputname">Name</label>
             <input type="text" onChange={setData} value={inpval.name} name="name"  class="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Enter Name" />
   
            </div>
            <div className='mb-3 col-lg-6 col-md-6 col-12'>
            <label for="exampleInputEmail1">Email</label>
            <input type="email" onChange={setData} name="email"value={inpval.email} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
   
            </div>
            <div className='mb-3 col-lg-6 col-md-6 col-12'>
            <label for="exampleInputname">Age</label>
            <input type="text"onChange={setData} name="age" value={inpval.age}class="form-control" id="exampleInputAge1" aria-describedby="agelHelp" placeholder="Enter age" />
   
            </div>
            <div className='mb-3 col-lg-6 col-md-6 col-12'>
            <label for="exampleInputname">Mobile</label>
            <input type="number" onChange={setData}  name="mobile" value={inpval.mobile}class="form-control" id="exampleInputMobile1" aria-describedby="mobileHelp" placeholder="Enter Mobile" />
   
            </div>
            <div className='mb-3 col-lg-6 col-md-6 col-12'>
            <label for="exampleInputname">Work</label>
            <input type="text" onChange={setData}  name="work" value={inpval.work}class="form-control" id="exampleInputWork1" aria-describedby="workHelp" placeholder="Enter work" />
   
            </div>
            <div className='mb-3 col-lg-6 col-md-6 col-12'>
            <label for="exampleInputname">Address</label>
            <input type="text" onChange={setData} name="add" value={inpval.add}class="form-control" id="exampleInputAddress1" aria-describedby="addressHelp" placeholder="Enter work" />
   
            </div>
            <div className='mb-3 col-lg-12 col-md-6 col-12'>
            <label for="exampleInputname" className='mb-2'>Description</label><br></br>
            <textarea name="description" onChange={setData} value={inpval.description} class='form-control' id='' cols="50" rows="10"></textarea>
   
            </div>
                 <button className='btn btn-primary'>submit</button>
          </div>
          </form>
        </div>
   
  )
}

export default Register