import styled from "styled-components";
import buttons from "../../components/Buttons";
import logo from "../../assets/images/logo.png"
import { useNavigate } from "react-router-dom";

export default function Header() {
    const {DetailsButton, InsertNewButton} = buttons;
    const navigate = useNavigate();

    return(
        <Container>
            <img src={logo}/>
            <div>
                <DetailsButton>Serviços</DetailsButton>
                <DetailsButton onClick={() => navigate("/contact")}>Entre em contato</DetailsButton>
            </div>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    background-color: #0E2A47;
    justify-content: space-between;
    align-items: center;
    padding: 10px 10px 10px;
    height: 12vh;

    & > div:nth-child(2){
        display: flex;

        & > button{
            height: 40px;
            width: 150px;
            margin-bottom: 0;
        }
    }

    img{
        height: 50px;
    }
`;
