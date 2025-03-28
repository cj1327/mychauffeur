import React, { useContext, useEffect, useState } from "react";
import { CaptainDataContext } from "../context/CaptainContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CaptainProtectedWrapper = ({
    children
}) => {

    const token = localStorage.getItem('captain-token');
    const navigate = useNavigate();
    const { captain, setCaptain } = useContext(CaptainDataContext);
    const [ isLoading, setIsLoading ] = React.useState(true);


    useEffect(() => {
        if(!token) {
            navigate('/captain-login');
        }

        axios.get(`${import.meta.env.VITE_BASE_URL}/captain/profile`,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            if (response.status === 200) {
                setCaptain(response.data.captain);
                setIsLoading(false);
            }
        })
        .catch(err => {
            console.log(err);
            localStorage.removeItem('captain-token');
            navigate('/captain-login');
        })

    }, [token])

    if(isLoading) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    return (
        <>
            {children}
        </>
    )
}

export default CaptainProtectedWrapper;