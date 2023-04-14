import { TableCell, TableRow } from "@mui/material";
import { formatDate, formatValue } from "../../../services";


export default function FinanceLine(props) {
    const {isEntry, date, value, description} = props.financeInfo;

    return(
        <TableRow>
            <TableCell>{isEntry ? "Entrada" : "Saída"}</TableCell>
            <TableCell>{formatDate(date)}</TableCell>
            <TableCell>{formatValue(value)}</TableCell>
            <TableCell>{description}</TableCell> 
        </TableRow>    
    );
};