import { Card, CardBody, Heading, CardFooter, Button,Image,Text } from "@chakra-ui/react"
import { m } from "framer-motion"
import { Meal } from "../types";

type Props = {
  meal:Meal;
  openRecipe:()=>void;
}

const MealCard = ({meal,openRecipe}: Props) => {
  return (
    <>
          <Card boxShadow="lg">
            <CardBody>
              <Image
                src={meal.strMealThumb}
                alt={meal.strMeal}
                borderRadius='lg'
              />
              
                <Text>
                  <Heading size='md' color="blue.400">{meal.strMeal}</Heading>
                </Text>
              
            </CardBody>
            <CardFooter pt="0">
                <Button onClick={openRecipe} variant='solid' color="white" bgColor="blue.400">
                  VER RECETA
                </Button>
            </CardFooter>
          </Card>
    </>
  )
}

export default MealCard