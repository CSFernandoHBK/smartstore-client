import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import { urlAPI } from "../../../constants/URLs";
import dayjs from "dayjs";
import buttons from "../../../components/Buttons";
import { useNavigate } from "react-router-dom";


export default function NewSell() {    
    const [value, setValue] = useState();
    const [description, setDescription] = useState("");
    const [date, setDate] = useState();
    const [disabled, setDisabled] = useState(false);
    const navigate = useNavigate();
    const token = JSON.parse(localStorage.getItem("token"));
    const {SubmitButton, CancelButton, ButtonsArea} = buttons;

    async function handleSubmit(event){
        event.preventDefault();
        setDisabled(true);
        
        const formatedDate = dayjs(date).toDate();
        
        const requisition = axios.post(`${urlAPI}finance`, {
            value: Number(value),
            isEntry: true,
            description: description,
            date: formatedDate
        }, {headers: {"Authorization": `Bearer ${token}`}})
        requisition.then((res) => {console.log(res);alert("Criado!")})
        .catch((err) => {console.log(err);alert("Erro! Tente novamente");setDisabled(false)})

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
                <ButtonsArea>
                    <SubmitButton type="submit" disabled={disabled}>Criar produto</SubmitButton>
                    <CancelButton onClick={() => navigate("/sell")}>Cancelar</CancelButton>
                </ButtonsArea>
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
`