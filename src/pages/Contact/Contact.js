import styled from "styled-components"
import logo from "../../assets/images/logo.png"
import { useNavigate } from "react-router-dom"
import buttons from "../../components/Buttons";

export default function Contact() {
    const navigate = useNavigate();
    const {BackButton} = buttons;

    return(
        <Container>
            <img src={logo}/>
            <h1>Em desenvolvimento...</h1>
            <BackButton onClick={() => navigate("/")}>Voltar para home</BackButton>
        </Container>
    )
}

const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   height: 100vh;
   
   img{
        height: 130px;
        width: 500px;
        margin-bottom: 50px;
   }

   h1{
        font-size: 30px;
        margin-bottom: 20px;
   }
`