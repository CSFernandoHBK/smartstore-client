import dayjs from "dayjs";

export function formatValue(value){
    return ((value / 100).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }));
}

export function formatDate(date){
    return dayjs(date).format('DD/MM/YYYY')
}