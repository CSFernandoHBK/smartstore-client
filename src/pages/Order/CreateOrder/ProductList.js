import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { urlAPI } from "../../../constants/URLs";
import { formatValue } from "../../../services";

export default function ProductTable() {
    const token = JSON.parse(localStorage.getItem("token"));
    const [selectedItems, setSelectedItems] = useState([]);
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        getProductList();
    }, [])

    function getProductList(){
        const requisition = axios.get(`${urlAPI}product`, 
        {headers: {"Authorization": `Bearer ${token}`}})
        requisition.then((res) => setProductList(res.data))
    }

    console.log(productList);

    if(productList.length === 0){
        return(
            <span>Carregando...</span>
        )
    }

    return(
        <Container>
            <table>
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell>Id</TableCell>
                        <TableCell>Nome</TableCell>
                        <TableCell>Preço</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {productList.map((a) => 
                    <TableRow>
                        <TableCell><input type="checkbox"/></TableCell>
                        <TableCell>{a.id}</TableCell>
                        <TableCell>{a.name}</TableCell>
                        <TableCell>{formatValue(a.buyPrice)}</TableCell>
                    </TableRow>
                    )}
                </TableBody>
            </table>
        </Container>
    );
};

const Container = styled.div`
`