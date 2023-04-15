import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { urlAPI } from "../../../constants/URLs";
import OrderTable from "./OrderTable";

export default function ViewOrders() {
    const [orderList, setOrderList] = useState([]);
    const token = JSON.parse(localStorage.getItem("token"));

    useEffect(() => {
      const requisition = axios.get(`${urlAPI}order`,
      {headers: {"Authorization": `Bearer ${token}`}})
      requisition.then((res) => {setOrderList(res.data)})
    }, [])


    if(orderList.length === 0){
        return(
            <div>
                Carregando
            </div>
        )
    }

    return(
        <Container>
            <h1>Pedidos</h1>
            <OrderTable orderList={orderList}/>
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

    & > div:nth-child(2){
        width: 80vw;
    }
`;
