import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";
import { urlAPI } from "../../../constants/URLs";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { formatValue } from "../../../services";

export default function OrderDetails(props) {
    const params = useParams();
    const orderId = params.orderId;
    const token = JSON.parse(localStorage.getItem("token"));
    const [info, setInfo] = useState();

    useEffect(() => {
        getOrderDetails(orderId)
    }, [])

    function getOrderDetails(orderId){
        const requisition = axios.get(`${urlAPI}order/${orderId}`,
        {headers: {"Authorization": `Bearer ${token}`}})
        requisition.then((res) => setInfo(res.data))
    }

    if(!info){
        return(
            <Container>
                <h1>Carregando...</h1>
            </Container>
        );  
    }

    console.log(info)

    return(
        <Container>
            <h1>Detalhes do pedido {orderId}</h1>
            <div>
                <div>
                    <span>Valor:</span>
                    <span>{formatValue(info.value)}</span>
                </div>
                <div>
                    <span>Data:</span>
                    <span>{dayjs(info.date).format('DD/MM/YYYY')}</span>
                </div>    
            </div>
            <div>
                <span>Produtos:</span>
            </div>
            <div>
                <span>Status de rastreamento:</span>
                <span>CURITIBA</span>
            </div>
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

    div:nth-child(2){
        & > div{
            display:flex;

        span:nth-child(1){
            font-size: 18px;
        }
        span:nth-child(2){
            font-size: 20px;
        }
    }
    }

    
`;