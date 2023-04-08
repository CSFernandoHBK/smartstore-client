import React from "react";
import styled from "styled-components";
import SideBarItem from "./SideBarItem";


export default function SideBar() {
    const functions = [
        {name: "Produtos", route:"/product"}, {name: "Pedidos", route:"/order"}, 
        {name: "Anúncios", route:"/advertisement"}, {name: "Finanças", route:"/finance"}, 
        {name: "Mensagens", route:"/message"}
    ]

    return(
        <Container>
            {functions.map((a) => <SideBarItem function={a}/>)}
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
    background-color: grey;
    padding-left: 20px;
    padding-top: 20px;
`;
