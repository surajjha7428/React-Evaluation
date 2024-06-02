import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Spinner,
  SimpleGrid,
  Box,
  Text,
  Button,
  Select,
} from "@chakra-ui/react";
import ProductDetails from "./ProductDetails";

function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const getProducts = () => {
    let url = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`;

    axios({
      method: "get",
      url: url,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log("Fetched products:", response.data.data);
        setProducts(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching products:", error);
        setError(true);
        setLoading(false);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  if (loading) {
    return (
      <div>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Text color="red.500">Something went wrong</Text>
      </div>
    );
  }

  return (
    <>
      <h1 style={{ textAlign: "center", color: "red", fontSize: "30px" }}>
        Products Page
      </h1>

      <div>
        <SimpleGrid column={1} spacing={10}>
          {products.map((product) => (
            <Box
              key={product.id}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              p={4}
            >
              <Text mt={2} fontWeight="bold">
                {product.title}
              </Text>
              <Text>{product.category}</Text>
              <Text>${product.price}</Text>
              <Button colorScheme="green" mt={4} ml={2}>
                Add to Cart
              </Button>
            </Box>
          ))}
        </SimpleGrid>
      </div>
    </>
  );
}

export default Home;
