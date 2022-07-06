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
      let directories = respose.data.directories;
      let dirs = [];
      for (let i = 0; i < directories.length; i++) {
        if (directories[i].directoryName != 'repoRoot'){
          dirs.push(directories[i])
        }
      }
      setDirectories(dirs)
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
    <h1 className = "" > Welcome  to MMC Simple Device Landing Page </h1> 
    <ul>
       {
        directories.map((content, i) => {                  
          return(
            <div key={i}>
            <p key={i}>{content.directoryName}</p>  
            {
            (typeof(content.files) == 'object') ?
              <div>
                {
                  content.files.map((file, j) =>
                    <p key={j}>{file.name}</p>
                  )
                }
                </div>
                :
                null
       }
          
           </div> 
          )
           })
           
       }
    </ul>    
    </div>
    </div>
  )
}