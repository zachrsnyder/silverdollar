import { useEffect, createElement } from "react";
import Facebook from "./components/Facebook";

export default function Home() {
  return (
    <div>
      <div className='flex h-[61rem] '>
        <div className="bg-blue-800">
          <img src="/images/foh-2.jpg" className='block w-[1200px] h-full' />
        </div>
        <div className="w-full  bg-secondary bg-opacity-40 dope-ass-gradient h-full shadow-[-15px_0_15px_rgba(0,0,0,.2)] flex justify-center items-center">
          <Facebook/>
        </div>

      </div>
      
    </div>
  );
}
