import React from "react";
import 'remixicon/fonts/remixicon.css'

const LocationSearchPanel = (props) => {



    // sample array for location 
    const locations = [
        "24B, Near Zeus Cafe, BKC Complex, Mumbai",
        "89A, Near Flora fountain, Vile Parle, Mumbai",
        "46, Near New Era School, Worli Complex, Mumbai",
        "98, Near Bandra Terminus, Mannat, Mumbai",
        "34, Near Bandra Lookout, Galaxy Apartments, Mumbai",
    ]
    return (
        <div>
            {/* this is just a sample data */}

            {
                locations.map(function(elem, idx){
                    return <div key={idx} onClick={()=>{
                        props.setVehiclePanel(true)
                        props.setPanelOpen(false)
                    }} className="flex gap-2 border-2 border-gray-100 active:border-black p-3 rounded-xl items-center my-2 justify-start">
                    <h2 className="bg[#eee] h-10 w-16 flex items-center justify-center rounded-full"><i className="ri-map-pin-line"></i></h2>
                    <h4 className="font-medium">{elem}</h4>
                </div>
                })
            }
            
        </div>
    );
}

export default LocationSearchPanel;