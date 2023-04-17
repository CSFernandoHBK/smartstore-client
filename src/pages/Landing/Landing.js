import styled from "styled-components";
import LoginForm from "../Login/LoginForm";
import { useState } from "react";
import Header from "./Header";
import PresentationArea from "./PresentationArea";
import RegistrationForm from "../Registration/RegistrationForm";
import buttons from "../../components/Buttons";

export default function Landing() {
    const [isLogin, setIsLogin] = useState(true);

    return(
        <Container>
            <Header/>
            <div>
                <PresentationArea/>
                <FormArea>
                    <div>
                        <Button isLogin={isLogin} onClick={() => setIsLogin(true)}>Login</Button>
                        <Button isLogin={!isLogin} onClick={() => setIsLogin(false)}>Registro</Button>
                    </div>
                    {isLogin ? <LoginForm/> : <RegistrationForm/>}
                </FormArea>
            </div>
        </Container>
    );
};

const Container = styled.div`
    background-color: #E5E5E5;

    & > div:nth-child(2){
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 85vh;
        padding-left: 25px;
        padding-right: 25px;
    };
`;

const FormArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    & > div:nth-child(1){
        margin-bottom: 15px;
        width: 230px;
        display: flex;
        justify-content: space-between;
    }
`

const Button = styled.button`
    border-radius: 8px;
    width: 100px;
    height: 30px;
    font-weight: 700;
    font-size: 18px;
    line-height: 100%;
    color: #FFFFFF;
    background: ${(props) => props.isLogin ? "#113EA7" : "#3daed1"};
`


