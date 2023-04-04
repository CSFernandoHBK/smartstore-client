import styled from "styled-components";
import SideBar from "../../components/Sidebar/SideBar";
import TopBar from "../../components/TopBar";
import ViewProducts from "../Product/ViewProducts/ViewProducts";

export default function Home() {
    return(
        <Container>
            <SideBar/>
            <div>
                <TopBar/>
                <ViewProducts/>
            </div>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;

    & > div:nth-child(2){
        display: flex;
        flex-direction: column;
        padding-top: 80px;
    }
`;
