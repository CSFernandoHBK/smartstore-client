import { TableCell, TableRow } from "@mui/material";


export default function FinanceLine(props) {
    const {isEntry, date, value, description} = props.financeInfo;

    return(
        <TableRow>
            <TableCell>{isEntry ? "Entrada" : "Saída"}</TableCell>
            <TableCell>{date}</TableCell>
            <TableCell>R$ {value}</TableCell>
            <TableCell>{description}</TableCell> 
        </TableRow>    
    );
};