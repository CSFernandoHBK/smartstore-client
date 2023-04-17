import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { urlAPI } from "../../../constants/URLs";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { formatValue } from "../../../services";
import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import buttons from "../../../components/Buttons";

export default function OrderDetails(props) {
    const params = useParams();
    const orderId = params.orderId;
    const token = JSON.parse(localStorage.getItem("token"));
    const [info, setInfo] = useState();
    const {BackButton, DetailsButton, CancelButton} = buttons;
    const navigate = useNavigate();

    useEffect(() => {
        getOrderDetails(orderId)
    }, [])

    function getOrderDetails(orderId){
        const requisition = axios.get(`${urlAPI}order/${orderId}`,
        {headers: {"Authorization": `Bearer ${token}`}})
        requisition.then((res) => setInfo(res.data))
    }

    function deleteOrder(orderId){
        const requisition = axios.delete(`${urlAPI}order/${orderId}`,
        {headers: {"Authorization": `Bearer ${token}`}})
        requisition.then(() => navigate("/order"))
    }

    if(!info){
        return(
            <Container>
                <h1>Carregando...</h1>
            </Container>
        );  
    }

    return(
        <Container>
            <h1>Detalhes do pedido {orderId}</h1>
            <div>
                <DivWithSpan>
                    <span>Valor: {formatValue(info.value)}</span>
                    <span></span>
                </DivWithSpan>
                <DivWithSpan>
                    <span>Data: {dayjs(info.date).format('DD/MM/YYYY')}</span>
                    <span></span>
                </DivWithSpan>    
            </div>
            <DivWithSpan>
                <span>Status de rastreamento: FORTALEZA</span>
            </DivWithSpan>
            <div>
                <h3>Produtos:</h3>
                <table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nome</TableCell>
                            <TableCell>Quantidade</TableCell>
                            <TableCell>Preço</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {info.products.map((a) => 
                            <TableRow>
                                <TableCell>{a.product.name}</TableCell>
                                <TableCell>{a.quantity}</TableCell>
                                <TableCell>{formatValue(a.product.buyPrice)}</TableCell>
                                <DetailsButton onClick={() => navigate(`/product/${a.productId}`)}>+ detalhes</DetailsButton>
                            </TableRow>
                        )}
                    </TableBody>
                </table>
            </div>
            <BackButton onClick={() => navigate("/order")}>Voltar</BackButton>
            <CancelButton onClick={() => deleteOrder(orderId)}>Deletar pedido</CancelButton>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 100%;

    h1{
        margin-bottom: 20px;
        font-size: 30px;
    }
`;

const DivWithSpan = styled.div`
    display:flex;
    margin-bottom: 12px;
        span:nth-child(1){
            font-size: 20px;
            display: flex;
            align-items: center;
        }  
`