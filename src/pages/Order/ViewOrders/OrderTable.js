import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import hooks from "../../../hooks";
import TableLine from "./TableLine";

export default function OrderTable(props) {
    const {orderList} = props;
    const navigate = useNavigate();

    return(
        <Container>
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Data</TableCell>
                    <TableCell>Valor</TableCell>
                    <TableCell>Rastreamento</TableCell>
                    <TableCell>Recebido?</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
               {orderList.map((a) => 
                <TableLine orderInfo={a}/>
               )}
            </TableBody>
            <ButtonNew onClick={() => navigate("/order/new")}>Inserir novo pedido</ButtonNew>    
        </Container>
    );
};

const Container = styled.div`

`;

const ButtonNew = styled.button`
    width: 100%;
    height: 50px;
`