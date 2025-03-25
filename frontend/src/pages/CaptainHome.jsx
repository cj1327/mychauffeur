import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import 'remixicon/fonts/remixicon.css';
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";

const CaptainHome = () => {
  const [ridePopupPanel, setRidePopupPanel] = useState(true);
  const [confirmRidePopupPanel, setConfirmRidePopupPanel] =useState(false)

  const ridePopupPanelRef = useRef(null);
  const confirmRidePopupRef = useRef(null)

  useGSAP(() => {
    if (ridePopupPanel) {
      gsap.to(ridePopupPanelRef.current, {
        transform: 'translateY(0)'
      });
    } else {
      gsap.to(ridePopupPanelRef.current, {
        transform: 'translateY(100%)'
      });
    }
  }, [ridePopupPanel]);

  useGSAP(() => {
    if (confirmRidePopupPanel) {
      gsap.to(confirmRidePopupRef.current, {
        transform: 'translateY(0)'
      });
    } else {
      gsap.to(confirmRidePopupRef.current, {
        transform: 'translateY(100%)'
      });
    }
  }, [confirmRidePopupPanel]);


  return (
    <div className="h-screen">
      <div className="fixed p-6 top-0 flex items-center justify-between w-screen">
        <img className="w-15 absolute left-5 top-5 rounded-full object-cover" src="/MyChauffeur_Logo.png" alt="logo" />
        <Link to="/captain/logout" className="fixed block right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full z-10">
          <i className="text-xl font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className="h-3/5">
        <img className="h-full w-full object-cover" src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="map-gif" />
      </div>
      <div className="h-2/5 p-6">
        <CaptainDetails />
      </div>
      <div ref={ridePopupPanelRef} className="fixed z-10 bottom-0 translate-y-full px-3 bg-white w-full py-6 pt-12">
        <RidePopUp setRidePopupPanel={setRidePopupPanel} setConfirmRidePopupPanel={setConfirmRidePopupPanel} />
      </div>
      <div ref={confirmRidePopupRef} className="fixed z-10 bottom-0 h-screen translate-y-full px-3 bg-white w-full py-6 pt-12">
        <ConfirmRidePopUp setConfirmRidePopupPanel={setConfirmRidePopupPanel} setRidePopupPanel={setRidePopupPanel} />
      </div>
    </div>
  );
};

export default CaptainHome;
