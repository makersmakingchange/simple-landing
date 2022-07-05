import Head from "next/head";
import Image from "next/image";
import React, {
  useState,
  useEffect
} from "react";
const axios = require('axios').default;

export default function Home() {
  const [directories , setDirectories] = useState([]);
  
  useEffect(() => {
    axios.get('/api/github?user=makersmakingchange').then((respose) => {
      setDirectories(respose.data.directories);      
    }).catch(() => {});
  }, []);

  return ( 
  <div className = "" >
    <div className = "" >
    <h1 className = "" > MMC Simple Device Landing </h1> 
    <input type = "text"
    className = ""
    placeholder = "Search docs" />
    <div>
    
    <div> Dual Mono - switch Adapter </div> 
    </div> 
    </div> 
    <div className = "" >
    <h1 className = "" > Welcome to MMC Simple Device Landing Page </h1> 
    <ul>
       {
        directories.map((file, i) => {
          console.log(file.files);
          return(
            <p key={i}>{file.name}</p>
          )
        })
       }
    </ul>    
    </div>
    </div>
  )
}