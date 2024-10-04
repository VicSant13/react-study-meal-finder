import React from 'react'
import { MealDetails } from '../types'
import { ModalBody, ModalCloseButton, ModalHeader,Image, Heading,Text, OrderedList, ListItem } from '@chakra-ui/react'

type Props = {
    data:MealDetails
}

const joinIngredients = (data:MealDetails)=>{
    let ingredients = []
    for(let index=1;index<=20;index++){
        const ingredient = data[`strIngredient${index}`]
        const measure = data[`strMeasure${index}`]

        if(ingredient !== ""){
            ingredients.push(`${ingredient} - ${measure}`)
        }        
    }
    return ingredients;
}
const RecipeModalContent = ({data}: Props) => {
    const ingredients = joinIngredients(data);
  return (
    <>
        <ModalHeader>
            {data.strMeal}
        </ModalHeader>
        <ModalCloseButton/>
        <ModalBody>
            <Image  alt={data.strMeal}src={data.strMealThumb}></Image>
            <Heading mt="4" mb="4" size="md">
                Ingredientes
            </Heading>
            <OrderedList>
                {ingredients.map((i)=>(
                    <ListItem>
                        {i}
                    </ListItem>
                ))}
            </OrderedList>
            <Text whiteSpace="pre-line" mt="4">{data.strInstructions}</Text>
        </ModalBody>
    </>
  )
}

export default RecipeModalContent