import styled from "styled-components";
import SideBar from "../../../components/Sidebar/SideBar";
import TopBar from "../../../components/TopBar";
import { useParams } from "react-router-dom";

export default function OrderDetails(props) {
    const params = useParams();
    const orderId = params.orderId;

    return(
        <Container>
            
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100%;
    width: 100%;

    & > div:nth-child(2){
        width: 80vw;
        padding-top: 80px;
    }
`;