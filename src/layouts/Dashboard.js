import styled from "styled-components"

export default function DashboardLayout({children}){
    return(
        <Container>
            {children}
        </Container>
    )
}

const Container = styled.div`
    padding-left: 150px;
    padding-top: 80px;
`
