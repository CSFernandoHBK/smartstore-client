import axios from "axios";
import { useState, useEffect } from "react"
import { urlAPI } from "../../../constants/URLs";

export default function TrackingArea(props) {
    const {id} = props;
    const [trackingCode, setTrackingCode] = useState();
    const [trackingInfo, setTrackingInfo] = useState();
    const token = JSON.parse(localStorage.getItem("token"));

    useEffect(() => {
        getTrackingCode(id)
    }, [])

    async function getTrackingCode(id){
        const requisition = axios.get(`${urlAPI}tracking/${id}`, 
        {headers: {"Authorization": `Bearer ${token}`}})
        requisition.then((res) => {setTrackingCode(res.data);getTrackingInfo(res.data)})
        .catch((err) => console.log(err));
    }

    async function getTrackingInfo(code){
        const requisition = axios.post(`${urlAPI}tracking`,
        [code], {headers: {"Authorization": `Bearer ${token}`}})
        requisition.then((res) => {setTrackingInfo(res.data)})
        .catch((err) => console.log(err))
    }

    if(!trackingCode || !trackingInfo){
        return(
            <span>Não encontrado</span>
        )
    }

    if(trackingInfo[0].codigo==="BDE"){
        return(
            <span>Entregue</span>
        )
    }

    return(
        <span>{`${trackingInfo[0].unidade.endereco.cidade} -> ${trackingInfo[0].unidadeDestino.endereco.cidade}`}</span>
    )
}