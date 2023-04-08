import { TableRow, TableCell } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { urlAPI } from "../../../constants/URLs";
import hooks from "../../../hooks";

export default function TableLine(props) {
    const {id, date, value} = props.orderInfo;
    const [trackingCode, setTrackingCode] = useState("Carregando...")
    const navigate = useNavigate();
    const token = JSON.parse(localStorage.getItem("token"));

    useEffect( () => {
        getTrackingCode();
      }, [])

    async function getTrackingCode(){
        const requisition = axios.get(`${urlAPI}tracking/${id}`, 
        {headers: {"Authorization": `Bearer ${token}`}})
        requisition.then((res) => {setTrackingCode(res.data)})
    }

    async function getTrackingInfo(){
        const requisition = axios.get(`${urlAPI}tracking`, 
        {headers: {"Authorization": `Bearer ${token}`}})
        requisition.then((res) => {setTrackingCode(res.data)})    }

    return(
        <TableRow>
            <TableCell>{id}</TableCell>
            <TableCell>{date}</TableCell>
            <TableCell>{value}</TableCell>
            <TableCell>[1,2,3,4]</TableCell>
            <TableCell>{trackingCode}</TableCell>
            <TableCell>Checkbox</TableCell>
            <TableCell>
                <button onClick={() => navigate(`/order/${id}`)}>Saiba mais</button>
            </TableCell>
        </TableRow>
    )
}