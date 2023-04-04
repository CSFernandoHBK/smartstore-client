import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { urlAPI } from "../../constants/URLs";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    const [disabled, setDisabled] = useState(false);
    const token = "";

    useEffect(() => {
        if(token){
          navigate("/home")
        }
      }, [])
      
  
    function sendLogin(event){
        event.preventDefault();
        setDisabled(true);

        const requisicao = axios.post(`${urlAPI}auth`, {
            "email": email,
            "password": password 
        })
        requisicao.then((res) => {responseProcess(res.data.token)});
        requisicao.catch((res) => {console.log(res);alert(res.response.data);setDisabled(false)});
    };

    function responseProcess(res){
        console.log(res);
        localStorage.setItem("token", JSON.stringify(res));
        navigate("/product");
    }

    return(
        <Container>
            <h1>Já é cadastrado? Entre agora!</h1>
            <Form onSubmit={sendLogin}>
                <input type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="E-mail" 
                disabled={disabled} 
                required />
                <input type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Senha" 
                disabled={disabled} 
                required />
                <button type="submit" disabled={disabled}>ENTRAR</button>
            </Form>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50vw;
    max-width: 800px; 

    h1{
        font-family: 'Roboto', sans-serif;
        font-size: 30px;
        color: #151940;
        margin-bottom: 25px;
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 80%;
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
