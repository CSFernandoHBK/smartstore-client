import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { urlAPI } from "../../../constants/URLs";

export default function CreateProduct() {
    const [name, setName] = useState("");
    const [buyPrice, setBuyPrice] = useState();
    const [sellPrice, setSellPrice] = useState();
    const [stock, setStock] = useState();
    const [disabled, setDisabled] = useState(false);
    const token = JSON.parse(localStorage.getItem("token"));
    const navigate = useNavigate();

    async function sendProduct(event){
        event.preventDefault();
        setDisabled(true);

        const requisition = axios.post(`${urlAPI}product`, {
            name: name,
            buyPrice: Number(buyPrice),
            sellPrice: Number(sellPrice),
            stock: Number(stock)
        }, {headers: {"Authorization": `Bearer ${token}`}})
        requisition.then((r) => {console.log(r);navigate("/product")})
        requisition.catch((err) => {console.log(err);alert("Erro! tente novamente");setDisabled(false)})
    }

    return(
        <Container>
            <h1>Novo produto</h1>
            <Form onSubmit={sendProduct}>
                <input type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Nome" 
                disabled={disabled} 
                required />
                <input type="number" 
                value={buyPrice} 
                onChange={(e) => setBuyPrice(e.target.value)} 
                placeholder="Preço de compra" 
                disabled={disabled} 
                required />
                <input type="number" 
                value={sellPrice} 
                onChange={(e) => setSellPrice(e.target.value)} 
                placeholder="Preço de venda" 
                disabled={disabled} 
                required />
                <input type="number" 
                value={stock} 
                onChange={(e) => setStock(e.target.value)} 
                placeholder="Estoque" 
                disabled={disabled} 
                required />
                <input type="file"
                placeholder="Insira a imagem"
                />
                <button type="submit" disabled={disabled}>Criar produto</button>
            </Form>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;

    h1{
        margin-bottom: 20px;
        font-size: 30px;
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;

    input{
        width: 332px;
        height: 55px;
        margin-bottom: 10px;
        font-weight: 600;
        font-size: 16px;
        color: #151940;
        padding-left: 10px;

        ::placeholder{
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 124.5%;
            color: #7F8192;
        }
    }

    button{
        background: #FF897E;
        border-radius: 8px;
        width: 332px;
        height: 56px;
        font-weight: 700;
        font-size: 18px;
        line-height: 100%;
        color: #FFFFFF;
        margin-top: 5px;
    }
`