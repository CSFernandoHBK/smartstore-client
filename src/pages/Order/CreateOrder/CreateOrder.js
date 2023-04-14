import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { urlAPI } from "../../../constants/URLs";
import dayjs from "dayjs";
import axios from "axios";

export default function NewOrder() {
    const [value, setValue] = useState();
    const [date, setDate] = useState();
    const [disabled, setDisabled] = useState(false);
    const token = JSON.parse(localStorage.getItem("token"));
    const navigate = useNavigate();
    const [selectedItems, setSelectedItems] = useState([]);

    function handleSubmit(event){
        event.preventDefault();
        
        const formatedDate = dayjs(date).toDate();
        
        const requisition = axios.post(`${urlAPI}finance`, {
            value: Number(value),
            isEntry: false,
            description: `pedido`,
            date: formatedDate
        }, {headers: {"Authorization": `Bearer ${token}`}})
        requisition.then((res) => {console.log(res);alert("Criado!")})
        .catch((err) => console.log(err))

        const reqOrder = axios.post(`${urlAPI}order`, {
            value: Number(value),
            date: formatedDate
        }, {headers: {"Authorization": `Bearer ${token}`}})
        requisition.then((res) => {console.log(res);alert("Criado!")})
        .catch((err) => console.log(err))

        setValue("");
        setDate("");
    }

    return(
        <Container>
            <div>
                <h1>Cadastrar novo pedido</h1>
                <Form onSubmit={handleSubmit}>
                    <input type="number" 
                    value={value} 
                    onChange={(e) => setValue(e.target.value)} 
                    placeholder="Valor do pedido" 
                    disabled={disabled} 
                    required />
                    <input type="date" 
                    value={date}
                    onChange={(e) => setDate(e.target.value)} 
                    name="Data do pedido" 
                    disabled={disabled} 
                    />
                    <button type="submit" disabled={disabled}>Criar pedido</button>
                </Form>
            </div>
            <ProductArea>
                lista de produtos
            </ProductArea>
        </Container>
    );
};

const Container = styled.div`
    display: flex;

    h1{
        margin-bottom: 20px;
        font-size: 30px;
    }
`;

const ProductArea = styled.div`
    margin-left: 80px;
`

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
