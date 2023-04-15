import styled from "styled-components";

const Button = styled.button`
    border-radius: 8px;
    width: 332px;
    height: 56px;
    font-weight: 700;
    font-size: 18px;
    line-height: 100%;
    color: #FFFFFF;
    margin-bottom: 10px;
`

const SubmitButton = styled(Button)`
    background-color: #28A745;    

`

const CancelButton = styled(Button)`
    background-color: #DC3545;
    width: 250px;
`

const ButtonsArea = styled.div`
    display: flex;
    width: 332px;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
`

const buttons = {
    SubmitButton,
    CancelButton,
    ButtonsArea
}

export default buttons;