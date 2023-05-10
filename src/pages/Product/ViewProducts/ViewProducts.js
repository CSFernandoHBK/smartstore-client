import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { urlAPI } from "../../../constants/URLs";
import ProductCard from "./ProductCard";
import img1 from "../../../assets/images/img1.png"
import NewCard from "./NewCard";

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
            <Container>
                <h1>Produtos</h1>
                <div>
                    <NewCard/>
                </div>    
            </Container>
        )
    }

    return(
        <Container>
            <h1>Produtos</h1>
            <div>
                {productList.map((a) => <ProductCard productInfo={a} img={img1}/>)}   
                <NewCard/>
            </div>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;

    div:nth-child(2){
        display:flex;
        flex-wrap: wrap;
        border: 1.5px solid #FF897E;
    }

    h1{
        margin-bottom: 20px;
        font-size: 30px;
    }
`;