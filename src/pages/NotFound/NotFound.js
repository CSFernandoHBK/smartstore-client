import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function NotFound() {
    const navigate = useNavigate();

    return(
        <Container>
            <h1>Não encontrado</h1>
            <button onClick={() => navigate("/product")}>Retornar para a home</button>
        </Container>
    );
};

const Container = styled.div`

`;