import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { blue } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import hooks from "../../../hooks";
import { formatDate, formatValue } from "../../../services";
import TableLine from "./TableLine";
import axios from "axios";
import { urlAPI } from "../../../constants/URLs";
import TrackingArea from "./TrackingArea";

export default function OrderTable(props) {
    const {orderList} = props;
    const navigate = useNavigate();
    const [isChecked, setIsChecked] = useState(false);
    const token = JSON.parse(localStorage.getItem("token"));

    useEffect( () => {
        async function info(id){
            const code = await getTrackingInfo(id)
            console.log(code);
        }
        info(1);
    }, [])

    function handleCheckboxDone(event){
        setIsChecked(event.target.checked)
    }

    async function getTrackingInfo(id){
        let trackingCode;

        const requisition = axios.get(`${urlAPI}tracking/${id}`, 
        {headers: {"Authorization": `Bearer ${token}`}})
        requisition.then((res) => {return (res.data)})
    }

    return(
        <Container>
            <table>
                <TableHead>
                    <TableRow style={{ backgroundColor: 'lightgray' }}>
                        <TableCell style={{ border: '1.8px solid black' }}>Id</TableCell>
                        <TableCell style={{ border: '1px solid black' }}>Data</TableCell>
                        <TableCell style={{ border: '1px solid black' }}>Valor</TableCell>
                        <TableCell style={{ border: '1px solid black' }}>Rastreamento</TableCell>
                        <TableCell style={{ border: '1px solid black' }}>Recebido?</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {orderList.map((a) =>
                    <>
                    <TableRow>
                        <TableCell style={{ border: '1px solid black' }}>{a.id}</TableCell>
                        <TableCell style={{ border: '1px solid black' }}>{formatDate(a.date)}</TableCell>
                        <TableCell style={{ border: '1px solid black' }}>{formatValue(a.value)}</TableCell>
                        <TableCell style={{ border: '1px solid black' }}><TrackingArea id={a.id}/></TableCell>
                        <TableCell style={{ border: '1px solid black' }}><Checkbox type="checkbox" checked={isChecked} onChange={handleCheckboxDone}/></TableCell>
                        <TableCell >
                            <ButtonMore onClick={() => navigate(`/order/${a.id}`)} >Saiba mais</ButtonMore>
                        </TableCell>
                    </TableRow>
                    </>
                )}
                </TableBody>
            </table>
            <ButtonNew onClick={() => navigate("/order/new")}>Inserir novo pedido</ButtonNew>
        </Container>
    );
};

const Container = styled.div`
    width: 800px !important;

`;

const ButtonNew = styled.button`
    width: 100%;
    background: #28A745;
    border-radius: 8px;
    height: 56px;
    font-weight: 700;
    font-size: 18px;
    line-height: 100%;
    color: #FFFFFF;
    margin-top: 20px;
`

const ButtonMore = styled(ButtonNew)`
    height: 30px;
`

const Checkbox = styled.input`
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
`