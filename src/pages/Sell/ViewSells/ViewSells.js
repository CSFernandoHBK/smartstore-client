import styled from "styled-components";

export default function ViewSells() {
    return(
        <Container>
            <h1>Vendas</h1>
            
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;

    h1{
        margin-bottom: 20px;
        font-size: 30px;
    }
`;