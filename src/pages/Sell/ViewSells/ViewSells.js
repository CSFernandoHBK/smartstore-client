import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { urlAPI } from "../../../constants/URLs";
import SellTable from "./SellTable";

export default function ViewSells() {
    const [sellsList, setSellsList] = useState([]);
    const token = JSON.parse(localStorage.getItem("token"));

    useEffect(() => {
        const requisition = axios.get(`${urlAPI}finance/sells`,
        {headers: {"Authorization": `Bearer ${token}`}})
        requisition.then((res) => {setSellsList(res.data)})
      }, [])    

    if(sellsList.length === 0){
        return(
            <div>
                Carregando
            </div>
        )
    }

    return(
        <Container>
            <h1>Vendas</h1>
            <SellTable sellsList={sellsList}/>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;

    h1{
        margin-bottom: 20px;
        font-size: 30px;
    }
`;