import React, { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import SearchLoactionPanel from '../components/SearchLoactionPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmRide from '../components/ConfirmRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';
import axios from 'axios';

const Home = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false); 
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false)
  const [confirmRidePanel, setConfirmRidePanel] = useState(false)
  const [vehicleFound, setvehicleFound] = useState(false)
  const [waitingForDriver, setWaitingForDriver] = useState(false) 
  const [suggestion, setSuggestion] = useState([])
  const [isPickupField, setIsPickupField] = useState([])
  const [fare, setFare] = useState({});

  const vehiclePanelRef = useRef(null)
  const confirmRidePanelRef = useRef(null)
  const vehicleFoundRef = useRef(null)
  const waitingForDriverRef = useRef(null)
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);

  
const handlePickupChange = async (e) => {
  const inputValue = e.target.value.trim(); // Trim whitespace
  setPickup(inputValue);

  if (!inputValue) {
    setSuggestion([]); // Clear suggestions if input is empty
    return; // Do not make the API call
  }

  try {
    const response = await axios.get(${import.meta.env.VITE_BASE_URL}/maps/get-suggestions, {
      params: { input: inputValue },
      headers: {
        Authorization: Bearer ${localStorage.getItem('token')},
      },
    });
    setSuggestion(response.data); // Update suggestions
  } catch (error) {
    console.error('Error fetching pickup suggestions:', error);
  }
};
  
  const handleDestinationChange = async (e) => {
    setDestination(e.target.value);
    try {
      const response = await axios.get(${import.meta.env.VITE_BASE_URL}/maps/get-suggestions, {
        params: { input: e.target.value },
        headers: {
          Authorization: Bearer ${localStorage.getItem('token')},
        },
      });
      setSuggestion(response.data); // Update suggestions
    } catch (error) {
      console.error('Error fetching destination suggestions:', error);
    }
  };

  const handleSubmit = (e) => {   
    e.preventDefault();
  };

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%',
        padding: '24'
      })

      gsap.to(panelCloseRef.current, {
        opacity: 1
      })

    } else {
      gsap.to(panelRef.current, {
        height: '0%',
        padding:'0'
      })
      gsap.to(panelCloseRef.current,{
        opacity:0
      })
    }
  }, [panelOpen]);  

 useGSAP(function() {
      if(vehiclePanelOpen) {
        gsap.to(vehiclePanelRef.current, {   
          transform: 'translateY(0)'
        }) 
      }    
      else{
        gsap.to(vehiclePanelRef.current, {
          transform: 'translateY(100%)'
        }) 
      }   
 },[vehiclePanelOpen] )

 
 useGSAP(function() {
  if(confirmRidePanel) {
    gsap.to(confirmRidePanelRef.current, {   
      transform: 'translateY(0)'
    }) 
  }    
  else{
    gsap.to(confirmRidePanelRef.current, {
      transform: 'translateY(100%)'
    }) 
  }   
},[confirmRidePanel] )


useGSAP(function() {
  if(vehicleFound) {
    gsap.to(vehicleFoundRef.current, {
      transform: 'translateY(0)'
    })
  }
  else
  {
    gsap.to(vehicleFoundRef.current, {
      transform: 'translateY(100%)'
    })       

  }
}, [vehicleFound])

useGSAP(function() {
  if(waitingForDriver) {
    gsap.to(waitingForDriverRef.current, {
      transform: 'translateY(0)'
    })
  }
  else
  {
    gsap.to(waitingForDriverRef.current, {
      transform: 'translateY(100%)'
    })       

  }
}, [waitingForDriver])

async function findTrip() {
  setVehiclePanelOpen(true)
  setPanelOpen(false)

  const response = await axios.get(${import.meta.env.VITE_BASE_URL}/rides/get-fare, {
      params: { pickup, destination },
      headers: {
          Authorization: Bearer ${localStorage.getItem('token')}
      }
  })

  setFare(response.data)

}

  return (
    <div className="h-screen relative overflow-hidden">
      <img className="w-14 absolute left-5 top-5" alt="logo" src="/MyChauffeur_Logo.png" />

      {/* Background Image */}
      <div onClick={() =>{
        setVehiclePanelOpen(false)
      }} className="h-screen w-screen absolute">
        <img className="h-full w-full object-cover" src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" />
      </div>

      <div className="flex flex-col h-screen justify-end absolute top-0 w-full">
        <div className="h-[30%] bg-white p-5 relative">
          <h5 ref={panelCloseRef} onClick={()=>{
              setPanelOpen(false)
          }} 
          className=' opacity-0 absolute top-6 right-6 text-2xl'>
          <i className="ri-arrow-down-wide-fill"></i>
          </h5>
          <h4 className="text-3xl font-semibold">Find a trip</h4>
          <form onSubmit={handleSubmit}>
            <div className='absolute h-16 w-1 top-[30%] left-10 bg-gray-900 rounded-full'></div>
            <input 
               onClick= {() => {
                setPanelOpen(true);
                setIsPickupField(true);
               }}
               value={pickup}
              onChange={handlePickupChange}
              className="bg-[#eee] px-4 py-3 text-base rounded-lg w-full mt-3" 
              type="text" 
              placeholder="Add a pick-up location"
            />
            
            <input 
             onClick= {() => { 
              setPanelOpen(true);
              setIsPickupField(false);
             }}
              value={destination}
              onChange={handleDestinationChange}
              className="bg-[#eee] px-4 py-3 text-base rounded-lg w-full mt-3" 
              type="text" 
              placeholder="Enter your destination"
            />      
          </form>
          <button 
          onClick={findTrip}
          className='bg-black text-white px-4 py-2 rounded-lg mt-3 w-full' >
             Find a Trip   
          </button>
        </div>

         {/* Animated Panel */}
        <div ref={panelRef} className="bg-white h-0 p-0  ">
           <SearchLoactionPanel 
            suggestions={suggestion}
            setPanelOpen={setPanelOpen}
            setPickup={setPickup}
            setDestination={setDestination}
            activeField={isPickupField ? 'pickup' : 'destination'}     
          />
        </div>
      </div>
     
  <div ref={vehiclePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white pt-12 py-8 px-3'>
        <VehiclePanel fare= {fare} setConfirmRidePanel = {setConfirmRidePanel} setVehiclePanelOpen={setVehiclePanelOpen}/>
  </div>

  <div ref={confirmRidePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white pt-12 py-8 px-3'>
        <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setvehicleFound={setvehicleFound}/>  
  </div>

  
  <div ref={vehicleFoundRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white pt-12 py-8 px-3'>
       <LookingForDriver setvehicleFound={setvehicleFound}/>  
  </div>

  <div ref={waitingForDriverRef} className='fixed w-full z-10 bottom-0 bg-white pt-12 py-8 px-3'>
    <WaitingForDriver setWaitingForDriver={setWaitingForDriver}/>
  </div>
  
  </div>
  );
}

export default Home;