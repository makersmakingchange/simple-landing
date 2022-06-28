import Head from "next/head";
import Image from "next/image";
const axios = require('axios').default;

export default function Home() {

  axios.get('/api/github?user=makersmakingchange').then((respose) =>{
    for(let i = 0; i < respose.data.length; i++){
      console.log(respose.data[i].name)
    }
  }).catch(()=>{});
  return ( 
    <div className="bg-red-200 w-full h-full flex" >
      <div className="bg-gray-500 h-screen">
        <h1 className=""> MMC Simple Device Landing</h1>
        <input type="text" className="" placeholder="Search docs"/>
        <div>
          <div>Dual Mono-switch Adapter</div>
        </div>
      </div>
      <div className="bg-gray-100 w-screen">
        <h1 className="text-xl p-6">Welcome to MMC Simple Device Landing Page</h1>
        <ul>
          <li><a href="https://github.com/makersmakingchange/Switch-Adapter-DualMono-Stereo/blob/main/Build_Files/3D_Printing_Files/Bottom.stl">Bottom.stl</a></li>
          <li><a href="https://github.com/makersmakingchange/Switch-Adapter-DualMono-Stereo/blob/main/Build_Files/3D_Printing_Files/Top.stl">Top.stl</a></li>
          <li><a href="https://github.com/makersmakingchange/Switch-Adapter-DualMono-Stereo/blob/main/Design_Files/SwitchAdapter-Dual-Mono-Stereo_v11.f3z">SwitchAdapter-Dual-Mono-Stereo_v11.f3z</a></li>
          <li><a href="https://github.com/makersmakingchange/Switch-Adapter-DualMono-Stereo/raw/main/Documentation/Dual-Mono-Stereo_Adapter_3D_Print_Guide_v1.0.pdf">Dual-Mono-Stereo_Adapter_3D_Print_Guide_v1.0.pdf</a></li>
          
       </ul>
      

      </div>
      
    

    </div>
  ) 
}
