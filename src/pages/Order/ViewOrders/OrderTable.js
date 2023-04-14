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
            {/*<table>
                <TableHead>
                    <TableRow style={{ backgroundColor: 'lightgray' }}>
                    <TableCell style={{ border: '1px solid black' }}>Cabeçalho 1</TableCell>
                    <TableCell style={{ border: '1px solid black' }}>Cabeçalho 2</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow style={{ backgroundColor: 'white' }}>
                    <TableCell style={{ border: '1px solid black' }}>Valor 1</TableCell>
                    <TableCell style={{ border: '1px solid black' }}>Valor 2</TableCell>
                    </TableRow>
                </TableBody>
            </table>*/}
            <table>
                <TableHead>
                    <TableRow style={{ backgroundColor: 'lightgray' }}>
                        <TableCell>Id</TableCell>
                        <TableCell>Data</TableCell>
                        <TableCell>Valor</TableCell>
                        <TableCell>Rastreamento</TableCell>
                        <TableCell>Recebido?</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody style={{ border: '1px solid black' }}>
                {orderList.map((a) =>
                    <>
                    <TableRow>
                        <TableCell style={{ border: '1px solid black' }}>{a.id}</TableCell>
                        <TableCell style={{ border: '1px solid black' }}>{formatDate(a.date)}</TableCell>
                        <TableCell>{formatValue(a.value)}</TableCell>
                        <TableCell><TrackingArea id={a.id}/></TableCell>
                        <TableCell><Checkbox type="checkbox" checked={isChecked} onChange={handleCheckboxDone}/></TableCell>
                        <TableCell>
                            <button onClick={() => navigate(`/order/${a.id}`)}>Saiba mais</button>
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

`;

const ButtonNew = styled.button`
    width: 100%;
    height: 50px;
`

const Checkbox = styled.input`
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
`