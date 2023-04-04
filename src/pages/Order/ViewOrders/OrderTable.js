import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function OrderTable(props) {
    const {orderList} = props;
    const navigate = useNavigate();

    return(
        <Container>
            <TableHead>
                <TableRow>
                    <TableCell>id</TableCell>
                    <TableCell>data</TableCell>
                    <TableCell>valor</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
               {orderList.map((a) => 
                <TableRow>
                  <TableCell>{a.id}</TableCell>
                  <TableCell>{a.date}</TableCell>
                  <TableCell>{a.value}</TableCell>
                  <TableCell>
                    <button onClick={() => navigate(`/order/${a.id}`)}>Saiba mais</button>
                  </TableCell>
                </TableRow>
               )} 
            </TableBody>
        </Container>
    );
};

const Container = styled.div`

`;