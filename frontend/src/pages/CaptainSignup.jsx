import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainSignup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userData, setUserData] = useState({})
    
    const submitHandler = (e) => {
        e.preventDefault()
        setUserData({
            fullName:{
                firstName:firstName,
                lastName:lastName
            },
            email:email,
            password:password
        });
        setEmail('');
        setPassword('');
        setFirstName('');
        setLastName('');
        }
    return (
        <div>
            <div className="py-5 px-5 h-screen flex flex-col justify-between">
            <div>
            <img className='w-20 mb-10' src="/MyChauffeur_Logo.png" alt="logo" />
            <form onSubmit={(e) => {
                submitHandler(e);
            }}>

                <h3 className="text-base font-medium mb-2">What's our Captain's name</h3>
                <div className="flex gap-3 mb-6">
                <input 
                    required
                    className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-sm"
                    type="text" 
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) =>{ 
                        setFirstName(e.target.value)
                    }}
                />
                <input 
                    required
                    className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-sm"
                    type="text" 
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) =>{ 
                        setLastName(e.target.value)
                    }}
                />
                </div>

                <h3 className="text-base font-medium mb-2">What's our Captain's email</h3>
                <input 
                required
                className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-sm"
                type="email" 
                placeholder="email@example.com"
                value={email}
                onChange={(e) =>{ 
                    setEmail(e.target.value)
                }}
                />

                <h3 className="text-base font-medium mb-2">Enter Password</h3>
                <input 
                required 
                className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-sm"
                type="password" 
                placeholder="password"
                value={password}
                onChange={(e) =>{ 
                    setPassword(e.target.value)
                }}
                />

                <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base">Create Account</button>

                <p className='text-center'>Alreay have an Account? <Link to='/captain-login' className='text-blue-600'>Login here</Link></p>
            </form>
            </div>
            <div>
                <p className="text-[10px] leading-tight ">This site is protected by reCAPTCHA and <span className="underline">Google Privacy Policy</span> and <span className="underline">Terms of Service</span> apply.</p>
            </div>
        </div>
        </div>
    ) 
}

export default CaptainSignup;