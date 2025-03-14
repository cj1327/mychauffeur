import React from "react";  

const LookingForDriver = (props) => {
    return (
        <div>
            <h5 className="p-1 text-center w-[93%] absolute top-0" onClick={()=>{
                        props.setVehicleFound(false)
                    }}><i className=" text-3xl text-gray-400 ri-arrow-down-wide-line"></i>
            </h5>
            <h3 className="text-2xl font-semibold mb-5">Looking for a driver</h3>

            <div className="flex gap-2 justify-between flex-col items-center">
            <img className="h-20" src="https://www.freeiconspng.com/thumbs/car-icon-png/compact-car-icon-5.png" alt="" />
            <div className="w-full mt-5">
                <div className="flex items-center gap-5 p-3 border-b-2 border-gray-100">
                    <i className="text-lg ri-map-pin-line"></i>
                    <div>
                        <h3 className="text-lg font-medium">562/11-A</h3>
                        <p className="text-sm -mt-1 text-gray-600">Flora Fountain, Mumbai</p>
                    </div>
                </div>
                <div className="flex items-center gap-5 p-3 border-b-2 border-gray-100">
                    <i className="text-lg ri-map-pin-fill"></i>
                    <div>
                        <h3 className="text-lg font-medium">129/B</h3>
                        <p className="text-sm -mt-1 text-gray-600">Galaxy Apartments, Mumbai</p>
                    </div>
                </div>
                <div className="flex items-center gap-5 p-3">
                    <i className="text-lg ri-currency-line"></i>
                    <div>
                        <h3 className="text-lg font-medium">129/B</h3>
                        <p className="text-sm -mt-1 text-gray-600">Galaxy Apartments, Mumbai</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default LookingForDriver;