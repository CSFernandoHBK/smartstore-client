import { TableRow, TableCell } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { urlAPI } from "../../../constants/URLs";
import hooks from "../../../hooks";
import { formatDate, formatValue } from "../../../services";
import TrackingArea from "./TrackingArea";

export default function TableLine(props) {
    const {id, date, value} = props.orderInfo;
    const [trackingCode, setTrackingCode] = useState()
    const [isChecked, setIsChecked] = useState(false);
    const navigate = useNavigate();
    const token = JSON.parse(localStorage.getItem("token"));

    async function getTrackingCode(){
        const requisition = axios.get(`${urlAPI}tracking/${id}`, 
        {headers: {"Authorization": `Bearer ${token}`}})
        requisition.then((res) => {setTrackingCode(res.data)})
        .catch((err) => console.log(err))
    }

    async function getTrackingInfo(){
        const requisition = axios.get(`${urlAPI}tracking`, 
        {headers: {"Authorization": `Bearer ${token}`}})
        requisition.then((res) => {setTrackingCode(res.data)})
    }

    function handleCheckboxDone(event){
        setIsChecked(event.target.checked)
    }

    return(
        <TableRow>
            <TableCell>{id}</TableCell>
            <TableCell>{formatDate(date)}</TableCell>
            <TableCell>{formatValue(value)}</TableCell>
            <TableCell><TrackingArea/></TableCell>
            <TableCell><Checkbox type="checkbox" checked={isChecked} onChange={handleCheckboxDone}/></TableCell>
            <TableCell>
                <button onClick={() => navigate(`/order/${id}`)}>Saiba mais</button>
            </TableCell>
        </TableRow>
    )
}

const Checkbox = styled.input`
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
`
