import React, {useState} from 'react';

import "./Form.css"

const Form= () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    occupation: "student",
    gender: "female",
    languages: ["html"],
  })

  const handleChange=(e)=> {
    if (e.target.name==="languages"){
      let copy={...formData};
      if (e.target.checked){
        copy.languages.push(e.target.value)
      }else{
        copy.languages=copy.languages.filter(item => item !== e.target.value)
      }
      
      setFormData(copy);

    } else{
      setFormData(() => ({
        ...formData, 
        [e.target.name]: e.target.value
      }))
    }
    
  }

  const handleSubmit= (e) => {
    e.preventDefault()
  }

  return (

    <div className="form">
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="username" className="form-label">User Name</label>
        <input className="form-control" name="username" onChange={handleChange} value={formData.username} placeholder='default'/>
      </div>
      <div className="form-group">
        <label htmlFor="email" className="form-label">Email</label>
        <input className="form-control" name="email" onChange={handleChange} value={formData.email} placeholder='default@gmail.com'/>
      </div>
      <div className="form-group">
        <label htmlFor="occupation" className="form-label">Occupation</label>
        <select className="form-select" name="occupation" onChange={handleChange} value={formData.occupation}>
          <option value="student">Student</option>
          <option value="employee">Employee</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="gender" className="form-label">Gender</label>
        <div>
          <div>
            <input type="radio" name="gender" value="male" onChange={handleChange} checked = {formData.gender === "male"}/>
            <label htmlFor="male">Male</label>
          </div>
          <div>
            <input type="radio" name="gender" value="female" onChange={handleChange}  checked = {formData.gender === "female"} />
            <label htmlFor="female">Female</label>
          </div>
          <div>
            <input type="radio" name="gender" value="other" onChange={handleChange}  checked = {formData.gender === "other"}/>
            <label htmlFor="other">Other</label>
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="gender" className="form-label">Languages</label>
        <div>
          <div>
            <input type="checkbox" name="languages" value="html" onChange={handleChange} checked = {formData.languages.indexOf("html") !== -1}/>
            <label htmlFor="html">HTML</label>
          </div>
          <div>
            <input type="checkbox" name="languages" value="css" onChange={handleChange} checked = {formData.languages.indexOf("css") !== -1}/>
            <label htmlFor="css">CSS</label>
          </div>
          <div>
            <input type="checkbox" name="languages" value="javascript" onChange={handleChange}checked = {formData.languages.indexOf("javascript") !== -1}/>
            <label htmlFor="javascript">Javascript</label>
          </div>
        </div>
      </div>
      <div className="form-group">
        <button className="btn" type="submit" >Submit</button>
      </div>
    </form>
  </div>
  )

}

export default Form