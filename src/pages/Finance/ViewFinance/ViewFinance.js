import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { urlAPI } from "../../../constants/URLs";
import FinanceTable from "./FinanceTable";

export default function ViewFinance() {
    const [financeInfo, setFinanceInfo] = useState([]);
    const token = JSON.parse(localStorage.getItem("token"));

    useEffect(() => {
      getFinance();
    }, [])
    

    function getFinance(){
        const requisition = axios.get(`${urlAPI}finance`, 
        {headers: {"Authorization": `Bearer ${token}`}})
        requisition.then((res) => setFinanceInfo(res.data))
    }

    if(financeInfo.length === 0){
        return(
            <Container>
                <h1>Carregando...</h1>
            </Container>
        )
    }

    return(
        <Container>
            <h1>Finanças</h1>
            <FinanceTable financeInfo={financeInfo}/>
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

    .linha{
        background: 
    }
`;