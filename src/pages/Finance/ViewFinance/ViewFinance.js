import { TableBody, TableCell, TableHead } from "@mui/material";
import styled from "styled-components";
import FinanceLine from "./FinanceLine";

export default function ViewFinance() {
    return(
        <Container>
            <h1>Finanças</h1>
            <TableHead>
                <TableCell>Tipo</TableCell>
                <TableCell>Data</TableCell>
                <TableCell>Valor</TableCell>
                <TableCell>Sobre</TableCell>
            </TableHead>
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