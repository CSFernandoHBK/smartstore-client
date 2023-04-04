import { useParams } from "react-router-dom";
import styled from "styled-components";

export default function OrderDetails(props) {
    const params = useParams();
    const orderId = params.orderId;

    return(
        <Container>
            tá no order {orderId}
        </Container>
    );
};

const Container = styled.div`

`;