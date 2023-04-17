import axios from "axios";
import dayjs from "dayjs";
import { urlAPI } from "../constants/URLs";

export function formatValue(value){
    return ((value / 100).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }));
}

export function formatDate(date){
    return dayjs(date).format('DD/MM/YYYY')
}

export function signOut(token){
    localStorage.removeItem("token");
    const requisition = axios.delete(`${urlAPI}auth`, 
    {headers: {"Authorization": `Bearer ${token}`}})
    requisition.then(() => window.location.reload());
}