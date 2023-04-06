import styled from "styled-components";
import SideBar from "../../../components/Sidebar/SideBar";
import TopBar from "../../../components/TopBar";

export default function ViewAds() {
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
