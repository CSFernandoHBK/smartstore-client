import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { urlAPI } from "../../../constants/URLs";
import SellTable from "./SellTable";
import { useNavigate } from "react-router-dom";
import buttons from "../../../components/Buttons";

export default function ViewSells() {
    const [sellsList, setSellsList] = useState([]);
    const token = JSON.parse(localStorage.getItem("token"));
    const navigate = useNavigate();
    const {InsertNewButton} = buttons;

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
            <div>
                <h1>Vendas</h1>
                <InsertNewButton onClick={() => navigate("/sell/new")}>Nova venda</InsertNewButton>
            </div>
            <SellTable sellsList={sellsList}/>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;

    & > div:nth-child(1){
        display: flex;
        margin-bottom: 20px;
    }

    h1{
        font-size: 30px;
    }
`;