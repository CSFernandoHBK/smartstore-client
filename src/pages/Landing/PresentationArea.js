import styled from "styled-components";
import imgExport from "../../assets/images/imgExport.png"

export default function PresentationArea() {
    return(
        <Container>
            <h1>A MELHOR SOLUÇÃO PARA GESTÃO DO SEU NEGÓCIO DE IMPORTAÇÃO</h1>
            <img src={imgExport}/>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50vw;

    h1{
        color: #0E2A47;
        font-size: 30px;
        margin-bottom: 20px;
        text-align: center;
    }

    img{
        height: 410px;
        width: 600px;
    }
`;
