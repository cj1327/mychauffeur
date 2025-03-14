import React from "react";

const WaitingForDriver = (props) => {
    return (
        <div>
            <h5 className="p-1 text-center w-[93%] absolute top-0" onClick={()=>{
                        props.setWaitingForDriver(false)
                    }}><i className=" text-3xl text-gray-400 ri-arrow-down-wide-line"></i>
            </h5>

            <div className="flex items-center justify-between">
                <img className="h-12" src="https://www.freeiconspng.com/thumbs/car-icon-png/compact-car-icon-5.png" alt="" />
                <div className="text-right">
                    <h2 className="text-lg font-medium">Jonty</h2>
                    <h4 className="text-xl font-semibold -mt-1 -mb-1">GJ06 AA 1909</h4>
                    <p className="text-sm text-gray-600">Honda Civic</p>
                </div>
            </div>

            <div className="flex gap-2 justify-between flex-col items-center">
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

export default WaitingForDriver;