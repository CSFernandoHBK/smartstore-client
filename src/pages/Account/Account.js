import styled from "styled-components";
import logo from "../../assets/images/logo.png"

export default function Account() {
    return(
        <Container>
            <img src={logo}/>
            <h1>Em desenvolvimento...</h1>
        </Container>
    );
};

const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   height: 100%;
   
   img{
        height: 130px;
        width: 500px;
        margin-bottom: 50px;
   }

   h1{
        font-size: 30px;
        margin-bottom: 20px;
   }
`;