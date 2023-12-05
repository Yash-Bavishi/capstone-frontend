import React, { useState } from 'react'
import axios from 'axios'
import './LandingFile.css'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const LandingFile = () => {
    const [result, setResult] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const [file, setFile] = useState()
    const upload = () => {
        const formData = new FormData();
        formData.append('file', file)
        axios.post('http://localhost:8000/upload', formData )
        .then( async (res) => {setResult(await res.data); console.log(await res.data); setIsLoading(false)})
        .catch(er => console.log(er));
    }

    // useEffect(() => {
    //   async function validator()  {

    //     const token = localStorage.getItem("token")
    //     const data = {"token": token}
    //     const res = await fetch("http://localhost:8000/api/validateJWT", {method: "POST", mode: "cors", headers:{"Content-Type": "application/json"},body: JSON.stringify(data)})
    //     if (await res.status === 200) {
    //       console.log("HOLA")
    //     } else if (res.status === 400) {
    //       navigate('/')
    //       console.log("SOMETHING")
    //     }
    //   }
    //   validator()
    // }, [])


  return (
     <div className="container">
       <div className="heading">
          <h3>Welcome to Early Onset Alzheimer's Detector</h3>
       </div>
       <div className='result'>
        {isLoading ? <p>Results are getting loaded</p>: <p>{parseFloat(result.replace('[[', '').replace(']]','').split(' ')[0])*100 + '% Chance of Alzheimer'
}</p>}
       </div>
       <div className="uploads">
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <button type="button" className="button" onClick={upload}>upload</button> 
      </div>
     </div>
  )
}

  
export default LandingFile