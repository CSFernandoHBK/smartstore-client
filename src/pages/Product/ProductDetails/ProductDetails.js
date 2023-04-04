import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import SideBar from "../../../components/Sidebar/SideBar";
import TopBar from "../../../components/TopBar";
import { urlAPI } from "../../../constants/URLs";
import DetailsArea from "./DetailsArea";

export default function ProductDetails() {
    const params = useParams();
    const productId = params.productId;
    const token = JSON.parse(localStorage.getItem("token"));
    const [productInfo, setProductInfo] = useState([])

    useEffect(() => {
      const requisition = axios.get(`${urlAPI}product/${productId}`,
      {headers: {"Authorization": `Bearer ${token}`}})
      requisition.then((res) => setProductInfo(res.data))
    }, [])

    if(productInfo.length === 0){
        return(
            <div>
                Carregando
            </div>
        )
    }

    return(
        <Container>
            <SideBar/>
            <div>
                <TopBar/>
                <DetailsArea productInfo={productInfo}/>
            </div>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: space-between;

    & > div:nth-child(2){
        width: 80vw;
    }
`;
