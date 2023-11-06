import React, { useState } from 'react'
import axios from 'axios'
import './LandingFile.css'

const LandingFile = () => {
    const [file, setFile] = useState()
    const upload = () => {
        const formData = new FormData();
        formData.append('file', file)
        axios.post('http://localhost:8000/upload', formData )
        .then( res => {})
        .catch(er => console.log(er));
    }
  return (
     <div className="container">
       <div className="heading">
          <h3>Welcome to Early Onset Alzheimer's Detector</h3>
       </div>
       <div className="uploads">
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <button type="button" class="button" onClick={upload}>upload</button> 
      </div>
     </div>
  )
}

  
export default LandingFile