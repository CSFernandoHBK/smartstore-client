import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { formatDate, formatValue } from "../../../services";

export default function SellTable(props) {
    const {sellsList} = props;
    const navigate = useNavigate();

    return(
        <Container>
            <table>
                <TableHead>
                    <TableRow style={{ backgroundColor: 'lightgray' }}>
                        <TableCell style={{ border: '1px solid black' }}>Valor</TableCell>
                        <TableCell style={{ border: '1px solid black' }}>Descrição</TableCell>
                        <TableCell style={{ border: '1px solid black' }}>Data</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {sellsList.map((a) => 
                    <TableRow>
                        <TableCell style={{ border: '1px solid black' }}>{formatValue(a.value)}</TableCell>
                        <TableCell style={{ border: '1px solid black' }}>{a.description}</TableCell>
                        <TableCell style={{ border: '1px solid black' }}>{formatDate(a.date)}</TableCell>
                    </TableRow>
                    )}
                </TableBody>
            </table>
        </Container>
    );
};

const Container = styled.div`

`;