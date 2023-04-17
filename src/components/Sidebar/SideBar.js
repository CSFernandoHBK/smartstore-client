import React from "react";
import styled from "styled-components";
import SideBarItem from "./SideBarItem";
import { signOut } from "../../services";
import { useNavigate } from "react-router-dom";

export default function SideBar() {
    const token = JSON.parse(localStorage.getItem("token"));
    const navigate = useNavigate();

    const functions = [
        {name: "Produtos", route:"/product"}, {name: "Pedidos", route:"/order"},
        {name: "Finanças", route:"/finance"}, {name: "Vendas", route:"/sell"},
        {name: "Anúncios", route:"/advertisement"}
    ]

    return(
        <Container>
            <div>
                {functions.map((a) => <SideBarItem function={a}/>)}   
            </div>
            <div>
                <Button>Sua conta</Button>
                <LogoutButton onClick={() => {signOut(token);navigate("/")}}>Logout</LogoutButton>
            </div>
        </Container>
    );
};

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    width: 200px;
    height: 100%;
    background-color: #1C995E;
    padding-left: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & > div:nth-child(2){
        display: flex;
        flex-direction: column;
    }
`;

const Button = styled.button`
    border-radius: 8px;
    width: 90%;
    height: 45px;
    font-weight: 700;
    font-size: 16px;
    line-height: 100%;
    color: #000;
    margin-bottom: 10px;
`

const LogoutButton = styled(Button)`
    background-color: #E34935;
    height: 30px;
`
