import axios from "axios";
import { urlAPI } from "../constants/URLs";

async function getTrackingCodeById(orderId){
    const token = JSON.parse(localStorage.getItem("token"));

    const requisition = axios.get(`${urlAPI}tracking/${orderId}`, 
    {headers: {"Authorization": `Bearer ${token}`}})
    requisition.then((res) => {console.log(res.data)})
}

const hooks = {
    getTrackingCodeById  
}

export default hooks;