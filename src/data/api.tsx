import { useEffect, useState } from "react";
import axios from "axios";

const GetAllProducts = () => {

  //Define the typ for the product
  type Product = {
    productId: number;
    productName: string;
    description: string;
    quantity: string;
    price: number;
    categoryName: string;
    imageUrl: string;
  }
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

 const GET_ALL_PRODUCTS = "https://localhost:7066/api/Product/GetAllProductsWithCategory";

 useEffect(() => {
  const fetchData = async () => {
    try {
      const { data: response } = await axios.get(GET_ALL_PRODUCTS);
      setData(response.result); // Assuming the API response structure includes a `result` field
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // You can handle Axios errors here
        console.error("Axios error: ", error.message);
        setError(new Error(error.message));
      } else {
        // Handle non-Axios errors here
        console.error("An unexpected error occurred: ", error);
        setError(new Error("An unexpected error occurred"));
      }
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, [GET_ALL_PRODUCTS]);


  return{
    data,
    loading,
    error,
  };
};

export default GetAllProducts;

