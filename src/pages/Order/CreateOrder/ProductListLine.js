import { useState } from "react"
import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { formatValue } from "../../../services";

export default function ProductListLine(props) {
    const {setSelectedProducts, selectedProducts, productId, productInfo} = props;
    const [quantity, setQuantity] = useState(1);

    function handleCheckboxChange(productId){
        const isSelected = selectedProducts.filter((a) => a.productId === productId);
        if(isSelected.length !== 0){
            setSelectedProducts(selectedProducts.filter((id) => id !== productId));
        } else {
            setSelectedProducts([...selectedProducts, {productId: productId, quantity: quantity}]);
        }
    }

    function handleQuantityChange(event){

    }

    console.log(`produto ${productId} vai ${quantity} unidades`);

    return(
        <TableRow>
            <TableCell>
                <input type="checkbox"
                checked={selectedProducts.filter((a) => a.productId === productId).length !== 0}
                onChange={() => handleCheckboxChange(productId)}
            />
            </TableCell>
            <TableCell>{productId}</TableCell>
            <TableCell>{productInfo.name}</TableCell>
            <TableCell>{formatValue(productInfo.buyPrice)}</TableCell>
            <TableCell>
                <input type="number" 
                className="quantity" 
                defaultValue={1}
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}/>
            </TableCell>
        </TableRow>
    )
}