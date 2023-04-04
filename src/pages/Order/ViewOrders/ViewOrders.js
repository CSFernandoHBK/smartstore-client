import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import SideBar from "../../../components/Sidebar/SideBar";
import TopBar from "../../../components/TopBar";
import { urlAPI } from "../../../constants/URLs";
import hooks from "../../../hooks";
import OrderTable from "./OrderTable";

export default function ViewOrders() {
    const [orderList, setOrderList] = useState([]);
    const token = JSON.parse(localStorage.getItem("token"));

    useEffect(() => {
      const requisition = axios.get(`${urlAPI}order`,
      {headers: {"Authorization": `Bearer ${token}`}})
      requisition.then((res) => setOrderList(res.data))
    }, [])


    if(orderList.length === 0){
        return(
            <div>
                Carregando
            </div>
        )
    }

    return(
        <>
            <Container>
                <SideBar/>
                <div>
                    <TopBar/>
                    <OrderTable orderList={orderList}/>
                </div>
            </Container>
        </>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100vh;
    width: 100vw;

    & > div:nth-child(2){
        width: 80vw;
        padding-top: 80px;
    }
`;
