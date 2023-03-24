import styled from "styled-components";

export default function PresentationArea() {
    return(
        <Container>
            <h1>A MELHOR SOLUÇÃO PARA GESTÃO DO SEU NEGÓCIO DE IMPORTAÇÃO</h1>
            <div>área da foto</div>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 50vw;

    h1{
        color: #1B53C5;
        font-size: 30px;
        margin-bottom: 20px;
    }

    div{
        background-color: blue;
        height: 300px;
    }
`;
