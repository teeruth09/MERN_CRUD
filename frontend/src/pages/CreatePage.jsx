import React from 'react'
import { Button, Container, Heading, Input, useColorModeValue, useToast, VStack, Box } from '@chakra-ui/react';
import { useState } from 'react'
import { useProductStore } from '../store/product';
const CreatePage = () => {

    const [newProduct,setNewProduct] = useState({
        name : "",
        price :"",
        image:"",
    });
    // const toast = useToast();
    
    const {createProduct} = useProductStore();
    const handleAddProduct = async () =>{
        // console.log(newProduct)
        const {success, message} = await createProduct(newProduct)
        console.log("Success:",success)
        console.log("Message:",message)
    }

    return (
        <Container maxW = {'max-content'}>
            <VStack spacing={8}>
                <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>Create New Product</Heading>
            </VStack>

            <Box w ={'full'} bg={useColorModeValue("white","gray.800")} p={6} rounded={"lg"} shadow={"md"}>
                <VStack spacing={4}>
                    <Input 
                        placeholder='Product Name'
                        name='name'
                        value={newProduct.name}
                        onChange={(event) => setNewProduct({...newProduct, name: event.target.value})}
                    />
                    <Input 
                        placeholder='Price'
                        name='price'
                        value={newProduct.price}
                        onChange={(event) => setNewProduct({...newProduct, price: event.target.value})}
                    />
                    <Input 
                        placeholder='Image URL'
                        name='image'
                        value={newProduct.image}
                        onChange={(event) => setNewProduct({...newProduct, image: event.target.value})}
                    />

                    <Button colorScheme='blue' onClick={handleAddProduct} w='full'>
                        Add Product
                    </Button>
                    
                </VStack>
            </Box>
        </Container>
    )
}

export default CreatePage
