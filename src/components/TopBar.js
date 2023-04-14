import styled from "styled-components";
import logo from "../assets/images/logo.png"

export default function TopBar() {
    return(
        <Container>
            <img src={logo}/>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    background-color: #0E2A47;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    height: 80px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;

    img{
        height: 50px;
        padding-right: 20px;
    }
`;