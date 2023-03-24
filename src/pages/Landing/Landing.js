import styled from "styled-components";
import LoginForm from "../Login/LoginForm";
import { useState } from "react";
import Header from "./Header";
import PresentationArea from "./PresentationArea";
import RegistrationForm from "../Registration/RegistrationForm";

export default function Landing() {
    const [isLogin, setIsLogin] = useState(true);

    return(
        <Container>
            <Header/>
            <div>
                <PresentationArea/>
                <div>
                    <div>
                        <button onClick={() => setIsLogin(true)}>Login</button>
                        <button onClick={() => setIsLogin(false)}>Registro</button>
                    </div>
                    {isLogin ? <LoginForm/> : <RegistrationForm/>}
                </div>
            </div>
        </Container>
    );
};

const Container = styled.div`
    & > div:nth-child(2){
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 85vh;
        padding-left: 25px;
        padding-right: 25px;

        & > div:nth-child(2){
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    };
`;
