import { Outlet } from "react-router-dom";
import styled from "styled-components";
import SideBar from "../../components/Sidebar/SideBar";
import TopBar from "../../components/TopBar";
import DashboardLayout from "../../layouts/Dashboard";

export default function Dashboard() {
    return(
            <DashboardLayout>
                <SideBar/>
                <div>
                    <TopBar/>
                    <Outlet/>
                </div>
            </DashboardLayout>
    )
}

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