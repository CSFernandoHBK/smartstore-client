import { TableBody, TableCell, TableRow } from "@mui/material";
import styled from "styled-components";

export default function FinanceLine(props) {
    return(
        <TableRow>
            <TableCell>1</TableCell>
            <TableCell>02-01-2022</TableCell>
            <TableCell>459.45</TableCell>
            <TableCell>Comentário do pedido</TableCell>
        </TableRow>
    );
};

const Container = styled.div`

`;