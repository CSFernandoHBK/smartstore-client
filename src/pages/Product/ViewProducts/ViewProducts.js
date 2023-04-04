import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { urlAPI } from "../../../constants/URLs";
import ProductCard from "./ProductCard";
import img1 from "../../../assets/images/img1.png"

export default function ViewProducts() {
    const [productList, setProductList] = useState([]);
    const token = JSON.parse(localStorage.getItem("token"));

    useEffect(() => {
        const requisition = axios.get(`${urlAPI}product`,
        {headers: {"Authorization": `Bearer ${token}`}})
        requisition.then((res) => setProductList(res.data))
    }, [])

    if(productList.length === 0){
        return(
            <div>
                Carregando
            </div>
        )
    }

    return(
        <Container>
            {productList.map((a) => <ProductCard productInfo={a} img={img1}/>)}
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 85vw;
`;