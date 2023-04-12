import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import { urlAPI } from "../../../constants/URLs";
import dayjs from "dayjs";

export default function NewSell() {    
    const [value, setValue] = useState();
    const [description, setDescription] = useState("");
    const [date, setDate] = useState();
    const [disabled, setDisabled] = useState(false);
    const token = JSON.parse(localStorage.getItem("token"));

    async function handleSubmit(event){
        event.preventDefault();
        
        const formatedDate = dayjs(date).toDate();
        
        const requisition = axios.post(`${urlAPI}finance`, {
            value: Number(value),
            isEntry: true,
            description: description,
            date: formatedDate
        }, {headers: {"Authorization": `Bearer ${token}`}})
        requisition.then((res) => {console.log(res);alert("Criado!")})
        .catch((err) => console.log(err))

        setValue("");
        setDate("");
        setDescription("");
    }
    return(
        <Container>
            <h1>Cadastrar nova venda</h1>
            <Form onSubmit={handleSubmit}>
                <input type="number" 
                value={value} 
                onChange={(e) => setValue(e.target.value)} 
                placeholder="Valor" 
                disabled={disabled} 
                required />
                <input type="text" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
                placeholder="Descrição" 
                disabled={disabled} 
                required />
                <input type="date" 
                value={date}
                onChange={(e) => setDate(e.target.value)} 
                name="Data da venda" 
                disabled={disabled} 
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

const DateArea = styled.div`
    display: flex;
    border-color: #FFFFFF !important;

    button{
        width: 80px !important;
    }
    input{
        width: 332px !important;
    }
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    width: 600px;

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