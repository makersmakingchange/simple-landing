import Head from "next/head";
import Image from "next/image";
import React, {
  useState
} from "react";
const axios = require('axios').default;

export default function Home() {
  const [dictionaries, setDictionaries] = useState([]);
  const [files, setFiles] = useState([]);
  useEffect(() => {
    axios.get('/api/github?user=makersmakingchange').then((respose) => {
      setDictionaries(respose.data.dictionaries);
      setFiles(respose.data.files);
      console.log(respose.data.files)
    }).catch(() => {});
  }, []);

  return ( <
    div className = "" >
    <
    div className = "" >
    <
    h1 className = "" > MMC Simple Device Landing < /h1> <
    input type = "text"
    className = ""
    placeholder = "Search docs" / >
    <
    div >
    <
    div > Dual Mono -
    switch Adapter < /div> <
    /div> <
    /div> <
    div className = "" >
    <
    h1 className = "" > Welcome to MMC Simple Device Landing Page < /h1> <
    ul > {
      files.map(file => ( <
        li > {
          file
        } < /li>
      ))
    } <
    li > < a href = "https://github.com/makersmakingchange/Switch-Adapter-DualMono-Stereo/raw/main/Build_Files/3D_Printing_Files/Bottom.stl" > Bottom.stl < /a></li >
    <
    li > < a href = "https://github.com/makersmakingchange/Switch-Adapter-DualMono-Stereo/raw/main/Build_Files/3D_Printing_Files/Top.stl" > Top.stl < /a></li >
    <
    li > < a href = "https://github.com/makersmakingchange/Switch-Adapter-DualMono-Stereo/raw/main/Design_Files/SwitchAdapter-Dual-Mono-Stereo_v11.f3z" > SwitchAdapter - Dual - Mono - Stereo_v11.f3z < /a></li >
    <
    li > < a href = "https://github.com/makersmakingchange/Switch-Adapter-DualMono-Stereo/raw/main/Documentation/Dual-Mono-Stereo_Adapter_3D_Print_Guide_v1.0.pdf" > Dual - Mono - Stereo_Adapter_3D_Print_Guide_v1 .0.pdf < /a></li >

    <
    /ul>


    <
    /div>



    <
    /div>
  )
}