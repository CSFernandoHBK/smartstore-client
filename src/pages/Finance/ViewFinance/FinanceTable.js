import styled from "styled-components";
import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import FinanceLine from "./FinanceLine";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { formatValue } from "../../../services";

export default function FinanceTable(props) {
    const {financeInfo} = props;
    const [result, setResult] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        calculateResult(financeInfo);  
    }, [])
    

    function calculateResult(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
          const { value, isEntry } = arr[i];
          if (isEntry) {
            sum += value;
          } else {
            sum -= value;
          }
        }
        setResult(sum);
    }

    return(
        <Container>
            <TableHead>
                <TableCell>Tipo</TableCell>
                <TableCell>Data</TableCell>
                <TableCell>Valor</TableCell>
                <TableCell>Sobre</TableCell>
            </TableHead>
            <TableBody>
                {financeInfo.map((a) => 
                <FinanceLine financeInfo={a}/>
                )}
                <TableRow>
                    <TableCell>Resultado</TableCell>
                    <TableCell>{formatValue(result)}</TableCell>
                </TableRow>
            </TableBody>
            {/*<ButtonNew onClick={() => navigate("/finance/new")}>Inserir nova movimentação financeira</ButtonNew>*/}   
        </Container>
    );
};

const Container = styled.div`

`;

const ButtonNew = styled.button`
    width: 100%;
    height: 50px;
`