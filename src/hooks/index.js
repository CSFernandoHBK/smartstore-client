import axios from "axios";
import { useState } from "react";
import { urlAPI } from "../constants/URLs";

async function useGetTrackingCodeById(orderId){
    const [trackingCode, setTrackingCode] = useState();
    const token = JSON.parse(localStorage.getItem("token"));

    const requisition = axios.get(`${urlAPI}tracking`, 
    {headers: {"Authorization": `Bearer ${token}`}})
    requisition.then((res) => {setTrackingCode(res.data)})

    console.log(trackingCode);
    return(trackingCode);
}

async function getStatusByTrackingCode(){
    
}

const hooks = {
    useGetTrackingCodeById,
    getStatusByTrackingCode  
}

export default hooks;