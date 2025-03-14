import React from "react";

const VehiclePanel = (props) => {
    return (
        <div>
            <h5 className="p-1 text-center w-[93%] absolute top-0" onClick={()=>{
                        props.setVehiclePanel(false)
                    }}><i className=" text-3xl text-gray-400 ri-arrow-down-wide-line"></i></h5>
                <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>
                <div onClick={()=>{
                    props.setConfirmRidePanel(true),
                    props.setVehiclePanel(false)
                }} className="flex active:border-2 border-black mb-2 rounded-xl w-full p-3 items-center justify-between">
                    <img className="h-20" src="https://www.freeiconspng.com/thumbs/car-icon-png/compact-car-icon-5.png" alt="car logo" />
                    <div className="ml-2 w-1/2">
                        <h4 className="font-medium text-base">MyChauffeurGO <span><i className="ri-user-3-fill"></i>4</span></h4>
                        <h5 className="font-medium text-sm">2 mins away</h5>
                        <p className="font-normal text-sm text-gray-600">Affordable, compact rides</p>
                    </div>
                    <h2 className="text-lg font-semibold">$15.10</h2>
                </div>
                <div onClick={()=>{
                    props.setConfirmRidePanel(true),
                    props.setVehiclePanel(false)
                }} className="flex active:border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between">
                    <img className="h-16" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648177797/assets/fc/ddecaa-2eee-48fe-87f0-614aa7cee7d3/original/Uber_Moto_312x208_pixels_Mobile.png" alt="car logo" />
                    <div className="ml-2 w-1/2">
                        <h4 className="font-medium text-base">Motorcycle <span><i className="ri-user-3-fill"></i>1</span></h4>
                        <h5 className="font-medium text-sm">3 mins away</h5>
                        <p className="font-normal text-sm text-gray-600">Affordable, motorcycle rides</p>
                    </div>
                    <h2 className="text-lg font-semibold">$7.40</h2>
                </div>
                <div onClick={()=>{
                    props.setConfirmRidePanel(true),
                    props.setVehiclePanel(false)
                }} className="flex active:border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between">
                    <img className="h-16" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="car logo" />
                    <div className="ml-2 w-1/2">
                        <h4 className="font-medium text-base">MyChauffeurAuto <span><i className="ri-user-3-fill"></i>3</span></h4>
                        <h5 className="font-medium text-sm">2 mins away</h5>
                        <p className="font-normal text-sm text-gray-600">Affordable, Auto Rickshaw rides</p>
                    </div>
                    <h2 className="text-lg font-semibold">$10.40</h2>
                </div>
        </div>
    );
}

export default VehiclePanel;