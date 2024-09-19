import { createContext, useEffect, useState } from "react"; 
import axios from "axios";

export const ProductDataContext = createContext();

function ProductDataProvider({children}){

    const [productData, setProductData] = useState({products:[], category:[]});

    async function fetchProductData(){
        try{
            const response = await axios.get("https://run.mocky.io/v3/9297301c-741d-44bc-ac12-b771dbab2634");
            setProductData(response.data);
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchProductData();
    },[])

    return (
        <ProductDataContext.Provider value={productData}>
            {children}
        </ProductDataContext.Provider>
    )
}

export default ProductDataProvider;