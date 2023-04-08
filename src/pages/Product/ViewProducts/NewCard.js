import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function NewCard(props) {
    const token = JSON.parse(localStorage.getItem("token"));
    const navigate = useNavigate();

    return(
        <Container onClick={() => navigate(`/product/new`)}>
            <h3>Inserir novo produto</h3>
            <button>Inserir produto</button>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border: 1.5px solid #FF897E;
    width: 180px;
    margin: 20px 20px 20px;

    img{
        height: 160px;
        width: 160px;
        margin: 10px 10px 10px;
        border: 1px solid black;
    }

    h3{
        margin-bottom: 10px;
        font-size: 15px;
        text-align: center;
    }

    h4{
        margin-bottom: 10px;
    }

    button{
        margin-bottom: 10px;
        background: #FF897E;
        border-radius: 8px;
        width: 90%;
        height: 30px;
        font-weight: 700;
        font-size: 18px;
        line-height: 100%;
        color: #FFFFFF;
    }


`;