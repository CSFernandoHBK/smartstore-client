import styled from "styled-components";

export default function Header() {
    return(
        <Container>
            <div>Logo</div>
            <div>
                <button>Serviços</button>
                <button>Entre em contato</button>
            </div>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    background-color: blue;
    justify-content: space-between;
    padding: 10px 10px 10px;
    height: 12vh;

    & > div:nth-child(2){
        display: flex;

        & > button:nth-child(1){
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 6px 20px;
            gap: 8px;
            width: 85px;
            height: 36px;
            background: #1B53C5;
            border-radius: 4px;
            margin-right: 15px;
        }
    }
`;
