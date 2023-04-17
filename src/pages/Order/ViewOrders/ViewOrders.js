import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { urlAPI } from "../../../constants/URLs";
import OrderTable from "./OrderTable";
import { useNavigate } from "react-router-dom";
import buttons from "../../../components/Buttons";

export default function ViewOrders() {
    const [orderList, setOrderList] = useState([]);
    const token = JSON.parse(localStorage.getItem("token"));
    const navigate = useNavigate();
    const {InsertNewButton} = buttons;

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
            <div>
                <h1>Pedidos</h1> 
                <InsertNewButton onClick={() => navigate("/order/new")}>Inserir novo pedido</InsertNewButton>  
            </div>
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

    & > div:nth-child(1){
        display: flex;
        margin-bottom: 20px;
    }

    h1{
        font-size: 30px;
    }

    & > div:nth-child(2){
        width: 80vw;
    }
`;