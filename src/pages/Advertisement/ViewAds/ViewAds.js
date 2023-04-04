import styled from "styled-components";
import SideBar from "../../../components/Sidebar/SideBar";
import TopBar from "../../../components/TopBar";

export default function ViewAds() {
    return(
        //O conteudo vai embaixo da topbar
        <>
            <Container>
                <SideBar/>
                <div>
                    <TopBar/>
                </div>
            </Container>
        </>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100vh;
    width: 100vw;

    & > div:nth-child(2){
        width: 80vw;
        padding-top: 80px;
    }
`;
