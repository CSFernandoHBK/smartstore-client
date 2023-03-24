import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { urlAPI } from "../../constants/URLs";

export default function RegistrationForm() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [senhaConf, setSenhaConf] = useState("");
    const navigate = useNavigate();
    const [disabled, setDisabled] = useState(false);

    function sendRegister(event){
        event.preventDefault();
        setDisabled(true);
        if(senha !== senhaConf){
            setDisabled(false);
            return(alert("As senhas precisam ser iguais!"))
        }
        const requisicao = axios.post(`${urlAPI}user/sign-up`,{
            "name": nome,
            "password": senha,
            "email": email
        })
        requisicao.then(() => {alert("Conta criada com sucesso!");navigate("/")});
        requisicao.catch((res) => {console.log(res);alert(res.response.data);setDisabled(false)});
    }

    // verificar se um campo está ativo, alterar a cor a partir disso

    return(
        <Container>
            <h1>Ainda não é cadastrado? Cadastre-se agora!</h1>
            <Form onSubmit={sendRegister}>
                <input type="text" 
                value={nome} 
                onChange={(e) => setNome(e.target.value)} 
                placeholder="Nome" 
                disabled={disabled} 
                required />
                <input type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="E-mail" 
                disabled={disabled} 
                required />
                <input type="password" 
                value={senha} 
                onChange={(e) => setSenha(e.target.value)} 
                placeholder="Senha" 
                disabled={disabled} 
                required />
                <input type="password" 
                value={senhaConf} 
                onChange={(e) => setSenhaConf(e.target.value)} 
                placeholder="Confirme a senha" 
                disabled={disabled} 
                required />
                <div>
                    <input type="checkbox" id="teste"/>
                    <label for="teste">I’ve read and agree to the terms of privacy policy</label>  
                </div>
                <button type="submit" 
                disabled={disabled}
                >Cadastrar</button>
            </Form>
        </Container>
    )
}

const Container = styled.div`
    width: 50vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #E5E5E5;

    h1{
        font-family: 'Roboto', sans-serif;
        font-size: 30px;
        color: #151940;
        margin-bottom: 25px;
    }
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    max-width:  800px;
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

    div:nth-child(5){
        display: flex;
        align-items: center;
        height: 30px;

        input{
            width: 20px;
            height: 20px;
            background: rgba(255, 137, 126, 0.16);
            border: 1.5px solid #FF897E;
            border-radius: 4px;
        }

        label{
            font-weight: 400;
            font-size: 13px;
            line-height: 20px;
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