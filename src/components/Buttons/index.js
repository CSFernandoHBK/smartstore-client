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

const InsertNewButton = styled(Button)`
    height: 30px;
    width: auto;
    background-color: #28A745;
    font-size: 18px;
    margin-left: 40px;
`

const BackButton = styled(Button)`
    background-color: #28A745;    
`

const DetailsButton = styled(Button)`
    height: 30px;
    background-color: #28A745;
    width: auto;
    font-size: 14px;
    margin-left: 20px;
`

const buttons = {
    Button,
    SubmitButton,
    CancelButton,
    ButtonsArea,
    InsertNewButton,
    BackButton,
    DetailsButton
}

export default buttons;