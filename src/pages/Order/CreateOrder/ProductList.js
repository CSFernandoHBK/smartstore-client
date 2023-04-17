import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { urlAPI } from "../../../constants/URLs";
import { formatValue } from "../../../services";
import ProductListLine from "./ProductListLine";

export default function ProductTable(props) {
    const {setSelectedProducts, selectedProducts} = props;
    const token = JSON.parse(localStorage.getItem("token"));
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        getProductList();
    }, [])

    function getProductList(){
        const requisition = axios.get(`${urlAPI}product`, 
        {headers: {"Authorization": `Bearer ${token}`}})
        requisition.then((res) => setProductList(res.data))
    }

    function handleCheckboxChange(productId){
        const isSelected = selectedProducts.includes(productId);
        if(isSelected){
            setSelectedProducts(selectedProducts.filter(id => id !== productId));
        } else {
            setSelectedProducts([...selectedProducts, productId]);
        }
    }

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
                        <TableCell>Quantidade</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {productList.map((a) => 
                    <ProductListLine 
                    setSelectedProducts={setSelectedProducts}
                    selectedProducts={selectedProducts}
                    productId={a.id}
                    productInfo={a}
                    />
                    )}
                    </TableBody>
            </table>
        </Container>
    );
};

const Container = styled.div`
    .quantity{
        width: 60px;
    }

`