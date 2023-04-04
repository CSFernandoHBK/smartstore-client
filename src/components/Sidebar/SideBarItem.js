import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function SideBarItem(props) {
    const {name, route} = props.function;
    const navigate = useNavigate();

    return(
        <Container onClick={() => navigate(route)}>
            <div></div>
            {name}
        </Container>
    );
};

const Container = styled.div`
    width: 90%;
    height: 65px;
    padding-left: 20px;
    background: #FFFFFF;
    //box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    border-color: black;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;