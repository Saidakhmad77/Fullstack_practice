import { useState, useEffect } from "react";
import axios from "axios";


function Sam() {
    const [data, setData] = useState(
      {
        "name": "",
        "career": "",
        "date": ""
      }
    )
   
    useEffect(() => {
      axios.get('http://127.0.0.1:5000/api/sam')
      .then(response => response.data)
      .then(data => setData(data));
    }, [])
  
    return (
      <>
        <div>Test</div>
        <p>{data.name}</p>
        <p>{data.date}</p>
        <p>{data.career}</p>
          
      </>
    )
  }
export default Sam