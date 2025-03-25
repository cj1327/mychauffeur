import { useGSAP } from '@gsap/react'
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import gsap from 'gsap';
import FinishRide from '../components/FinishRide';

const CaptainRiding = () => {
  
    const [ finishRidePanel, setFinishRidePanel ] = useState(false)
    const finishRidePanelRef = useRef(null)

    useGSAP(function () {
        if (finishRidePanel) {
            gsap.to(finishRidePanelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(finishRidePanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [ finishRidePanel ])


  return (
    <div className="h-screen relative">
    <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
        <img className="w-15 absolute left-5 top-5 rounded-full object-cover" src="/MyChauffeur_Logo.png" alt="logo" />
        <Link to="/captain/logout" className="fixed block right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full z-10">
          <i className="text-xl font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className="h-3/5">
        <img className="h-full w-full object-cover" src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="map-gif" />
     </div>
    
     <div className='h-1/5 p-6 flex items-center justify-between relative bg-yellow-400 pt-10'
               
               onClick={() => {
                   setFinishRidePanel(true)
                }}
            >
                <h5 className='p-1 text-center w-[90%] absolute top-0' onClick={() => {

                }}><i className="text-3xl text-gray-800 ri-arrow-up-wide-line"></i></h5>
                <h4 className='text-xl font-semibold'>{'4 KM away'}</h4>
                <button className=' bg-green-600 text-white font-semibold p-3 px-10 rounded-lg'>Complete Ride</button>
            </div>
            <div ref={finishRidePanelRef} className='fixed w-full z-[500] bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>
              <FinishRide setFinishRidePanel={setFinishRidePanel}/>
            </div>
        </div>
  )
}

export default CaptainRiding
