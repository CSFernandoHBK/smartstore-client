import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import img1 from "../../../assets/images/img1.png"
import { urlAPI } from "../../../constants/URLs";

export default function DetailsArea(props) {
    const {id, name, buyPrice, sellPrice, stock} = props.productInfo;
    const token = JSON.parse(localStorage.getItem("token"));
    const navigate = useNavigate();

    function deleteProduct(id){
        const requisition = axios.delete(`${urlAPI}product/${id}`,
        {headers: {"Authorization": `Bearer ${token}`}})
        requisition.then(() => {alert("Produto deletado");navigate("/product")})
    }

    return(
        <Container>
            <img src={img1}/>
            <div>
                <h1>{name}</h1>
                <div>
                    <div>
                        <span>Valor de compra:</span>
                        <span>R$ {buyPrice/100}</span>
                    </div>
                    <div>
                        <span>Valor de venda:</span>
                        <span>R$ {sellPrice/100}</span>
                    </div>    
                </div>
                <div>
                    <div>
                        <span>Total vendido:</span>
                        <span>{8} und</span>    
                    </div>
                    <div>
                        <span>Estoque:</span>
                        <span>{stock} und</span>
                    </div>
                </div>
                <ButtonsArea>
                    <button>Editar produto</button>
                    <button onClick={() => deleteProduct(id)}>Deletar produto</button>
                </ButtonsArea>  
            </div>
            
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    height: 100%;
    align-items: center;

    h1{
        font-size: 30px;
        margin-bottom: 30px;
    }

    img{
        height: 60vh;
        margin-right: 100px;
        border: 1.5px solid #FF897E;
    }

    & > div{
        width: 320px;
        & > div{
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
            & > div{  
                display: flex;
                flex-direction: column;
                width: 150px;
                span:nth-child(1){
                    font-size: 18px;
                }
                span:nth-child(2){
                    font-size: 20px;
                }
            }
        }
    }
`;

const ButtonsArea = styled.div`
    display: flex;
    justify-content: space-between;
    width: 320px;

    button{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 6px 20px;
        gap: 8px;
        width: 150px;
        height: 36px;
        border-radius: 4px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #272E3B;
    }

    & > button:nth-child(1){
        background: #F7BA1E;
    }

    & > button:nth-child(2){
        background: #E34935;
    } 
    
`