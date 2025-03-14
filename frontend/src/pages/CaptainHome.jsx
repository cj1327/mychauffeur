import React from "react";
import { Link } from "react-router-dom";
import 'remixicon/fonts/remixicon.css'
const CaptainHome = () => {
    return (
        <div className="h-screen">
            <div className="fixed p-6 top-0 flex items-center justify-between w-screen">
                <img className='w-15 absolute left-5 top-5 rounded-full object-cover' src="/MyChauffeur_Logo.png" alt="logo" />
                
                <Link to='/captain/logout' className="fixed block right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full z-10">
                    <i className="text-xl font-medium ri-logout-box-r-line"></i>
                </Link>
            </div>
            <div className="h-3/5">
                <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="map-gif" />
            </div>
            <div className="h-2/5 p-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start gap-3">
                        <img className="h-10 w-10 rounded-full object-cover" src="https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <h4 className="text-lg font-medium">Harsh Patel</h4>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold">$87.9</h4>
                        <p className="text-sm text-gray-600">Earned</p>
                    </div>
                </div>
                <div className="flex p-3 mt-6 bg-gray-100 rounded-xl justify-center gap-5 items-start">
                    <div className="text-center">
                        <i className="text-3xl mb-2 font-thin ri-timer-2-line"></i>
                        <h5 className="text-lg font-medium">6.2</h5>
                        <p className="text-sm text-gray-600">Hours Online</p>
                    </div>
                    <div className="text-center">
                        <i className="text-3xl mb-2 font-thin ri-speed-up-line"></i>
                        <h5 className="text-lg font-medium">6.2</h5>
                        <p className="text-sm text-gray-600">Hours Online</p>
                    </div>
                    <div className="text-center">
                        <i className="text-3xl mb-2 font-thin ri-booklet-line"></i>
                        <h5 className="text-lg font-medium">6.2</h5>
                        <p className="text-sm text-gray-600">Hours Online</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CaptainHome;