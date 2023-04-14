import axios from "axios";
import { useState, useEffect } from "react"
import { urlAPI } from "../../../constants/URLs";

export default function TrackingArea(props) {
    const {id} = props;
    const [trackingCode, setTrackingCode] = useState();
    const token = JSON.parse(localStorage.getItem("token"));

    useEffect(() => {
        getTrackingCode(id);
    }, [])

    async function getTrackingCode(id){
        const requisition = axios.get(`${urlAPI}tracking/${id}`, 
        {headers: {"Authorization": `Bearer ${token}`}})
        requisition.then((res) => {setTrackingCode(res.data)})
        .catch((err) => console.log(err))
    }

    if(!trackingCode){
        return(
            <span>Não encontrado</span>
        )
    }

    return(
        <span>{trackingCode}</span>
    )
}